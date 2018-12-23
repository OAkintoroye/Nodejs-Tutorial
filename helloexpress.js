const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

app.use((req,res,next) => {    
    res.send('<h1>Hello Express!!</h1>')});

console.log("Hello Express from Terminal :D ");

server.listen(3000);