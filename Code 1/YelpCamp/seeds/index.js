// connect mongoose
const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => {array[Math.floor(Math.random()* array.length)]}

// Give 50 new campgrounds
// 50 times we pick random number to get city with city name and state set that to location
// then we pick random descriptor in random place from title: and save
const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i ++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp =new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image:'https://source.unsplash.com/collection/483251',
            description: 'random description does not mean anything, had to type something in here',
            price
        })
        await camp.save();
    }
}

// connected and closeed out
seedDB().then(() => {
    mongoose.connection.close()
});