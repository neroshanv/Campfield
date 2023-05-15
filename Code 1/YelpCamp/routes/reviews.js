const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn } = require('../middleware');
const Campground = require('../models/campground');
// review model
const Review = require('../models/review');
// controller
const reviews = require('../controllers/reviews');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');



// setup a form to make a review
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

// delete review
router.delete('/:reviewId'), catchAsync(reviews.deleteReview);


module.exports = router;