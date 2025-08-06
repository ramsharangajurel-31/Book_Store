const express = require('express');
const { auth } = require('../middleware/auth');
const router = express.Router();
const Cart = require('../model/Cart');

// Get cart items for authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.json({ items: [], total: 0 });
    }
    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get cart by user ID
router.get('/:userId', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
      return res.json({ items: [], total: 0 });
    }
    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create or update cart
router.post('/', auth, async (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items) {
    return res.status(400).json({ message: "userId and items are required" });
  }

  for (const item of items) {
    if (!item.productId || !item.title || item.price === undefined || item.qty === undefined) {
      return res.status(400).json({ message: "Each item must have productId, title, price, and qty" });
    }
  }

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = items;
      await cart.save();
      return res.json({ message: "Cart updated successfully!", cart });
    }

    const newCart = new Cart({ userId, items });
    await newCart.save();
    res.status(201).json({ message: "Cart created successfully!", cart: newCart });
  } catch (err) {
    console.error("Cart route error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

// Add item to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    let cart = await Cart.findOne({ userId: req.user.id });
    
    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
    }
    
    const existingItemIndex = cart.items.findIndex(
      item => item.productId === productId
    );
    
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].qty += quantity;
    } else {
      cart.items.push({ 
        productId, 
        title: req.body.title || 'Product',
        price: req.body.price || 0,
        qty: quantity 
      });
    }
    
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update cart item quantity
router.put('/update', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const itemIndex = cart.items.findIndex(
      item => item.productId === productId
    );
    
    if (itemIndex > -1) {
      if (quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      } else {
        cart.items[itemIndex].qty = quantity;
      }
    }
    
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove item from cart
router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params;
    
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = cart.items.filter(
      item => item.productId !== productId
    );
    
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Clear cart
router.delete('/clear', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = [];
    await cart.save();
    
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete cart by user ID
router.delete('/:userId', auth, async (req, res) => {
  try {
    const result = await Cart.deleteOne({ userId: req.params.userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Cart not found for the user." });
    }
    res.json({ message: "Cart cleared successfully." });
  } catch (err) {
    console.error("Cart delete error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

module.exports = router;
