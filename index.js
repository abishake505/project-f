require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./auth/routes/auth.route');
const adminProductRoute = require('./admin/admin.route/admin.product.route');
const productRoute = require('./customer/routes/product.route');

const app = express();

// ✅ CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://project-f-beige.vercel.app'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminProductRoute);
app.use('/api/products', productRoute);

app.get("/", (req, res) => {
  res.send("API running...");
});

// ✅ Mongo Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started at port ${PORT} 🚀`));
  })
  .catch(err => console.error("❌ Mongo error:", err.message));
