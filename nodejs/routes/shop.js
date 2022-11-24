// controllers
const shopController = require("../controllers/shop");

// routes
const express = require("express");
const router = express.Router();

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/products/:productID", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

// exports
module.exports = router;