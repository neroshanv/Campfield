//mongoose model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema ({
    title: String,
    image: String,
    price: Number,
    Description: String,
    location: String
});

module.exports = mongoose.model('Camground', CampgroundSchema);
