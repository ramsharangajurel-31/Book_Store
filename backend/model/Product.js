const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  image: { type: String } // Add image field to store file path
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
