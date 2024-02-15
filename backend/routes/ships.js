var express = require('express');
var router = express.Router();
//ships : Handles All possible changes made to ships them-selfs
//"her" mentionning the Ship her-self
router.post('/herNewHull', function(req, res, next) {
  //Adds new ships
  res.sendStatus(200);
});

router.put('/herModifiedHull/herId=:herId', function(req, res, next) {
  //Updates ships Specs
  res.json({requestBody: req.params})
});

router.delete('/her/:herId', function(req, res, next) {
  //Deletes ships from DB
  res.sendStatus(200);
});


module.exports = router;