var db = require('../models');

exports.index = function(req, res) {
  db.Student
  .find()
  .then(function(student){
    res.json(student);
  })
    // res.send("butt");
};

exports.findSessions = function(req, res){
  db.Student
    .findOne({ _id: req.params.id })
    .populate("sessions")
    .then(function(dbStudentWithSessions) {
      res.json(dbStudentWithSessions);
    })
    .catch(function(err) {
      res.json(err);
    })
}

exports.createStudent = function(req, res) {
    db.Student
        .create(req.body)
        .then(function(dbStudent) {
                return db.Cohort.findOneAndUpdate(
                  { 
                    _id: req.params.id 
                  },
                  {$push: {students: dbStudent._id}},
                  { 
                    new: true 
                  }
                );
            })
            .then(function(dbCohort) {
                res.json(dbCohort);
            })
            .catch(function(err) {
                res.json(err);
            });
        }