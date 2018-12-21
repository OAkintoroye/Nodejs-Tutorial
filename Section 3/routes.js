const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name = "message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        //required to quit the function execution.
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        //listen to a specified event
        req.on('data',(chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //updates message.txt (if exist, if not it creates file) with current message
            //using writeFileSync blocks any other code from being processed until the file has been created
            //fs.writeFileSync('message.txt',message);
            fs.writeFile('message.txt',message,err => {
                //302 stands for redirection
                res.statusCode = 302;
                //redirects to first page
                res.setHeader('Location', '/');
                //exit function or get an error :P
                return res.end();
            });  
        });  
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    //once end is used, you can no longer write to the client
    
};
//a global object that will store the requestHandler variable
//and allow for its contents to be imported into another file
module.exports = requestHandler;

//to export multiple things
/*
  module.exports = {
      handler: requestHandler,
      someText: 'Some hard coded text'
  }; 
  
  or

modules.exports.handler = requestHandler;
modules.exports.someText = "some hard coded text";

or 

exports.handler (whats above)
exports.someText (whats above)
*/


