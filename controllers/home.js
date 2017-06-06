module.exports = {
  renderHome: function(req, res) {
    res.render('index', {
        userData: req.user
    });
  }
};