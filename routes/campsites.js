
var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


router.get('/', (req, res, next) => {
  queries.getCampsiteLocation()
        .then((sites) => {
            res.json(sites)
        });
});

module.exports = router;
