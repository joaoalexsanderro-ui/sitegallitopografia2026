import { createServer } from 'node:http';
import { createApp, eventHandler, toNodeListener } from 'h3-v2';
import { default as handler } from './dist/server/server.js';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const app = createApp();

// Mime types helper
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

// SSR Handler
const ssrHandler = async (event) => {
  const url = new URL(event.node.req.url, `http://${event.node.req.headers.host || 'localhost'}`);
  
  const request = new Request(url.href, {
    method: event.node.req.method,
    headers: event.node.req.headers,
  });

  try {
    const response = await handler.fetch(request);
    
    event.node.res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      event.node.res.setHeader(key, value);
    });
    
    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        event.node.res.write(value);
      }
    }
    event.node.res.end();
  } catch (err) {
    console.error('SSR Error:', err);
    if (!event.node.res.writableEnded) {
      event.node.res.statusCode = 500;
      event.node.res.end('Internal Server Error');
    }
  }
};

// Main handler
app.use(eventHandler(async (event) => {
  const url = new URL(event.path, 'http://localhost');
  const pathname = url.pathname;
  
  // Try serving from dist/client
  const publicPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = join(__dirname, 'dist/client', publicPath);
  
  try {
    const s = await stat(filePath);
    if (s.isFile()) {
      const ext = publicPath.substring(publicPath.lastIndexOf('.'));
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      event.node.res.setHeader('Content-Type', contentType);
      // Cache assets for production
      if (pathname.startsWith('/_build/') || pathname.startsWith('/assets/')) {
        event.node.res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      return await readFile(filePath);
    }
  } catch (e) {
    // Not a file, fall through to SSR
  }
  
  return ssrHandler(event);
}));

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
