require('dotenv').config(); // load env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./routes/product.route.js');

const app = express();

const allowedOrigins = ['http://localhost:3001', 'https://project-f-beige.vercel.app'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy: Origin ${origin} is not allowed`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
  res.send("Hello from API server!");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err.message);
  });

// Global error handler for CORS errors (optional)
app.use((err, req, res, next) => {
  if (err.message.includes('CORS')) {
    return res.status(403).json({ message: err.message });
  }
  next(err);
});
