//controller for the signup route
module.exports = {
	signup: function(req, res) {
		res.render('signup');
	},
	signin: function(req, res) {
		res.render('signin', {
			username: req.user
		});
	},
	dashboard: function(req, res) {
		res.render('dash');
	},
	logout: function(req, res) {
		req.session.destory(function(err) {
			res.redirect('/');
		});
	}
}