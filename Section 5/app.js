const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//If a certian response needs to be applied to all routes, 
//always include this middleware above all the others

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

//considers the routes in the /routes/admin file
app.use(adminRoutes);

/** the middleware below will trigger for any link that begins with
'/'. So it is important put middlewares that specify a specific path
above this middleware, without the next()
this way only the correct middleware will be processed!
*/
app.use(shopRoutes);

app.listen(3000);

/*
Above is an alternative to the below code:

const server = http.createServer(app);

server.listen(3000);
*/
