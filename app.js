const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const Product = require('./modals/productModal');

app.use(cors());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));

app.get('/api/v1/products', async (req, res, next) => {
    try{
        const doc = await Product.find();
        res.status(200).json({
            status: 'success',
            results: doc.length,
            data: doc
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})

module.exports = app;


