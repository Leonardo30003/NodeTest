const http = require('http');

const hostname = '127.0.0.1';
const puerto = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(puerto, 'localhost', () => {
  console.log("Servidor iniciado en puerto: "+puerto);
});