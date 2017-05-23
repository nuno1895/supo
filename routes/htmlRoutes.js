var homeController = require('../controllers/home');
var authController = require('../controllers/authcontroller');
var navController = require('../controllers/navController');
module.exports = function(app) {
  app.get('/', homeController.renderHome);
  app.get('/budgetForm', navController.renderForm);

  app.get('/budgetForm/2', navController.renderForm2);
=======
  app.get('/signin', authController.signin);
  app.get('/signup', authController.signup);
  app.get('/logout', authController.logout);

};