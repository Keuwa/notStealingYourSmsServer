// Init variable
var mongoose = require('mongoose');

// Define Rule schema
var RuleSchema = new mongoose.Schema({
  phoneNumberFrom: {
    type:'String'
  },
  phoneNumberTo: {
    type:'String'
  },
  type: {
    type: String,
    enum: ['spy', 'cancel','change'],
    required: true
  }
});

// Export the Mongoose model
module.exports = mongoose.model('Rule', RuleSchema);
