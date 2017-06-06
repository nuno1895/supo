var express = require("express");
// Import the model (.js) to use its database functions.
var router = express.Router();
var burger = require('../models/budget.js');


module.exports = {
    index: function(req, res) {
        res.status(200).json({
            msg: "this is the budget api"
        });
    },

    saveBudget: function(req, res) {
        console.log(req.body)
        res.json(req.body)
    }


};

router.post('/create', function (req, res) {
  models.Budget.create({
    month: dataToPost.budgetForm.month,
    takehome: dataToPost.budgetForm.takehome,
    groceries: dataToPost.budgetForm2.groceries,
    eatingout: dataToPost.budgetForm2.eatingout
  }).then(function(budget) {
    console.log(month);
    res.redirect('/')
  });
});