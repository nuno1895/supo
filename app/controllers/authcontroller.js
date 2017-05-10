//controller for the signup route



var exports = module.exports = {}


exports.signup = function(req, res) {

    res.render('signup');

}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.dashboard = function(req, res) {

    res.render('dash');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}

exports.results = function(req, res) {

    res.render('results');

}

exports.budget = function(req, res) {

    res.render('budget');

}