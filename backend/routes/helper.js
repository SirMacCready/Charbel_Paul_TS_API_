var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  //Renders Page
  res.sendStatus(200);
});

module.exports = router;
