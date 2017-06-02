var testApiController = require('../controllers/testApi');
var budgetController = require('../controllers/budgetController');
var models = require("../models")

module.exports = function(app) {

    app.get('/test', testApiController.index);

    app.get('/budget', budgetController.index);

    app.post("/budgetdata", function(req, res) {
        models.Budget.create({

        })
    });

    app.get("/budget/all", function(req, res) {
        models.User.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("budget/:month", function(req, res) {
        if (req.params.budget) {
            Budget.findAll({
                where: {
                    month: req.params.budget
                }
            }).then(function(results) {
                res.json(results);
            })
        }
    })

};