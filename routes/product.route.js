const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {getproducts, getproduct, createproduct, updateproduct, deleteproduct} = require('../controllers/product.controller.js');


router.get('/', getproducts);

router.get("/:id", getproduct);

router.post("/", createproduct);

//update a product 
router.put("/:id" , updateproduct);

//delete a product
router.delete("/id", deleteproduct);



module.exports = router;