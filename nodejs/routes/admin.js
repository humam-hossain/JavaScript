// controllers
const adminController = require("../controllers/admin");

// routes
const express = require("express");
const router = express.Router();

// show all products
router.get('/products', adminController.getProducts);
// add product
router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
// edit product
router.get("/edit-product/:productID", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct);
// delete product
router.post("/delete-product", adminController.postDeleteProduct);
// exports
module.exports = router;