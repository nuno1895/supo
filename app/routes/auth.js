// import the auth controller and define the signup route.


var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', { successRedirect: '/dash', failureRedirect: '/signup' }));


    app.get('/dash', isLoggedIn, authController.dashboard);


    app.get('/logout', authController.logout);


    app.get('/results', isLoggedIn, authController.results);


    app.get('/budget', isLoggedIn, authController.budget);


    app.post('/signin', passport.authenticate('local-signin', { successRedirect: '/dash', failureRedirect: '/signin' }));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }

}