// FIrst Basic Route
const express = require('express');
const path = require('path');
// connect mongoose
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
// -----------------------------------------------------
const methodOverride = require('method-override');
// Routes
const campgrounds = require('./routes/campgrounds');
//
const reviews = require('./routes/reviews');



mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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
app.use(express.static(path.join(_dirname, 'public')))




app.use('/campgrounds', campgrounds)
app.use('./campgrounds/:idreviews')

app.get('/', (req, res) => {
    res.render('home')
});



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

