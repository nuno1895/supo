//controller for the signup route
module.exports = {
	signup: function(req, res) {
		res.render('signup');
	},
	signin: function(req, res) {
		res.render('signin', {
			userData: req.user
		}); console.log(req.user);
	},
	index: function(req, res) {
		res.render('index', {
			userData: req.user
		});
	},
	logout: function(req, res) {
		req.session.destory(function(err) {
			res.redirect('/');
		});
	}
}