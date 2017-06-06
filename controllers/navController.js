module.exports = {
  renderForm: function(req, res) {
    res.render('budgetForm/budgetForm', {
        userData: req.user
        });
  },
  renderForm2: function(req, res) {
    res.render('budgetForm/budgetForm2');
  }
}

