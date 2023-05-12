const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const { checkReturnTo } = require('../middleware');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(checkReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

module.exports = router;


// PREVIOUS VERSION --------------------------------------------------------------------------------------------

// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const catchAsync = require('../utils/catchAsync');
// const User = require('../models/user');
// const { storeReturnTo } = require('../middleware');


// router.get('/register', (req, res) => {
//     res.render('users/register')
// });
// router.post('/register', CatchAsync(async (req, res) => {
//     try {
//         const { email, username, password } = req.body;
//         const user = new User({ email, username });
//         const registeredUser = await User.register(user, password);
//         // log user in
//         req.login(registeredUser, err => {
//             if (err) return next(err);
//             req.flash('success', 'Welcome to Yelp Camp!');
//             res.redirect('/campgrounds');
//         })
//         req.flash('success', 'Welcome to Yelp Camp!');
//         res.redirect('/campgrounds');
//     } catch (e) {
//         req.flash('error', e.message);
//         res.direct('register')
//     }
// }));

// // login route

// router.get('/login', (req, res) => {
//     res.render('users/login');
// })

// // logging in middleware

// // router.post('/login', passport.authenticate('local'), { failureFlash: true, failureRedirect: '/login' }, (req, res) => {
// //     res.flash('success', 'welcome back!');
// //     res.redirect('/campgrounds');
// // })
// router.post('/login',
//     // use the storeReturnTo middleware to save the returnTo value from session to res.locals
//     storeReturnTo,
//     // passport.authenticate logs the user in and clears req.session
//     passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
//     // Now we can use res.locals.returnTo to redirect the user after login
//     (req, res) => {
//         req.flash('success', 'Welcome back!');
//         const redirectUrl = res.locals.returnTo || '/campgrounds'; // update this line to use res.locals.returnTo now
//         res.redirect(redirectUrl);
//     });

// // log out
// router.get('/logout', (req, res, next) => {
//     req.logout(function (err) {
//         if (err) {
//             return next(err);
//         }
//         req.flash('success', 'Goodbye!');
//         res.redirect('/campgrounds');
//     });
// });


// modeule.exports = router;