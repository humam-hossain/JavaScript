const Product = require("../models/product");

// show all products
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/admin-product-list', { 
            prods: products, 
            docTitle: 'Admin Products', 
            path: "/admin/products",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};

// add product
exports.getAddProduct = (req, res, next) => {
    res.render('admin/admin-product-edit', {
        docTitle: "Add Product",
        path: "/admin/add-product",
        edit: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const reqBody = req.body;
    const product = new Product(null, reqBody.title, reqBody.imageUrl, reqBody.price, reqBody.description);
    product.save();
    res.redirect("/");
};

// edit product
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;

    if(!editMode){
        return res.redirect("/");
    }

    const id = req.params.productID;
    Product.findById(id, product=>{
        if(!product){
            res.redirect("/");
        }
        res.render('admin/admin-product-edit', {
            docTitle: "Edit Product",
            path: "/admin/edit-product",
            edit: editMode,
            product: product 
        });
    })
};

exports.postEditProduct = (req, res, next) => {
    const {id, title, imageUrl, price, description} = req.body;
    const updatedProduct = new Product(id, title, imageUrl, price, description);
    updatedProduct.save();

    res.redirect("/admin/products");
};

// delete products
exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    // console.log(productId);
    Product.deleteById(productId);
    res.redirect("/admin/products");
};