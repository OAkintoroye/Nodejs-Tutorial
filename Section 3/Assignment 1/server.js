
const http = require('http');

const userpage = require('./users');

const server = http.createServer(userpage);

server.listen(3000);