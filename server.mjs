import { createServer } from 'node:http';
import {
  createApp,
  eventHandler,
  toNodeListener,
  createError,
} from 'h3';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pre-load the server build to catch errors early
let handler;
const serverBuildPath = path.resolve(__dirname, 'dist', 'server', 'server.js');

try {
  console.log(`Attempting to load server build from: ${serverBuildPath}`);
  const serverBuild = await import(serverBuildPath);
  handler = serverBuild.default.fetch;
  console.log('Server build loaded successfully');
} catch (err) {
  console.error('CRITICAL: Failed to load server build:', err);
}

const app = createApp();

const getMimeType = (ext) => {
  const mimes = {
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.eot': 'application/vnd.ms-fontobject',
  };
  return mimes[ext.toLowerCase()] || 'application/octet-stream';
};

// Middleware for static files
app.use(
  eventHandler(async (event) => {
    const url = new URL(event.node.req.url, `http://${event.node.req.headers.host || 'localhost'}`);
    const pathname = url.pathname;

    if (pathname.includes('..')) return;

    // Resolve file path relative to dist/client
    const filePath = path.join(__dirname, 'dist', 'client', pathname);

    try {
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        event.node.res.setHeader('Content-Type', getMimeType(ext));
        event.node.res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        
        // Use a stream for better performance and reliability with binary files
        const stream = fs.createReadStream(filePath);
        return stream;
      }
    } catch (e) {
      // Fall through to SSR
    }
  })
);

// SSR Handler
app.use(
  eventHandler(async (event) => {
    if (!handler) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Server build not loaded',
      });
    }

    const host = event.node.req.headers.host || 'localhost';
    const protocol = event.node.req.headers['x-forwarded-proto'] || 'http';
    const url = new URL(event.node.req.url, `${protocol}://${host}`);

    // Skip SSR for asset-like paths that weren't found
    if (url.pathname.includes('.') && !url.pathname.endsWith('.html')) {
      return;
    }

    try {
      const requestHeaders = new Headers();
      Object.entries(event.node.req.headers).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => requestHeaders.append(key, v));
        } else if (value) {
          requestHeaders.set(key, value);
        }
      });

      const request = new Request(url.toString(), {
        method: event.node.req.method,
        headers: requestHeaders,
        body: ['GET', 'HEAD'].includes(event.node.req.method) ? null : event.node.req,
        // @ts-ignore - Node.js Request init might need this
        duplex: 'half',
      });

      console.log(`Handling SSR request for: ${url.pathname}`);
      const response = await handler(request);
      console.log(`SSR Response status: ${response.status}`);

      response.headers.forEach((value, key) => {
        event.node.res.setHeader(key, value);
      });

      event.node.res.statusCode = response.status;
      const responseText = await response.text();
      return responseText;
    } catch (error) {
      console.error('SSR Error detailed:', error);
      return createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        data: error.message + '\n' + error.stack,
      });
    }
  })
);

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log(`> Server ready at http://0.0.0.0:${port}`);
});
