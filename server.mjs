import { createServer } from 'node:http';
import {
  createApp,
  eventHandler,
  toNodeListener,
  createError,
  sendStream,
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

// SSR Handler and Static File Logic
app.use(
  eventHandler(async (event) => {
    const host = event.node.req.headers.host || 'localhost';
    const protocol = event.node.req.headers['x-forwarded-proto'] || 'http';
    const prefix = event.node.req.headers['x-forwarded-prefix'] || '';
    
    const url = new URL(event.node.req.url, `${protocol}://${host}`);
    let pathname = url.pathname;

    if (pathname.includes('..')) return;

    // Check for static files. 
    // If we have a prefix, we try to look for the file both with and without the prefix.
    let staticPathsToTry = [pathname];
    if (prefix && pathname.startsWith(prefix)) {
      let stripped = pathname.slice(prefix.length);
      if (!stripped.startsWith('/')) stripped = '/' + stripped;
      staticPathsToTry.push(stripped);
    }

    for (const p of staticPathsToTry) {
      const filePath = path.join(__dirname, 'dist', 'client', p);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        event.node.res.setHeader('Content-Type', getMimeType(ext));
        event.node.res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        
        const stream = fs.createReadStream(filePath);
        return sendStream(event, stream);
      }
    }


    // SSR Handler
    if (!handler) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Server build not loaded',
      });
    }

    // Skip SSR for asset-like paths that weren't found in dist/client
    if (pathname.includes('.') && !pathname.endsWith('.html')) {
      return createError({
        statusCode: 404,
        statusMessage: 'Not Found',
      });
    }

    try {
      const host = event.node.req.headers.host || 'localhost';
      const protocol = event.node.req.headers['x-forwarded-proto'] || 'http';
      const prefix = event.node.req.headers['x-forwarded-prefix'] || '';
      
      const fullUrl = new URL(event.node.req.url, `${protocol}://${host}`);
      
      // Normalize the URL for the SSR handler.
      // If the prefix is missing from the pathname, prepend it.
      if (prefix && !fullUrl.pathname.startsWith(prefix)) {
        const originalPath = fullUrl.pathname;
        fullUrl.pathname = path.join(prefix, originalPath).replace(/\/+/g, '/');
        console.log(`Prefixing URL: ${originalPath} -> ${fullUrl.pathname}`);
      }

      const requestHeaders = new Headers();
      Object.entries(event.node.req.headers).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => requestHeaders.append(key, v));
        } else if (value) {
          requestHeaders.set(key, value);
        }
      });

      const request = new Request(fullUrl.toString(), {
        method: event.node.req.method,
        headers: requestHeaders,
        body: ['GET', 'HEAD'].includes(event.node.req.method) ? null : event.node.req,
        duplex: 'half',
      });

      console.log(`Handling SSR request for: ${pathname}`);
      const response = await handler(request);
      
      event.node.res.statusCode = response.status;
      
      response.headers.forEach((value, key) => {
        if (!['content-encoding', 'content-length', 'transfer-encoding'].includes(key.toLowerCase())) {
          event.node.res.setHeader(key, value);
        }
      });

      if (!event.node.res.getHeader('Content-Type')) {
        event.node.res.setHeader('Content-Type', 'text/html; charset=utf-8');
      }

      const responseText = await response.text();
      return responseText;
    } catch (error) {
      console.error('SSR Error:', error);
      return createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        data: error.message,
      });
    }
  })
);

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log(`> Server ready at http://0.0.0.0:${port}`);
});
