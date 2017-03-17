// var express = require('express');
// var router = express.Router();
// var Member = require('../db/member');
//
// router.get('/request', function(req, res, next) {
//     queries.getRequestsByUser(req.signedCookies.userID)
//         .then((data) => {
//             res.json(data);
//         });
// });
//
// router.get('/job', function(req, res, next) {
//     queries.getJobsByUser(req.signedCookies.userID)
//         .then((data) => {
//             res.json(data);
//         });
// });
//
// router.get('/', function(req, res, next) {
//     queries.getOneUser(req.signedCookies.userID[0])
//         .then((data) => {
//             res.json(data);
//         });
// });



// GET /tickets/12/messages - Retrieves list of messages for ticket #12
// GET /tickets/12/messages/5 - Retrieves message #5 for ticket #12
// POST /tickets/12/messages - Creates a new message in ticket #12
// PUT /tickets/12/messages/5 - Updates message #5 for ticket #12
// PATCH /tickets/12/messages/5 - Partially updates message #5 for ticket #12
// DELETE /tickets/12/messages/5 - Deletes message #5 for ticket #12
