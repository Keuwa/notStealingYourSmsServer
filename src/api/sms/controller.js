var SmsModel = require('./model');
const _ = require('lodash');

 exports.get = function get(req, res) {
  var research = null;
  if (req.query) {
    research = req.query;
    //delete research.api_key;
  }
  SmsModel.find(research, function(err, smss) {
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else {
      res.json(smss);
    }
  });
 };

 exports.post = function post(req,res) {
  var sms = new SmsModel();
  _.extend(sms,req.body);
  sms.date = new Date();
  console.log(req);
  sms.save(function(err) {
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else {
      res.json(sms);
    }
  });
};
