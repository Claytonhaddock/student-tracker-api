var University = require('../models/University');

exports.index = function(req, res) {
  University
  .find()
  .then(function(universities){
    res.json(universities);
  })
    // res.send("butt");
};

exports.createUniversity = function(req, res) {

	// Add id from User onto req.body (add in once auth has been taken care of)
	// req.body.UserId = req.user.id;

  var newUniversity = new University(req.body);

  newUniversity.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
