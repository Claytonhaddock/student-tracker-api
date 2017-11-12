var db = require('../models');

exports.index = function(req, res) {
  db.Session
  .find()
  .then(function(session){
    res.json(session);
  })
    // res.send("butt");
};

exports.createSession = function(req, res) {
    db.Session
        .create(req.body)
        .then(function(dbStudent) {
                return db.Student.findOneAndUpdate(
                  { 
                    _id: req.params.id 
                  },
                  {$push: {sessions: dbStudent._id}},
                  { 
                    new: true 
                  }
                );
            })
            .then(function(dbStudent) {
                res.json(dbStudent);
            })
            .catch(function(err) {
                res.json(err);
            });
        }