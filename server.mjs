import { createServer } from 'node:http';
import {
  createApp,
  eventHandler,
  toNodeListener,
} from 'h3';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the server build
const serverBuild = await import('./dist/server/server.js');
const handler = serverBuild.default.fetch;

const app = createApp();

// Simple MIME lookup
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

// Serve static files from dist/client
app.use(
  eventHandler(async (event) => {
    const host = event.node.req.headers.host || 'localhost';
    const url = new URL(event.node.req.url, 'http://' + host);
    let pathname = url.pathname;
    
    if (pathname.includes('..')) return;
    
    // Support root paths for common assets
    const filePath = path.join(__dirname, 'dist', 'client', pathname);
    
    try {
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const contentType = getMimeType(ext);
        
        event.node.res.setHeader('Content-Type', contentType);
        event.node.res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        
        return fs.readFileSync(filePath);
      }
    } catch (e) {
      // Ignore
    }
  })
);

// SSR handler
app.use(
  eventHandler(async (event) => {
    const host = event.node.req.headers.host || 'localhost';
    const protocol = event.node.req.headers['x-forwarded-proto'] || 'http';
    const url = new URL(event.node.req.url, protocol + '://' + host);

    // If it looks like a static asset that wasn't caught by the static server, 
    // it's likely a 404 or something we shouldn't SSR.
    if (url.pathname.startsWith('/assets/') || url.pathname.includes('.')) {
      return;
    }

    try {
      const requestHeaders = new Headers();
      Object.entries(event.node.req.headers).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => requestHeaders.append(key, v));
        } else if (value) {
          requestHeaders.set(key, value);
        }
      });

      const request = new Request(url.toString(), {
        method: event.node.req.method,
        headers: requestHeaders,
        body: ['GET', 'HEAD'].includes(event.node.req.method) ? null : event.node.req
      });

      const response = await handler(request);
      
      response.headers.forEach((value, key) => {
        event.node.res.setHeader(key, value);
      });
      
      event.node.res.statusCode = response.status;
      
      const body = await response.text();
      return body;
    } catch (error) {
      console.error('SSR Error:', error);
      event.node.res.statusCode = 500;
      return 'Internal Server Error';
    }
  })
);

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log('Server listening on http://0.0.0.0:' + port);
});
