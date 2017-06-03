module.exports = {
  renderForm: function(req, res) {
    res.render('budgetForm', {
    	userData: req.user
    });
  },
  renderForm2: function(req, res) {
    res.render('budgetForm2', {
    	userData: req.user
    });
  }
}