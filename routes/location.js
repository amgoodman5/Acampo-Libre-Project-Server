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

module.exports = router;


// getAllLocation
