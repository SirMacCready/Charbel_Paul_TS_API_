var express = require('express');
var router = express.Router();

//Expedition : Changes item,Ship etc... In the Exp
router.get('/allExpeditions', function(req, res, next) {
  //Adds new DB SAVED expedition
  res.sendStatus(200);
});
router.post('/newExpedition', function(req, res, next) {
  //Adds new DB SAVED expedition
  res.sendStatus(200);
});
router.put('/thisExpedition/:expID', function(req, res, next) {
  //Updates DB SAVED Expedition
  res.sendStatus(200);
});
router.delete('/badExpedition', function(req, res, next) {
  // Deletes DB SAVED Expedition from DB 
  res.sendStatus(200);
});


module.exports = router;
