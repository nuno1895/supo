var testApiController = require('../controllers/testApi');
var budgetController = require('../controllers/budgetController');
var Budget = require("../models/budget.js")

module.exports = function(app) {

  app.get('/test', testApiController.index);

  app.get('/budget', budgetController.index);

  app.post("/budgetdata", budgetController.saveBudget )

  app.get("/budget/all", function(req,res){
  	Budget.findAll({}).then(function(results){
  		res.json(results);
  	});
  });

  app.get("budget/:month" , function(req, res){
  	if(req.params.budget) {
  		Budget.findAll({
  			where: {
  				month: req.params.budget
  			}
  		}).then(function(results){
  			res.json(results);
  		})
  	}
  })

};
