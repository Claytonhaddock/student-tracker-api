'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var session  = require('./Session');
var schema   = mongoose.Schema;

// define the schema for our user model
var userSchema = new Schema({

    name: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a name.']
    },
    role: {
        type: String,
        required: [true, 'Please enter a role.']
    }
    sessions: [{
        type: schema.ObjectId,
        ref: 'Session'
    }],
    cohort: {
        type: String,
        // min: [8, 'Your password must be at least 8 characters large'],
        required: [true, 'Please enter cohort.']
    },

});

// {
//   userid: {
//     type: Number,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   cohort: {
//     type: String,
//     required: true
//   }
// }

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);