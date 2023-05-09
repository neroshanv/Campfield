module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.flash('error', 'you must be signed in');
        return res.redirect('/login');
    }
    next();
}

