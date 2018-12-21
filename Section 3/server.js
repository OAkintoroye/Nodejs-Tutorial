//How to create a server in node.js

const http = require('http');

const routes = require('./routes');

//require is used to import files into nodejs 
// ./ = relative path and / = absolute path

//Three different ways to represent
/*function rqListner(req,res){
}
http.createServer(rqListner);*/
/*http.createServer(function(req,res){

});
*/
const server = http.createServer(routes);

server.listen(3000);
//go to web browser and type into address bar : localhost:3000
