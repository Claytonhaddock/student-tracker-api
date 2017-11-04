'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var sessionSchema = mongoose.Schema({

    date: {
        type: Date,
        // min: [1, 'Too few characters'],
        // max: 100,
        required: [true, 'Please enter a date.']
    },
    instructor: {
        type: String,
        required: [true, 'Please enter an instructor']
    },
    endGoals: {
        type: String,
        // min: [1, 'Please enter an arrival date with at least 1 character'],
        required: [false, 'Please enter an arrival date']
    },
    actionsTakenThisWeek: {
        type: String,
        min: [1, 'Your method of transport must be one of the choices provided'],
        required: [false, 'Please enter actions taken this week']
    },
    instActionsLastWeek: {
        type: String,
        min: [1, 'Please enter an arrival date with at least 1 character'],
        required: [false, 'Please enter actions taken last week']
    },
    careerActions: {
        type: String,
        min: [1, 'Please enter an arrival date with at least 1 character'],
        required: [false, 'Please career actions']
    },
    UserId: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


// {
//       date: Date.now,
//       instructor: {
//         type: String,
//         required: true
//       },
//       endGoals: String,
//       instActionsThisWeek: String,
//       instActionsLastWeek: String,
//       careerActions: String
// }

// create the model for users and expose it to our app
module.exports = mongoose.model('Session', sessionSchema);