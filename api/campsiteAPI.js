var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var knex = require('../db/connections');

router.get('/', function(req, res, next) {
    queries.getAllCampsites()
        .then((campsite) => {
            res.json(campsite);
        });
});



module.exports = router;
