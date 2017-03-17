
var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


router.get('/', (req, res) => {
  queries.getAllCampsites()
        .then((sites) => {
            res.json(sites)
        });
});

router.get('/:id', function(req, res) {
    queries.getSingleCampsiteById(req.params.id)
        .then((campsites) => {
            res.json(campsites);
        });
});

router.post('/', function(req, res) {
    queries.createNewCampsite(req.body)
      .then((newId) => {
          res.json(newId)
      })
      .catch((err) => {
          res.send(err);
      })

});


module.exports = router;
