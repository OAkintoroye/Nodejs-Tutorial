const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;

    if(url === '/'){
        /**
         * Add header - Suggested from Assignment Solution
         */
        res.setHeader('Content-Type','text/html');
        res.write('<html><head>Hello from the other side :D!<body>');
        res.write('<form action="/create-user" method="POST"><input type="text" name = "username"><button type="submit">Send</button></input></form>');
        res.write('</body></head></html>');

        return res.end();
    }
    if(url === '/users'){
        /**
         * Add header - Suggested from Assignment Solution
         */
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body>');
        res.write('<ul><li>User 1</li></ul><br></br>');
        res.write('<ul><li>User 2</li></ul><br></br>');
        res.write('<ul><li>User 3</li></ul><br></br>');
        res.write('<ul><li>User 4</li></ul><br></br>');
        res.write('</body></head></html>');

        return res.end();
    }
    if(url === '/create-user'){
        const body = [];
        //excuted for every new piece of new coming data
        //without these few lines of code, could not possibly
        //load the body array with text!
        req.on('data',(chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        //will run after all the data has been ran!
        return req.on('end',() =>{
         //takes parsed text and converts to string
        const parsedBody = Buffer.concat(body).toString();
        //the first element of the parsed text will be the data
        //we need (formatted as key = value before spliting)
        const userN = parsedBody.split('=')[1];

        console.log("Welcome " + userN);
        res.statusCode = 302;
        //set rediretion
        res.setHeader('Location', '/');
        return res.end();
        });
    }

 
};
module.exports = requestHandler;
