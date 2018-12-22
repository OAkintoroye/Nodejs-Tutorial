
//import http core module
const http = require('http');

//import user.js file
const userpage = require('./users');

//create a server by calling function found in userpage
const server = http.createServer(userpage);

//listen to server on port 3000
server.listen(3000);