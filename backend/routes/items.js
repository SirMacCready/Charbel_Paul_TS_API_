var express = require('express');
var router = express.Router();


//items : Handles All possible changes made to items them-selfs
router.post('/newitem', function(req, res, next) {
  //Adds new items
  res.sendStatus(200);
});

router.put('/thisItem/:itemId', function(req, res, next) {
  //Updates  Items Specs
  res.sendStatus(200);
});

router.delete('/badItem/:itemId', function(req, res, next) {
  //Deletes Items from DB
  res.sendStatus(200);
});


module.exports = router;
