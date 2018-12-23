//Note: express.js was installed to the root folder
// Nodemon was installed globally

const express = require('express');

const app = express();

/*app.use((req,res,next) =>{
    console.log('Im in the first middleware');
    next();
});*/
app.use('/users',(req,res,next) =>{

    console.log('Im in the users path!');
});
app.use('/', (req,res,next) =>{

    console.log('Im in the default path!');
});


app.listen(3000);
