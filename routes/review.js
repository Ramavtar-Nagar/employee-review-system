const express = require('express');
const router = express.Router();
const passport = require('passport');

const assignWork = require('../controllers/review');

router.get('/assignWork', passport.restrictAccessPages, assignWork.home);
router.post('/createReview', assignWork.createReview);1


module.exports = router;