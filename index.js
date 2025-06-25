const express = require('express');
const mongoose = require('mongoose');
const product = require('./models/product.model.js');
const app = express();
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products",productRoute);






app.get('/', (req, res) => {
    res.send("hello from API server updated");
    console.log("hello from node API");
});



// MongoDB connection
mongoose.connect("mongodb+srv://abishake:abish987654@cluster0.ijcq8m0.mongodb.net/")
    .then(() => {
        console.log("connected to database!");
        app.listen(3000, () => {
            console.log('server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("connection failed!");
    });
