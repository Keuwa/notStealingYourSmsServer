// Init variable
var controller = require('./controller');
var express = require('express');

var ruleRouter = express.Router();

// Init route of the router
ruleRouter.get('/',controller.get);
ruleRouter.post('/',controller.post);


// export the router
module.exports = ruleRouter;
