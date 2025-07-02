const express = require("express");
const router = express.Router();
const Product = require('../../customer/models/productModel.js');
const authMiddleware = require('../../auth/middleware/auth');

// POST create
router.post("/products", authMiddleware("admin"), async (req, res) => {
  const { name, price, image } = req.body;
  const product = await Product.create({ name, price, image });
  res.status(201).json(product);
});

// DELETE
router.delete("/products/:id", authMiddleware("admin"), async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
