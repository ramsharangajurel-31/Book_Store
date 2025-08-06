const express = require('express');
const router = express.Router();
const Product = require('../model/Product');
const { seedBooks } = require('../data/seedBooks');
const { auth, admin } = require('../middleware/auth');

// POST /books/category/seed - Seed the database with initial books (Admin only)
router.post('/books/category/seed', auth, admin, async (req, res) => {
  try {
    await Product.deleteMany({});
    const createdBooks = await Product.insertMany(seedBooks);
    res.status(200).json({ message: 'Books seeded', data: createdBooks });
  } catch (error) {
    res.status(500).json({ message: 'Seeding failed', error });
  }
});

module.exports = router;
