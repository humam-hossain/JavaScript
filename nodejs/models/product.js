const fs = require("fs");
const path = require("path");

const Cart = require('./cart');

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      if(this.id){
        const existingProductIndex = products.findIndex(product => product.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.floor(Math.random() * 100000).toString();
        products.push(this);
        // console.log(products);
  
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id){
    getProductsFromFile((products) => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(p => p.id !== id);
      // console.log(product.price);

      fs.writeFile(p, JSON.stringify(updatedProducts), err=>{
        if(!err){
          Cart.deleteProduct(id, product.price);
        }
      })

    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
    return 0;
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
