import { createServer } from 'node:http';
import {
  createApp,
  eventHandler,
  toNodeListener,
} from 'h3';
import { createMiddleware } from '@tanstack/react-start-server';
import { getManifest } from '@tanstack/react-start/server';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the server build
const serverBuild = await import('./dist/server/index.mjs');

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
  };
  return mimes[ext.toLowerCase()] || 'application/octet-stream';
};

// Serve static files from dist/client
app.use(
  eventHandler(async (event) => {
    const url = new URL(event.node.req.url, `http://${event.node.req.headers.host || 'localhost'}`);
    let pathname = url.pathname;
    
    // Safety check for directory traversal
    if (pathname.includes('..')) {
      return;
    }

    // Default to index.html for root if not handled by SSR (though SSR should handle it)
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

// TanStack Start SSR handler
const ssrHandler = createMiddleware({
  getManifest,
  serverBuild,
});

app.use(
  eventHandler(async (event) => {
    // Let the SSR handler handle the request
    return ssrHandler(event);
  })
);

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});



