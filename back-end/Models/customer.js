const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the customer schema
const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Define the customer model
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;