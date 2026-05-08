import { spawn } from 'child_process';

const server = spawn('node', ['server.mjs'], {
  env: { ...process.env, PORT: '3001' }
});

server.stdout.on('data', async (data) => {
  const output = data.toString();
  process.stdout.write('Server: ' + output);
  
  if (output.includes('Server ready')) {
    console.log('\nTesting requests...');
    
    try {
      // Test 1: SSR request without prefix
      const res1 = await fetch('http://localhost:3001/');
      console.log(`Test 1 (SSR /): ${res1.status} ${res1.headers.get('content-type')}`);
      const body1 = await res1.text();
      console.log(`Test 1 body length: ${body1.length}`);
      if (body1.length > 0) console.log(`Test 1 body starts with: ${body1.substring(0, 50)}`);

      // Test 2: SSR request with prefix
      const res2 = await fetch('http://localhost:3001/', {
        headers: { 'X-Forwarded-Prefix': '/subpath' }
      });
      console.log(`Test 2 (SSR / with prefix): ${res2.status} ${res2.headers.get('content-type')}`);
      const body2 = await res2.text();
      console.log(`Test 2 body length: ${body2.length}`);

    } catch (e) {
      console.error('Test failed:', e);
    } finally {
      server.kill();
      process.exit(0);
    }
  }
});

server.stderr.on('data', (data) => {
  process.stderr.write('Server error: ' + data.toString());
});

setTimeout(() => {
  console.error('Timeout');
  server.kill();
  process.exit(1);
}, 20000);
