// Goal: roots where i can go some templates to make new farms.
// same functionality to mkae a new product but i want to be able to make a new farm.

// Dashboard page
// where we can see stats of how many products sold, etc
// we are going to connect this with farm app

const mongoose = require('mongoose')
// structure schema instead
const { Schema } = mongoose;

// idea is that a single farm can have many products
const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    // adding on both product.js(farm app) and here 
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})


// we can import the model into other parts of the program, like our routes
const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;