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
    instructor: {
        type: String,
        required: [true, 'please enter an instructor name']
    },
    ssm: {
        type: String,
        required: [true, 'Please enter an SSM']
    },
    ta: {
        type: Array,
        required: [true, 'Please enter at least one ta']    
    },
    classInfo: {
        day: {
            type: String,
            required: [true, 'Please enter day']
        },
        time: {
            type: String,
            require: [true, 'Please enter time']
        },
        location: {
            type: String,
            required: [true, 'Please enter location']
        }
    },
    type: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter what type of program you are creating. For instance, part-time, full-time, etc.']
    },
    university: {
        type: String,
        required: [true, 'please add university']
    },
    startDate: Date,
    endDate: Date,
    // classes: [],
    students: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student' 
        }
    ],
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Cohort', cohortSchema);