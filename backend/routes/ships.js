var express = require('express');
var router = express.Router();
//ships : Handles All possible changes made to ships them-selfs
//"her" mentionning the Ship her-self
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
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
  "id" : 3,
  "icon": "https://i.pinimg.com/736x/04/66/2d/04662d1fb07cb0fe31b6f06d98fd9fcd.jpg",
  "her_role" : "Destroyer",
  "steamer" : true,
  "cargo_slots" : 3,
  "items_slots" : 3,
  "naval_power" : 200,
  "navigation" : 12,
  "is_special" : false,
},{
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
router.get('/herName', function(req, res, next) {
  //Retrieve her ( them )
  res.json(results);
});
router.post('/herNewHull', function(req, res, next) {
  //Adds new ships
  res.sendStatus(200);
});

router.put('/herModifiedHull/herId=:herId', function(req, res, next) {
  //Updates ships Specs
  res.json({requestBody: req.params})
});

router.delete('/herEnd/:herId', function(req, res, next) {
  //Deletes ships from DB
  res.sendStatus(200);
});


module.exports = router;