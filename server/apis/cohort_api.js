var Cohort = require('../models/Cohort');

exports.index = function(req, res) {
  Cohort
  .find()
  .then(function(cohorts){
    res.json(cohorts);
  })
    // res.send("butt");
};

exports.createCohort = function(req, res) {

	// Add id from User onto req.body (add in once auth has been taken care of)
	// req.body.UserId = req.user.id;

  var newCohort = new Cohort(req.body);

  newCohort.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
