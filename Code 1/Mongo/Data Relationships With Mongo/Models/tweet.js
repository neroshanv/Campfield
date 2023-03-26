const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    })


// Model
const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    // set user to a reference
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);


// // make 1 user, make 1 tweet then setting that tweet to have the user property of entire user object
// const makeTweets = async () => {
//     // const u = new User({ username: 'chickenfan99', age: 61 });
//     const user = await User.findOne({ username: 'chickenfan99' })
//     const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises', likes: 23 });
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets();


// make a new function called find tweets
const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user')
    console.log(t);
}

findTweet();



const farmSchema = new Schema({
    name: String,
    city: String,
    // ObjectId
    // ----------------------------------------------------------------------
    // ref to be the name of the model that we already setup for referencing
    // so this is going to be an array of product IDs
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

