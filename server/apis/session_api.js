var Session = require('../models/Session');

exports.index = function(req, res) {
  Session
  .find()
  .then(function(session){
    res.json(session);
  })
    // res.send("butt");
};

exports.createSession = function(req, res) {

	// Add id from User onto req.body (add in once auth has been taken care of)
	// req.body.UserId = req.user.id;

  var newSession = new Session(req.body);

  newSession.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
