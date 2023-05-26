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
});

// virtual property set to true so the popup in map will work
const opts = { toJSON: { virutals: true } };

const CampgroundSchema = new Schema({
    title: String,
    images: [ImagesSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
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

// popup window for map
CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <strong><a href="/campgrounds/${this._id}">${this.title}</a><strong>
    <p>${this.description.substring(0, 20)}...</p>`
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
