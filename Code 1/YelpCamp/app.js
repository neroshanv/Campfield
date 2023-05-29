if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}




// FIrst Basic Route
const express = require('express');
const path = require('path');
// connect mongoose
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
// session ( pretend we instilled express-session ) ( npm i express-session - right format to install on mongo)
const session = require('express-session');
// flash ( pretend we installed connect-flash)( npm i connect-flash - is how you install on mongo)
const flash = require('connect-flash');
// express error
const ExpressError = require('./utils/ExpressError');
// passport ( pretend we installed passport) ( npm i passport passport-local passport-local-mongoose)
// will have issues when installing this on mongoose>7
// you have to runn npm install mongoose@"<7.0.0" and run npm i passport passport-local passport-local-mongoose again)
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const helmet = require('helmet');
// -----------------------------------------------------
const methodOverride = require('method-override');


// Routes
const userRoutes = require('./routes/users');
const campgroundsRoutes = require('./routes/campgrounds');
const reviewsRoutes = require('./routes/reviews');



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
app.use(mongoSanitize({
    replaceWith: '_'
}))

const sessionConfig = {
    secret: 'Thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(flash());
app.use(helmet());

const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://api.tiles.mapbox.com/",
    "https://api.mapbox.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://api.mapbox.com/",
    "https://api.tiles.mapbox.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
];
const connectSrcUrls = [
    "https://api.mapbox.com/",
    "https://a.tiles.mapbox.com/",
    "https://b.tiles.mapbox.com/",
    "https://events.mapbox.com/",
];
const fontSrcUrls = [];
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/douqbebwk/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT! 
                "https://images.unsplash.com/",
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());
// we would like to use LocalStrategy that we downloaded and required 
// and for LocalStrategy the authenticate method is going to be located in user model called authenticate
passport.use(new LocalStrategy(User.authenticate()));
// telling passport how do we get data or how to store a user in the session
passport.serializedUser(User.serializedUser())
// telling passport how do we get a user out of the session
passport.deserializeUser(User.deserializeUser())


app.use((req, res, next => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
}))



app.use('/', userRoutes);
app.use('/campgrounds', campgroundsRoutes)
app.use('./campgrounds/:idreviews', reviewRoutes)



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

