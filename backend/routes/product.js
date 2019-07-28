const router = require("express").Router();
const mongoose = require("mongoose");
const Product = require("../models/products");
const middleware = require("../middleware/index");

//show the main page
router.get("/api", function(req, res) {
  Product.find({}, function(err, foundproducts) {
    if (err) {
      console.log(err);
    } else {
      //send all the product information
      res.json(foundproducts);
    }
  });
});

//create a new product, user has to log in as an admin
// router.post("/api", middleware.isLoggedIn, function(req, res) {
//   const product = {
//     pid: req.body.pid,
//     title: req.body.title,
//     company: req.body.company,
//     link: req.body.link,
//     price: req.body.price,
//     selectedPrice: 0,
//     image: req.body.image,
//     specs: req.body.specs,
//     description: req.body.description,
//     inCart: false,
//     inWishList: false,
//     count: 0,
//     total: 0
//   };
//   Product.create(product, function(err, newproduct) {
//     if (err) {
//       res.json(err);
//     } else {
//       //send the new product
//       res.json(newproduct);
//     }
//   });
// });

module.exports = router;
