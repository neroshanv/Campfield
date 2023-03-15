const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        //can't have a product without a name so it is required  
        required: true

    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

// complie our model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

