var Cohort = require('../models/Student');

exports.index = function(req, res) {
  Student
  .find()
  .then(function(student){
    res.json(student);
  })
    // res.send("butt");
};

exports.createStudent = function(req, res) {

	// Add id from User onto req.body (add in once auth has been taken care of)
	// req.body.UserId = req.user.id;

  var newStudent = new Student(req.body);

  newStudent.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
