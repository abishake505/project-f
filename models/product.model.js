const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"]
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    image: { // ✅ corrected from "Image" to "image"
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false,
      default: "Uncategorized"
    },
    description: {
      type: String,
      required: false,
      default: ""
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema); // ✅ Capitalized model name

module.exports = Product;
