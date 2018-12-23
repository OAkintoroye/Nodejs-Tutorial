const express = require('express');

const app = express();
//If a certian response needs to be applied to all routes, 
//always include this middleware above all the others

app.use('/', (req,res,next) =>{
    console.log('This always runs');
    
});
app.use('/add-product', (req,res,next) =>{
    console.log('in another middleware');
    res.send('<h1>Add Product Page</h1>');

});
/** the middleware below will trigger for any link that begins with
'/'. So it is important put middlewares that specify a specific path
above this middleware, without the next()
this way only the correct middleware will be processed!
*/
app.use('/', (req,res,next) =>{
    console.log('in another middleware');
    res.send('<h1>Hello from express</h1>');

});

app.listen(3000);

/*
Above is an alternative to the below code:

const server = http.createServer(app);

server.listen(3000);
*/
