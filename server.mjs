import { createServer } from 'node:http';
import {
  createApp,
  eventHandler,
  toNodeListener,
  fromNodeRequest,
} from 'h3';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the server build (default export is an object with a fetch method)
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
    const url = new URL(event.node.req.url, \`http://\${event.node.req.headers.host || 'localhost'}\`);
    let pathname = url.pathname;
    
    // Safety check for directory traversal
    if (pathname.includes('..')) {
      return;
    }

    // SSR handles root and other pages
    if (pathname === '/') return;

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
      // Ignore errors
    }
  })
);

// SSR handler
app.use(
  eventHandler(async (event) => {
    try {
      // Convert Node.js request to Web Request for TanStack Start
      const request = fromNodeRequest(event.node.req);
      const response = await handler(request);
      
      // Copy headers from Web Response to Node.js response
      response.headers.forEach((value, key) => {
        event.node.res.setHeader(key, value);
      });
      
      event.node.res.statusCode = response.status;
      event.node.res.statusMessage = response.statusText;
      
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
  console.log(\`Server listening on http://0.0.0.0:\${port}\`);
});
