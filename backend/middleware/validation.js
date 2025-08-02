const { body, validationResult } = require('express-validator');

const validateBook = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
  body('category').notEmpty().withMessage('Category is required'),
  body('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateBook };
