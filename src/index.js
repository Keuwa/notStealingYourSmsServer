var express = require('express');
var app = express();
const mongoose = require('mongoose');
var api = require('./api');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/sms");

app.use("/api",api);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
