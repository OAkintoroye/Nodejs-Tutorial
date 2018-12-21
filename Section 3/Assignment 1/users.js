const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html><head>Hello from the other side :D!<body>');
        res.write('<form action="/create-user" method="POST"><input type="text" name = "username"><button type="submit">Send</button></input></form>');
        res.write('</body></head></html>');

        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',() =>{
        const parsedBody = Buffer.concat(body).toString();
        const userN = parsedBody.split('=')[1];

        console.log("Welcome " + userN);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
    }

    if(url === '/users'){
        res.write('<html><head><body>');
        res.write('<ul><li>User 1</li></ul><br></br>');
        res.write('<ul><li>User 2</li></ul><br></br>');
        res.write('<ul><li>User 3</li></ul><br></br>');
        res.write('<ul><li>User 4</li></ul><br></br>');
        res.write('</body></head></html>');

        return res.end();
    }
};
module.exports = requestHandler;
