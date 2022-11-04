const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { 
            prods: products,
            docTitle: 'Shop',
            path: "/",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};

exports.getProduct = (req, res, next)=>{
    const id = req.params.productID;
    Product.findById(id, product=> {
        console.log(product);
        res.render("shop/product-detail", {
            docTitle: "product",
            product: product,
            path: "/"
        });
    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { 
            prods: products,
            docTitle: 'All Products',
            path: "/products",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        path: "/cart",
        docTitle: "Your cart"
    });
};

exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        path: "/orders",
        docTitle: "Your Orders"
    });
};

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        path: "/checkout",
        docTitle: "Checkout"
    });
};