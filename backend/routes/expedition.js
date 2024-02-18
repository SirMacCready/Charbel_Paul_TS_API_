var express = require('express');
var router = express.Router();
let con  = require('../Database/dbConnection.js');

//Expedition : Changes item,Ship etc... In the Exp
router.get('/allExpeditions', function(req, res, next) {
  //Adds new DB SAVED expedition
  
  res.sendStatus(200);
});
router.post('/newExpedition', function (req, res, next) {
  // Adds new DB SAVED expedition
  console.log(req.body);
  const { items, goods, ship } = req.body;

  function saveExpedition() {
    return new Promise(function (resolve, reject) {
      for (let i = 0; i < items.length; i++) {
        const insertQuery = 'INSERT INTO saved_expeditions (ship_id, item_id, good_id) VALUES (?, ?, ?)';

        // Check if there's a corresponding value in goods, otherwise use null
        const goodValue = i < goods.length ? goods[i] : null;
        const itemValue = i < items.length ? items[i] : null;

        const values = [ship.id, itemValue, goodValue];

        con.query(insertQuery, values, (error, results, fields) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            console.log('Inserted row:', results.insertId);
            resolve();
          }
        });
      }
    });
  }

  saveExpedition()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send('Internal Server Error');
    });
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
