var express = require('express');
var router  = express.Router();

var university_api = require('../apis/university_api');
var authCheck = require("../config/middleware/authCheck");

router.get('/', authCheck, university_api.index);

module.exports = router;