var RuleModel = require('./model');
const _ = require('lodash');

 exports.get = function get(req, res) {
  var research = null;
  if (req.query) {
    research = req.query;
    //delete research.api_key;
  }
  RuleModel.find(research, function(err, rules) {
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else {
      res.json(rules);
    }
  });
 };

 exports.post = function post(req,res) {
  var rule = new RuleModel();
  _.extend(rule,req.body);
  rule.date = new Date();
  console.log(req);
  rule.save(function(err) {
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else {
      res.json(rule);
    }
  });
};
