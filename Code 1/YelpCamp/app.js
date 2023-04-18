// FIrst Basic Route
const express = require('express');
const path = require('path');
// connect mongoose
const mongoose = require('mongoose');
const ejsMate = require('');
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
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({})
    res.render('camgrounds/index', { campgrounds })
});

// new form and serve that somewhere as a GET request and then create route as a POST request
app.get('/campgrounds.new', (req, res) => {
    res.render('campgrounds/new');
})

// end point where the form is submitted too
// creation of campground
app.post('/campgrounds', async (req, res) => {
    try {
        const campground = new Campground(req.body.campground);
        await campground.save();
        res.redirect(`/campgrounds/${campground._id}`)
    } catch (e) {
        next(e);
    }
});

// implement show route which is eventually going to be a details page for campground
app.get('/campgrounds/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', { campground });
});

app.get('/campgrounds/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
})

// sending a real post request that we are faking with methodOverride
app.put('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    // find the id and update from edit.ejs as a whole
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground.id}`)
});

// delete button
app.delete('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

// catch error
app.use((err, req, res, next) => {
    res.send('oh boy, something went wrong')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
});

