const express = require("express");
const router = express.Router();
const { getproducts } = require('../controllers/product.controller');
const Product = require('../models/productModel');
const authMiddleware = require('../../auth/middleware/auth');

// GET - All products
router.get('/', getproducts);

// POST - Create product
router.post("/products", authMiddleware("admin"), async (req, res) => {
  try {
    const { name, price, image, quantity, category, description } = req.body;
    const product = await Product.create({ name, price, image, quantity, category, description });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Delete product
router.delete("/products/:id", authMiddleware("admin"), async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
