const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const { auth, admin } = require('../middleware/auth');
const { validateBook } = require('../middleware/validation');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST /books - Add a new book (Admin only)
router.post('/books', auth, admin, upload.single('image'), validateBook, productController.addBook);

// GET /books - Retrieve all books
router.get('/books', productController.getAllBooks);

// GET /books/category/seed - Seed the database with initial books (Admin only)
router.get('/books/category/seed', auth, admin, productController.seedBooks);

// GET /books/category/:category - Retrieve books by category
router.get('/books/category/:category', productController.getBooksByCategory);

// GET /books/:id - Retrieve a specific book by ID
router.get('/books/:id', productController.getBookById);

// PUT /books/:id - Update book details (Admin only)
router.put('/books/:id', auth, admin, upload.single('image'), validateBook, productController.updateBook);

// DELETE /books/:id - Delete a book (Admin only)
router.delete('/books/:id', auth, admin, productController.deleteBook);

module.exports = router;
