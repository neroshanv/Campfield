const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
// catch error class
const catchAsync = require('../utils/catchAsync');
//middleware
const { isLoggedIn, IsAuthor, validateCampground } = require('../middleware');



const Campground = require('../models/campground');

router.route('/')
    // list of all campgrounds
    .get(catchAsync(campgrounds.index))
    // creation of campground
    .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

// new form and serve that somewhere as a GET request and then create route as a POST request
router.get('/new', IsLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    // implement show route which is eventually going to be a details page for campground
    .get('/:id', catchAsync(campgrounds.showCampground))
    // sending a real post request that we are faking with methodOverride
    .put('/:id', IsLoggedIn, IsAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    // delete button
    .delete('/:id', IsLoggedIn, IsAuthor, catchAsync(campgrounds.deleteCampgrounds));





// end point where the form is submitted too
router.get('/:id/edit', IsLoggedIn, IsAuthor, catchAsync(campgrounds.renderEditForm));



module.exports = routers;