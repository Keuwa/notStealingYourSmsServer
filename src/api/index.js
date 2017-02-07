var express = require('express');
var app = express();

var smsRouter = require('./sms/router');
var ruleRouter = require('./rule/router');

app.use('/sms', smsRouter);
app.use('/rule', ruleRouter);

var routesView = {
  sms: {
    getAll: '/sms'
  },
  rules: {
    get:'/rules'
  }
}

app.get('/', function (req, res) {
  res.send(routesView);
});

module.exports = app;
