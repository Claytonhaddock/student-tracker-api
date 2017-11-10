'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var schema   = mongoose.Schema;

// define the schema for our user model
var studentSchema = new schema({

    name: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a name.']
    },
    // sessions: [{
    //     type: Array,//schema.ObjectId,
    //     ref: 'Session'
    // }],
    cohort: {
        type: String,//schema.ObjectId,
        ref: 'Cohort'
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Student', studentSchema);