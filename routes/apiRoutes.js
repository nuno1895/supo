var testApiController = require('../controllers/testApi');
var budgetController = require('../controllers/budgetController');
var models = require("../models");

module.exports = function(app) {

    app.get('/test', testApiController.index);

    app.get('/budget', budgetController.index);



    //this and form2 are sending to the db...but HOW? or...WHY? 
    app.post("/budgetdata", function(req, res) {
        console.log(req.body);
        models.Budget.create({
            month: req.body.budgetForm.month,
            takehome: req.body.budgetForm.takehome,
            groceries: req.body.budgetForm2.groceries,
            eatingout: req.body.budgetForm2.eatingout
        }).then(function(budget) {
            res.redirect("/dash");

        });
    });


    // router.post("/budgetdata", function(req, res) {
    //     models.Budget.create({
    //         month: dataToPost.budgetForm.month,
    //         takehome: dataToPost.budgetForm.takehome,
    //         groceries: dataToPost.budgetForm2.groceries,
    //         eatingout: dataToPost.budgetForm2.eatingout
    //     }).then(function(budget) {
    //         console.log(month);
    //         res.json(month)
    //     });
    // });

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