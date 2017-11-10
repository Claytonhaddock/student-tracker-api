var express = require('express');
var router  = express.Router();

var student_api = require('../apis/student_api');
var authCheck = require("../config/middleware/authCheck");

// Put back when using Auth
// router.get('/', authCheck, university_api.index);

router.get('/', student_api.index);
router.post('/create', student_api.createStudent);

module.exports = router; 