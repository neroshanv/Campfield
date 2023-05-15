const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
// catch error class
const catchAsync = require('../utils/catchAsync');
//middleware
const { isLoggedIn, IsAuthor, validateCampground } = require('../middleware');



const Campground = require('../models/campground');



// list of all campgrounds
router.get('/', catchAsync(campgrounds.index));

// new form and serve that somewhere as a GET request and then create route as a POST request
router.get('/new', IsLoggedIn, campgrounds.renderNewForm)

// end point where the form is submitted too
// creation of campground
router.post('/', IsLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));

// implement show route which is eventually going to be a details page for campground
router.get('/:id', catchAsync(campgrounds.showCampground));

router.get('/:id/edit', IsLoggedIn, IsAuthor, catchAsync(campgrounds.renderEditForm));



// sending a real post request that we are faking with methodOverride
router.put('/:id', IsLoggedIn, IsAuthor, validateCampground, catchAsync(campgrounds.updateCampground));

// delete button
router.delete('/:id', IsLoggedIn, IsAuthor, catchAsync(campgrounds.deleteCampgrounds));



module.exports = routers;