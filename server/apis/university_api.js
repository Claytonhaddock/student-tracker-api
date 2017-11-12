var db         = require("../models");

exports.index = function(req, res) {
  db.University
  .find({})
  .then(function(universities){
    res.json(universities);
  })
};

exports.findCohorts = function(req, res){
  db.University
    .findOne({ _id: req.params.id })
    .populate("cohorts")
    .then(function(dbUniverstiyWithCohorts) {
      res.json(dbUniverstiyWithCohorts);
    })
    .catch(function(err) {
      res.json(err);
    })
}

exports.createUniversity = function(req, res) {

	// Add id from User onto req.body (add in once auth has been taken care of)
	// req.body.UserId = req.user.id;

  var newUniversity = new University(req.body);

  newUniversity.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
