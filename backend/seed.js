const data = require("./initialdata");
const mongoose = require("mongoose");
const Product = require("./models/products");

function seedDB() {
  //remove all
  Product.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("remove all gardens!");
      //load all products
      data.products.forEach(seed => {
        Product.create(seed, function(err, product) {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  });
}

module.exports = seedDB;
