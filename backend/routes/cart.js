const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
  const { userId, items } = req.body;
  const Cart = require('../model/Cart');

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



router.get('/:userId', async (req, res) => {
  try {
    const Cart = require('../model/Cart');
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Unable to find your cart!" });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: " Internal Server error" });
  }
});

// DELETE /cart/:userId - Clear the cart for a user
router.delete('/:userId', async (req, res) => {
  try {
    const Cart = require('../model/Cart');
    const result = await Cart.deleteOne({ userId: req.params.userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Cart not found for the user." });
    }
    res.json({ message: "Cart cleared successfully." });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

module.exports = router;
