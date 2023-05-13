const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the command schema
const commandSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
  }
,

  products: [
    {
      type: Schema.Types.ObjectId,
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    
    default: 'pending'
  },
  payment_methode:{
    type:String
  },
  delivery_date:{
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Define the command model
const Command = mongoose.model('orders', commandSchema);

module.exports = Command;