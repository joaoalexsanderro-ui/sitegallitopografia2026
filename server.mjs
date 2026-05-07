import { createServer } from 'node:http';
import { createApp, eventHandler, toNodeListener, serveStatic } from 'h3-v2';
import { default as handler } from './dist/server/server.js';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const app = createApp();

// SSR Handler
const ssrHandler = async (event) => {
  const url = new URL(event.node.req.url, `http://${event.node.req.headers.host || 'localhost'}`);
  
  // Construct a standard Request object from the Node request
  const request = new Request(url.href, {
    method: event.node.req.method,
    headers: event.node.req.headers,
    // Note: for production server actions, you'd need to handle the body stream here.
    // For a simple landing page, this is usually enough for GET requests.
  });

  try {
    const response = await handler.fetch(request);
    
    // Copy status and headers
    event.node.res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      event.node.res.setHeader(key, value);
    });
    
    // Stream the body
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
    event.node.res.statusCode = 500;
    event.node.res.end('Internal Server Error');
  }
};

// Main handler
app.use(eventHandler(async (event) => {
  const pathname = event.path === '/' ? '/index.html' : event.path;
  const filePath = join(__dirname, 'dist/client', pathname);
  
  try {
    const s = await stat(filePath);
    if (s.isFile()) {
      return await readFile(filePath);
    }
  } catch (e) {
    // Not a file, handle as SSR
  }
  
  return ssrHandler(event);
}));

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
