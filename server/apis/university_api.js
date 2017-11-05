var University = require('../models/University');

exports.index = function(req, res) {
  // University
  // .find()
  // .where('id').equals(req.id)
  // .then(function(university){
  //   res.json(university);
  // })
    res.send("butt");
};

// exports.createTrip = function(req, res) {

// 	// Add id from User onto req.body
// 	req.body.UserId = req.user.id;

//   var newTrip = new Trip(req.body);

//   newTrip.save().then(function(dbPost) {
//     res.json(dbPost);
//   });
// };
