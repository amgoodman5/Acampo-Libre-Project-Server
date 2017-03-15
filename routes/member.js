var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;



// GET /tickets/12/messages - Retrieves list of messages for ticket #12
// GET /tickets/12/messages/5 - Retrieves message #5 for ticket #12
// POST /tickets/12/messages - Creates a new message in ticket #12
// PUT /tickets/12/messages/5 - Updates message #5 for ticket #12
// PATCH /tickets/12/messages/5 - Partially updates message #5 for ticket #12
// DELETE /tickets/12/messages/5 - Deletes message #5 for ticket #12
