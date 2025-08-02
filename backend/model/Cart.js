const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  productId: { type: String, ref: 'Product', required: true },
  title: { type: String, required: true },
  image: { type: String, default: '' },
  price: { type: Number, required: true },
  qty: { type: Number, required: true, min: 1 },
  stock: { type: Number, required: true, min: 0 }
}, { _id: false });

const CartSchema = new mongoose.Schema({
  userId: { type: String, ref: 'User', required: true },
  items: [CartItemSchema],
  updatedAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
