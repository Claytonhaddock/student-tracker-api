'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var schema = mongoose.Schema;

// define the schema for our user model
var cohortSchema = mongoose.Schema({

    cohortIdentifier: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a unique Cohort Indentifier provided by Trilogy']
    },
    type: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter what type of program you are creating. For instance, part-time, full-time, etc.']
    },
    startDate: Date,
    endDate: Date
    // classes: [],
    // students: [{ type: schema.ObjectId, ref: 'Student' }],
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Cohort', cohortSchema);