import { fetch } from 'node-fetch';
import { spawn } from 'child_process';

const server = spawn('node', ['server.mjs'], {
  env: { ...process.env, PORT: '3001' }
});

server.stdout.on('data', async (data) => {
  if (data.toString().includes('Server ready')) {
    console.log('Server started. Testing requests...');
    
    try {
      // Test 1: Request with prefix that should be stripped for static file
      const res1 = await fetch('http://localhost:3001/subpath/assets/styles-B6ACmZ7M.css', {
        headers: { 'X-Forwarded-Prefix': '/subpath' }
      });
      console.log(`Test 1 (Static with prefix): ${res1.status} ${res1.headers.get('content-type')}`);

      // Test 2: Request without prefix
      const res2 = await fetch('http://localhost:3001/assets/styles-B6ACmZ7M.css');
      console.log(`Test 2 (Static without prefix): ${res2.status} ${res2.headers.get('content-type')}`);

      // Test 3: SSR request
      const res3 = await fetch('http://localhost:3001/', {
        headers: { 'X-Forwarded-Prefix': '/subpath' }
      });
      console.log(`Test 3 (SSR with prefix): ${res3.status} ${res3.headers.get('content-type')}`);
    } catch (e) {
      console.error('Test failed:', e);
    } finally {
      server.kill();
    }
  }
});

server.stderr.on('data', (data) => {
  console.error('Server error:', data.toString());
});
