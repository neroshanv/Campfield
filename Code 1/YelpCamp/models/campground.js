//mongoose model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Storing image in mongo
const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/uploade/w_200');
})

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    Description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId
            ref: 'Review'
        }
    ]
});

// delete a entire review 
CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await reviewSchema.deleteMany({
            // _id: stands for review, is in document review
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Camground', CampgroundSchema);
