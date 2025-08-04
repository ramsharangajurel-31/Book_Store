const express = require('express');
const { auth } = require('../middleware/auth');
const router = express.Router();


router.post('/', auth, async (req, res) => {
  const { userId, items } = req.body;
  const Cart = require('../model/Cart');


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



router.get('/:userId', auth, async (req, res) => {
  try {
    const Cart = require('../model/Cart');
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Unable to find your cart!" });
    res.json(cart);
  } catch (err) {
    console.error("Cart get error:", err);
    res.status(500).json({ message: "Internal Server error", error: err.message });
  }
});


router.delete('/:userId', auth, async (req, res) => {
  try {
    const Cart = require('../model/Cart');
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
