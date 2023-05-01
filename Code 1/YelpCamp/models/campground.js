//mongoose model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    Description: String,
    location: String,
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
