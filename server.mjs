import { createServer } from 'node:http';
import { createReadableStreamFromReadable } from '@web-std/file';
import {
  createApp,
  eventHandler,
  toNodeListener,
  fromNodeMiddleware,
  serveStatic,
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

// Serve static files from dist/client
app.use(
  '/',
  serveStatic({
    getContents: (id) => {
      const filePath = path.join(__dirname, 'dist', 'client', id);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return fs.readFileSync(filePath);
      }
      return null;
    },
    getMeta: (id) => {
      const filePath = path.join(__dirname, 'dist', 'client', id);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const stats = fs.statSync(filePath);
        return {
          size: stats.size,
          mtime: stats.mtimeMs,
        };
      }
      return null;
    },
  })
);

// TanStack Start SSR handler
const ssrHandler = createMiddleware({
  getManifest,
  serverBuild,
});

app.use(
  eventHandler(async (event) => {
    // If the request is for a static asset that wasn't caught by serveStatic
    if (event.path.startsWith('/_build/') || event.path.includes('.')) {
      return;
    }
    return ssrHandler(event);
  })
);

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});

