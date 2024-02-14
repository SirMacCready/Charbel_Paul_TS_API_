var express = require('express');
var router = express.Router();


//ships : Handles All possible changes made to ships them-selfs
router.post('/ships', function(req, res, next) {
  //Adds new ships
  res.sendStatus(200);
});

router.put('/ships', function(req, res, next) {
  //Updates ships Specs
  res.sendStatus(200);
});

router.delete('/ships', function(req, res, next) {
  //Deletes ships from DB
  res.sendStatus(200);
});


module.exports = router;