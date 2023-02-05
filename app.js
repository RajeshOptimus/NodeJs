// Import the `http` module
const http = require('http');

// Create an HTTP server that listens on port 3000
const server = http.createServer((req, res) => {
  // Write the response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World! 123');
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
