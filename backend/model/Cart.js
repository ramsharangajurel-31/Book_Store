const mongoose = require('mongoose');

// Schema for individual cart item
const CartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Product',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  }
}, { _id: false });


const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
  },
  items: [CartItemSchema],
}, { timestamps: true }); 

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
