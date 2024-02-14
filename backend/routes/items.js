var express = require('express');
var router = express.Router();


//items : Handles All possible changes made to items them-selfs
router.post('/items', function(req, res, next) {
  //Adds new items
  res.sendStatus(200);
});

router.put('/items', function(req, res, next) {
  //Updates  Items Specs
  res.sendStatus(200);
});

router.delete('/items', function(req, res, next) {
  //Deletes Items from DB
  res.sendStatus(200);
});


module.exports = router;
