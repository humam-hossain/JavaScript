const Product = require("../models/product");
const Cart = require("../models/cart");

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
            path: "/products"
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
    Cart.getCart(cart =>{
        // console.log(cart);
        Product.fetchAll(products=>{
            const cartProducts = [];
            
            for(product of products){
                const cartProductsData = cart.products.find(prod=>prod.id == product.id);
                
                if(cartProductsData){
                    cartProducts.push({productData: product, qty: cartProductsData.qty});
                }
            }
            
            // console.log(cartProducts);
            res.render("shop/cart", {
                path: "/cart",
                docTitle: "Your cart",
                products: cartProducts
            });
        });
    });
};

exports.postCart = (req, res, next) => {
    const {productID} = req.body;
    console.log("add to cart => " + productID);
    Product.findById(productID, product=>{
        Cart.addProduct(product.id, product.price);
    });
    res.redirect("/products");
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.prodId;
    Product.findById(prodId, product=> {
        Cart.deleteProduct(prodId, product.price);
        res.redirect("/cart");
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