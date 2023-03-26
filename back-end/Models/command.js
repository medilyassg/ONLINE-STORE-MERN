const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the command schema
const commandSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Define the command model
const Command = mongoose.model('Command', commandSchema);

module.exports = Command;