var express = require('express');
var router  = express.Router();

var session_api = require('../apis/session_api');
var authCheck = require("../config/middleware/authCheck");

// Put back when using Auth
// router.get('/', authCheck, university_api.index);

router.get('/', session_api.index);
router.post('/create/:id', session_api.createSession);

module.exports = router;