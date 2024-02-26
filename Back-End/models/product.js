// models/product.js
const mongoose = require('mongoose');

// integrate with mongoose
// may delete later
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  // other fields
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
