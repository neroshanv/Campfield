// FIrst Basic Route
const express = require('express');
const path = require('path');
// connect mongoose
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
// catch error class
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');
const Campground = require('./models/campground');


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
const app = express();

app.engine('egs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
});

// list of all campgrounds
app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({})
    res.render('camgrounds/index', { campgrounds })
}));

// new form and serve that somewhere as a GET request and then create route as a POST request
app.get('/campgrounds.new', (req, res) => {
    res.render('campgrounds/new');
})

// end point where the form is submitted too
// creation of campground
app.post('/campgrounds', catchAsync(async (req, res) => {
    if (!req.body.campground) throw new ExpressError('Invaild Campground Data', 400);
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}));

// implement show route which is eventually going to be a details page for campground
app.get('/campgrounds/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', { campground });
});

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
}))

// sending a real post request that we are faking with methodOverride
app.put('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    // find the id and update from edit.ejs as a whole
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground.id}`)
}));

// delete button
app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}));

// app.all means every single request and * means for every path
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

// catch error
// statusCode = 500 as default
app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Something went wrong' } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })

})

app.listen(3000, () => {
    console.log('Serving on port 3000')
});

