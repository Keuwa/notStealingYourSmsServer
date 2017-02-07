// Init variable
var controller = require('./controller');
var express = require('express');

var smsRouter = express.Router();

// Init route of the router
smsRouter.get('/',controller.get);
smsRouter.post('/',controller.post);


// export the router
module.exports = smsRouter;
