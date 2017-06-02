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