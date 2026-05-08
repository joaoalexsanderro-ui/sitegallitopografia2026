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
  console.log(`[Server] Attempting to load server build from: ${serverBuildPath}`);
  const serverBuild = await import(serverBuildPath);
  handler = serverBuild.default.fetch;
  console.log('[Server] Server build loaded successfully');
} catch (err) {
  console.error('[Server] CRITICAL: Failed to load server build:', err);
}

const app = createApp();

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
  '.txt': 'text/plain',
};

const getMimeType = (ext) => mimes[ext.toLowerCase()] || 'application/octet-stream';

app.use(
  eventHandler(async (event) => {
    const method = event.node.req.method;
    const rawUrl = event.node.req.url || '/';
    const host = event.node.req.headers.host || 'localhost';
    const protocol = event.node.req.headers['x-forwarded-proto'] || 'http';
    const prefix = event.node.req.headers['x-forwarded-prefix'] || '';
    
    const url = new URL(rawUrl, `${protocol}://${host}`);
    const pathname = url.pathname;

    console.log(`[Request] ${method} ${pathname} (Prefix: "${prefix}")`);

    if (pathname.includes('..')) {
      console.warn(`[Security] Blocked path with "..": ${pathname}`);
      return createError({ statusCode: 400, statusMessage: 'Bad Request' });
    }

    // 1. Try serving static files
    // We try the original path, and if there's a prefix, we try without it too.
    const pathsToTry = [pathname];
    if (prefix && pathname.startsWith(prefix)) {
      let stripped = pathname.slice(prefix.length);
      if (!stripped.startsWith('/')) stripped = '/' + stripped;
      if (stripped !== pathname) pathsToTry.push(stripped);
    }

    for (const p of pathsToTry) {
      const filePath = path.join(__dirname, 'dist', 'client', p);
      try {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath);
          event.node.res.setHeader('Content-Type', getMimeType(ext));
          event.node.res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          console.log(`[Static] Serving: ${filePath}`);
          return sendStream(event, fs.createReadStream(filePath));
        }
      } catch (e) {
        // Continue to next path or SSR
      }
    }

    // Health check
    if (pathname === '/health') {
      return 'OK';
    }

    // 2. SSR Handling
    if (!handler) {
      console.error('[SSR] Handler not available');
      throw createError({ statusCode: 500, statusMessage: 'Server build not loaded' });
    }

      // Skip SSR for asset-like paths that weren't found in static files
      if (pathname.includes('.') && !pathname.endsWith('.html') && !pathname.endsWith('.php')) {
        console.log(`[404] Asset not found: ${pathname}`);
        event.node.res.statusCode = 404;
        return 'Not Found';
      }

    try {
      // Reconstruct the full URL for the internal router
      const fullUrl = new URL(rawUrl, `${protocol}://${host}`);
      
      // Normalize prefix: ignore if it's just "/"
      const normalizedPrefix = (prefix === '/' ? '' : prefix);
      
      // If we are behind a proxy that strips the prefix but we need it for routing,
      // we must ensure the URL passed to the internal router has the correct pathname.
      if (normalizedPrefix) {
        if (!fullUrl.pathname.startsWith(normalizedPrefix)) {
          const originalPath = fullUrl.pathname;
          fullUrl.pathname = path.join(normalizedPrefix, originalPath).replace(/\/+/g, '/');
          console.log(`[SSR] Restoring prefix for routing: ${originalPath} -> ${fullUrl.pathname}`);
        }
      }
      
      console.log(`[SSR] Final URL for router: ${fullUrl.toString()}`);

      const requestHeaders = new Headers();
      Object.entries(event.node.req.headers).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => requestHeaders.append(key, v));
        } else if (value) {
          requestHeaders.set(key, value);
        }
      });

      const request = new Request(fullUrl.toString(), {
        method,
        headers: requestHeaders,
        body: ['GET', 'HEAD'].includes(method) ? null : event.node.req,
        duplex: 'half',
      });

      console.log(`[SSR] Dispatching to handler: ${fullUrl.pathname}`);
      const response = await handler(request);
      
      console.log(`[SSR] Response: ${response.status}`);
      event.node.res.statusCode = response.status;
      
      response.headers.forEach((value, key) => {
        if (!['content-encoding', 'content-length', 'transfer-encoding'].includes(key.toLowerCase())) {
          event.node.res.setHeader(key, value);
        }
      });

      if (!event.node.res.getHeader('Content-Type')) {
        event.node.res.setHeader('Content-Type', 'text/html; charset=utf-8');
      }

      let responseText = await response.text();
      
      // Handle HTML content specifically for prefixes and base tags
      const isHtml = responseText.trim().startsWith('<!DOCTYPE html>') || responseText.trim().startsWith('<html');
      
      if (isHtml) {
        event.node.res.setHeader('Content-Type', 'text/html; charset=utf-8');
        
        if (normalizedPrefix) {
          // Ensure the base href ends with a slash
          const baseHref = normalizedPrefix.endsWith('/') ? normalizedPrefix : `${normalizedPrefix}/`;
          
          // Use an absolute URL for base href to avoid relative path issues
          const protocolAndHost = `${protocol}://${host}`;
          const absoluteBaseHref = `${protocolAndHost}${baseHref}`;
          const baseTag = `<base href="${absoluteBaseHref}">`;
          
          if (responseText.includes('</head>')) {
            responseText = responseText.replace('</head>', `${baseTag}</head>`);
          } else {
            // If no </head>, try to inject at the start of <html> or at the very beginning
            responseText = responseText.replace(/<html[^>]*>/i, `$&${baseTag}`);
          }
        }
      } else if (!event.node.res.getHeader('Content-Type')) {
        event.node.res.setHeader('Content-Type', 'text/html; charset=utf-8');
      }
      
      return responseText;
    } catch (error) {
      console.error('[SSR] Error:', error);
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
  console.log(`[Server] > Ready at http://0.0.0.0:${port}`);
});
