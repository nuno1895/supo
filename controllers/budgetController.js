var express = require("express");
// Import the model (.js) to use its database functions.
var router = express.Router();
var models = require('../models');


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