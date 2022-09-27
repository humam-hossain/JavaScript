// controllers
const productsController = require("../controllers/products");

// routes
const express = require("express");
const router = express.Router();

router.get('/', productsController.getProducts);

// exports
module.exports = router;