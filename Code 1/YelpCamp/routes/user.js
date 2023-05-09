const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register')
});
router.post('/register', CatchAsync(async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.flash('success', 'Welcome to Yelp Camp!');
        res.redirect('/campgrounds');
    } catch (e) {
        req.flash('error', e.message);
        res.direct('register')
    }
}));

// login route

router.get('/login', (req, res) => {
    res.render('users/login');
})

// logging in
router.post('/login', passport.authenticate('local'), { failureFlash: true, failureRedirect: '/login' }, (req, res) => {
    res.flash('success', 'welcome back!');
    res.redirect('/campgrounds');
})

// log out
router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
});


modeule.exports = router;