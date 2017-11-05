var express = require('express');
var router  = express.Router();

var cohort_api = require('../apis/cohort_api');
var authCheck = require("../config/middleware/authCheck");

// Put back when using Auth
// router.get('/', authCheck, cohort_api.index);

router.get('/', cohort_api.index);
router.post('/create', cohort_api.createCohort);

module.exports = router;