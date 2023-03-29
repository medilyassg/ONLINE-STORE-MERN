const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  inventory:{
    type:Number
  },
  user_id:Schema.Types.ObjectId
});

// Define the product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;