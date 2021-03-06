var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', (req, res) => {
  queries.getAllLocation()
        .then((locations) => {
            res.json(locations)
        });
});

router.post('/', (req, res) => {
  console.log(req.body);
    queries.createNewLocation(req.body)
      .then((id) => {
          res.json(id)
      })
      .catch((err) => {
          res.send(err);
      });

});

router.delete('/:id', function(req, res) {
    queries.deleteLocation(req.body.id)
        .then(() => {
            res.json('Campsite Deleted');
        });
});

module.exports = router;


// getAllLocation
