'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

var schema   = mongoose.Schema;

// define the schema for our user model
var sessionSchema = schema({

    date: {
        type: Date,
        required: [true, 'Please enter a date.']
    },
    instructor: {
        type: String,
        required: [true, 'Please enter an instructor']
    },
    // endGoals: {
    //     type: String,
    //     required: [false, 'Please enter an arrival date']
    // },
    reflection: {
        type: String,
        min: [1, 'Your method of transport must be one of the choices provided'],
        required: [false, 'Please enter actions taken this week']
    },
    // instActionsLastWeek: {
    //     type: String,
    //     min: [1, 'Please enter an arrival date with at least 1 character'],
    //     required: [false, 'Please enter actions taken last week']
    // },
    actions: {
        type: String,
        min: [1, 'Please enter an arrival date with at least 1 character'],
        required: [false, 'Please career actions']
    }/*,
    studentId: {
        type: Number,
        required: [true, 'Please enter a student id']
    }*/
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Session', sessionSchema);