const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop',{prods:products, docTitle: 'Shop'}); //renders the shop.pug file
    //The second arguement in the lines above, we are creating a key:value
    //relation to refer to the objects (products and 'Shop')
    //the keys or the variables holding the objects will now be avaliable in 
    //shop.pug
});

module.exports = router;