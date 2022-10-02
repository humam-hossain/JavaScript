// controllers
const shopController = require("../controllers/shop");

// routes
const express = require("express");
const router = express.Router();

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

// exports
module.exports = router;