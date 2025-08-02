// Add a new book (Admin only)
exports.addBook = async (req, res) => {
  try {
    const Product = require('../model/Product');
    const { title, author, description, price, category, stock } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    
    const newProduct = new Product({
      title,
      author,
      description,
      price,
      category,
      stock,
      image,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const Product = require('../model/Product');
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get book by ID
exports.getBookById = async (req, res) => {
  try {
    const Product = require('../model/Product');
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Book not found' });
    res.json(product);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update book details (Admin only)
exports.updateBook = async (req, res) => {
  try {
    const Product = require('../model/Product');
    const { title, author, description, price, category, stock } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined; // Only update image if a new one is uploaded
    
    const updateData = {
      title,
      author,
      description,
      price,
      category,
      stock,
    };
    
    // Only add image to update data if a new image was uploaded
    if (image !== undefined) {
      updateData.image = image;
    }
    
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete book (Admin only)
exports.deleteBook = async (req, res) => {
  try {
    const Product = require('../model/Product');
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
