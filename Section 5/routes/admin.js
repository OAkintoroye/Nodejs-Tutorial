const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

const products = [];

//app.get only fires for GET requests and the same for app.post = Post requests
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('in another middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({title:req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;