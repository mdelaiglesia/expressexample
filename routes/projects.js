/**
 * Created by matiasdelaiglesia on 3/8/15.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router
  .get('/', function(req, res, next) {
    res.send('hello project!');
  });

module.exports = router;
