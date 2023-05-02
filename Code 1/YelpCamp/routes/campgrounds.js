const express = require('express');
const router = express.Router();
// catch error class
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
// JOI Schema validate
const { campgroundSchema } = require('../schemas.js');


//  validation middleware
const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}


// list of all campgrounds
router.get('/', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({})
    res.render('camgrounds/index', { campgrounds })
}));

// new form and serve that somewhere as a GET request and then create route as a POST request
router.get('/new', (req, res) => {
    res.render('campgrounds/new');
})

// end point where the form is submitted too
// creation of campground
router.post('/', validateCampground, catchAsync(async (req, res) => {
    // if (!req.body.campground) throw new ExpressError('Invaild Campground Data', 400);
    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash('success', 'Successfully made a new campground');
    res.redirect(`/campgrounds/${campground._id}`)
}));

// implement show route which is eventually going to be a details page for campground
router.get('/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    if (!campground) {
        req.flash('error', 'Cannot find that campground');
        return res.redirect('./campgrounds');
    }
    res.render('campgrounds/show', { campground });
});

router.get('/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    if (!campground) {
        req.flash('error', 'Cannot find that campground');
        return res.redirect('./campgrounds');
    }
    res.render('campgrounds/edit', { campground });
}))


// sending a real post request that we are faking with methodOverride
router.put('/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    // find the id and update from edit.ejs as a whole
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    req.flash('success', 'Successfully updatescampground!')
    res.redirect(`/campgrounds/${campground.id}`)
}));

// delete button
router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}));



module.exports = routers;