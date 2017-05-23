module.exports = {
  index: function(req, res) {
    res.status(200).json({
      msg: "this is the test api"
    });
  }
};
