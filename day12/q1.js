const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const fName = queryObject.fName || 'Guest';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<html><body><h1>Hello ${fName}</h1></body></html>`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:8080/');
});
 