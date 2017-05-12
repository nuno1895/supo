var express = require("express");
var router = express.Router();

// require models to upload into DB later (not sure if this is right place)
var db = require("../models");

router.get("/", function(req, res) {
	res.render("mainForm");
});

module.exports = router;