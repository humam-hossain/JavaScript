// controllers
const adminController = require("../controllers/admin");

// routes
const express = require("express");
const router = express.Router();

router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.post('/add-product', adminController.postAddProduct);

// exports
module.exports = router