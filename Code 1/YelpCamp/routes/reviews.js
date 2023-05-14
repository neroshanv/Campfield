const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn } = require('../middleware');
const Campground = require('../models/campground');
// review model
const Review = require('../models/review');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');



// setup a form to make a review
router.post('/', isLoggedIn, validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findId(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Created new review!')
    res.redirect(`/campgrounds/${campground._id}`);

}))

// delete review
router.delete('/campgrounds/:id/reviews/:reviewId'), catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success', 'Successfully deleted campground')
    res.redirect(`/campgrounds/${id}`);
})


module.exports = router;