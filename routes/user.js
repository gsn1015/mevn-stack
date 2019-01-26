var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET ALL BOOKS */
router.get('/login', function(req, res, next) {
    User.find(function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;




