var db = require('../models');

exports.index = function(req, res) {
    db.Cohort
        .find()
        .then(function(cohorts) {
            res.json(cohorts);
        })
};

exports.findStudents = function(req, res){
  db.Cohort
    .findOne({ _id: req.params.id })
    .populate("students")
    .then(function(dbCohortWithStudents) {
      res.json(dbCohortWithStudents);
    })
    .catch(function(err) {
      res.json(err);
    })
}

exports.createCohort = function(req, res) {
    db.Cohort
        .create(req.body)
        .then(function(dbCohort) {
                return db.University.findOneAndUpdate(
                  { 
                    _id: req.params.id 
                  },
                  {$push: {cohorts: dbCohort._id}},
                  { 
                    new: true 
                  }
                );
            })
            .then(function(dbUniversity) {
                res.json(dbUniversity);
            })
            .catch(function(err) {
                res.json(err);
            });
        }