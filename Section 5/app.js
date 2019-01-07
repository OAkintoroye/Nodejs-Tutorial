const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug');
app.set('views','views');
//If a certian response needs to be applied to all routes, 
//always include this middleware above all the others

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
//considers the routes in the /routes/admin file
//app.use(adminRoutes);

/** the middleware below will trigger for any link that begins with
'/'. So it is important put middlewares that specify a specific path
above this middleware, without the next()
this way only the correct middleware will be processed!
*/
/**
 * The code below filters out/ignores '/admin' in any route address and passes the remaining
 * address to be considered by express.js
 */

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //if a route is entered but there is no middleware set for it
    //submit a 404 error status and a message using send
    // res.status(404).send('<h1>Page not found!</h1>');
   // res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
    res.status(404).render('notfound');

});
app.listen(3000);

/*
Above is an alternative to the below code:

const server = http.createServer(app);

server.listen(3000);
*/
