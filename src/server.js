const http = require('http');
const app = require('./app');
const port = normalizePort(process.env.port || '3000');
const server = http.createServer(app);

app.set('port', port);

server.listen(port, () => {
  const address = server.address().port;
  console.log(`Listening on port: ${address}`);
})

function normalizePort(n) {
  const port = parseInt(n, 10);
  if (port >= 0) return port;
}

/* 80 ch
11111_11111_11111_11111_11111_11111_11111_11111_11111_11111_11111_11111_11111_111
*/