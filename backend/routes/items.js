var express = require('express');
var router = express.Router();

results = [{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
}]
//items : Handles All possible changes made to items them-selfs
router.get('/getItems', function(req, res, next) {
  //Adds new items
  res.json(results);
});
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
