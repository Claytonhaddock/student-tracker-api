var express = require('express');
var router  = express.Router();

var university_api = require('../apis/university_api');
var authCheck = require("../config/middleware/authCheck");

// Put back when using Auth
// router.get('/', authCheck, university_api.index);

router.get('/', university_api.index);
router.post('/create', university_api.createUniversity);

module.exports = router;