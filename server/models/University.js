'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var universitySchema = mongoose.Schema({

    fullName: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter the name of the University']
    },
    shortName: {
        type: String,
        min: [1, 'Too few characters'],
        max: 50,
    },
    address: {
        type: String,
        min: [1, 'Too few characters'],
        max: 150,
        required: [true, 'Please enter an address']
    },
    icon: {
        type: String,
        min: [1, 'Too few characters']
    },
    // ongoingCohorts: [],
    // completedCohorts: [],
    primaryColor: {
        type: String,
        min: [1, 'Too few characters'],
        max: 20,
    },
    secondaryColor: {
        type: String,
        min: [1, 'Too few characters'],
        max: 20,
    },
    cohorts : [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cohort' 
        }
    ]
    // cohorts: []
});

// create the model for users and expose it to our app
module.exports = mongoose.model('University', universitySchema);