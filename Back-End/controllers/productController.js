// controllers/productController.js
const Product = require('../models/product');

exports.searchProducts = async (req, res) => {
  const searchTerm = req.query.searchTerm;

  try {
    const results = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search for name
        { description: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search for description
      ],
    });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
