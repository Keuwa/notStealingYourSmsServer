// Init variable
var mongoose = require('mongoose');

// Define sms schema
var SmsSchema = new mongoose.Schema({
  phoneNumberFrom: {
    type:'String',
    required:true
  },
  phoneNumberTo: {
    type:'String',
    required:true
  },
  date: {
    type:'Date'
  },
  message: {
    type: 'String',
    required: true
  }
});

// Export the Mongoose model
module.exports = mongoose.model('Sms', SmsSchema);
