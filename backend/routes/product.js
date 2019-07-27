//in the backend, you cannot use react dom router??
const router = require("express").Router();
const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId;
const Product = require("../models/products");
const User = require("../models/users");
const Wishlist = require("../models/wishlists");
//the only verification is if user is loggin
const middleware = require("../middleware/index");

const flash = require("connect-flash");

// const passport = require("passport");

//show the main page of gardens
router.get("/api", function(req, res) {
  //find method return a promise.res.json(Users)
  Product.find({}, function(err, foundproducts) {
    if (err) {
      console.log(err);
      res.flash("error", "oops, something is wrong");
    } else {
      //send all the product information
      res.json(foundproducts);
    }
  });
});

//show the new product form, user has to log in as an admin
router.get("/api/new", middleware.isLoggedIn, function(req, res) {
  console.log("you can add new product now");
  // res.render("product/new");
});

//create a new product, user has to log in as an admin
router.post("/api", middleware.isLoggedIn, function(req, res) {
  const product = {
    pid: req.body.pid,
    title: req.body.title,
    company: req.body.company,
    link: req.body.link,
    price: req.body.price,
    selectedPrice: 0,
    image: req.body.image,
    specs: req.body.specs,
    description: req.body.description,
    inCart: false,
    inWishList: false,
    count: 0,
    total: 0
  };
  Product.create(product, function(err, newproduct) {
    if (err) {
      console.log(err);
    } else {
      console.log("new product created");
      //send the new product
      res.json(newproduct);
    }
  });
  // equals new Product({}).save(), create triggers the save() middleware
});

//display a certain product
router.get("/api/:id", function(req, res) {
  Product.findById(req.params.id, function(err, foundproduct) {
    if (err) {
      console.log(err);
    } else {
      res.json(foundproduct);
    }
  });
});

//edit router
router.get("/api/:id/edit", middleware.isLoggedIn, function(req, res) {
  Product.findById(req.params.id, function(err, foundGarden) {
    console.log("product can be edited");
    // res.render("gardens/edit", { garden: foundGarden });
  });
});

//update router
router.put("/api/:id", middleware.isLoggedIn, function(req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body.product, function(
    err,
    updatedProduct
  ) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      // console.log(updatedGarden._id);
      // Garden.findOneAndUpdate({_id:req.params.id}, )
      req.flash("success", "You have successfully updated this garden!");
      res.redirect("/" + updatedProduct._id);
    }
  });
});

//delete garden route
router.delete("/api/:id", middleware.isLoggedIn, function(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      // res.send("You have successfully deleted this garden");
      req.flash("success", "You have successfully deleted this garden");
      res.redirect("/");
    }
  });
});

module.exports = router;
//export default??
