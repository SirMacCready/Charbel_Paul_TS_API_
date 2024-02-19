var express = require('express');
var router = express.Router();
let con  = require('../Database/dbConnection.js');

//Expedition : Changes item,Ship etc... In the Exp
router.get('/allExpeditions', function(req, res, next) {
  //Adds new DB SAVED expedition
  
  function getExpedition()
{
    return new Promise(function(resolve, reject) {

        var query_str =
        "SELECT * FROM saved_expeditions"

        con.query(query_str, function (err, rows, fields) {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
    
}
getExpedition().then(function(results) {
  res.json(results)
}).catch((err) => setImmediate(() => { throw err; }));
})
router.post('/newExpedition', function (req, res, next) {
  // Adds new DB SAVED expedition
  console.log(req.body);
  const { items, goods, ship } = req.body;
  function saveExpedition() {
    return new Promise(function (resolve, reject) {
      //Randomizing exp ID
      expeditionId = (Math.random() * (999 - 0) + 0)
      //Getting all items and goods and making an expedition with all the items but the same id
      for (let i = 0; i < items.length || i < goods.length; i++) {
        console.log('SPIIIN');
        const insertQuery = 'INSERT INTO saved_expeditions (expedition_id,ship_id, item_id, good_id) VALUES (?,?, ?, ?)';

        // Check if there's a corresponding value in goods, otherwise use null
        const goodValue = i < goods.length ? goods[i] : null;
        const itemValue = i < items.length ? items[i] : null;
        const values = [String(expeditionId),ship.id, itemValue, goodValue];
        con.query(insertQuery, values, (error, results, fields) => {
          
          if (error) {
            console.error(error);
            reject(error);
          } else {
            resolve();
          }
        });
      }
    });
  }
  //Saving the expedition
  saveExpedition()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send('Internal Server Error');
    });
});

//WIP
router.put('/thisExpedition/:expID', function(req, res, next) {
  //Updates DB SAVED Expedition
  res.sendStatus(200);
});


router.delete('/badExpedition', function(req, res, next) {
  //Deletes an unwanted expedition

  //Getting the unwanted expedition's ID
  idToDelete = req.body.idToDelete
  function deleteShips()
{
    return new Promise(function(resolve, reject) {

      //Query to delete the expedition
        let query_str =
        "DELETE FROM saved_expeditions WHERE expedition_id = ?"
        value = idToDelete
        con.query(query_str, value, function (err, result, fields) {
            if (err) {              

                return reject(err);
            }

            resolve(result);
        });
    });
    
}

}
)

module.exports = router;