const data = require("./initialdata");
const mongoose = require("mongoose");
const Product = require("./models/products");

// const fs = reqiure("fs");

//initiate the databse with seed data

// fs.readdir("/images"，function(err,fileNames){
//   if(err){
//     console.log(err);
//   }else{
//     for (i in fileNames){
//       data.push({
//
//         url: "/images"+ i
//       })
//     }
//   }
// })

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
