const express = require('express');

const router = express.Router();

//app.get only fires for GET requests and the same for app.post = Post requests
router.get('/add-product', (req,res,next) =>{
    console.log('in another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;