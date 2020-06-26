const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'Each product must have a unique SKU']
    },
    sku: {
        type: Number,
        required: [true, 'Each product must have a unique SKU']
    },
    title: {
        type: String,
        required: [true, 'Each product must have a title']
    },
    description: {
        type: String
    },
    availableSizes: [String],
    style: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Each product must have a price']
    },
    installments: {
        type: Number,
        required: [true, 'Each product must have installments']
    },
    currencyId: {
        type: String,
        required: [true, 'Each product must have installments']
    },
    currencyFormat: {
        type: String,
        required: [true, 'Each product must have a currencyFormat']
    },
    isFreeShipping: {
        type: Boolean
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;