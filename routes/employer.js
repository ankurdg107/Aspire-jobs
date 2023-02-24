const express = require("express");
const { getJobs, postJob } = require("../controller/JOB.js");
const router = express.Router();


router.get('/',getemployerprofile);
router.post('/',postemployers);

module.exports = router;    