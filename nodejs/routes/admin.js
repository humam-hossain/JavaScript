// controllers
const productsController = require("../controllers/products");

// routes
const express = require("express");
const router = express.Router();

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);

// exports
module.exports = router