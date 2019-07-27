const router = require("express").Router();
const mongoose = require("mongoose");

const Product = require("../models/products");
const User = require("../models/users");
const Wishlist = require("../models/wishlists");
//the only verification is if user is loggin
const middleware = require("../middleware/index");
const passport = require("passport");

// ======================================WISHLIST ==========================//
//add back isLoggedIn
router.get("/api/user/:id/wishlists", function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.json(err);
    } else {
      res.json(foundUser.wishlists);
    }
  });
});

//add a new list to wishlists
router.post("/api/user/:id/wishlists", function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.json(err);
    } else {
      Wishlist.create({ listname: req.body.listname, products: [] }, function(
        err,
        newList
      ) {
        if (err) {
          res.json(err);
        } else {
          foundUser.wishlists.push(newList);
          foundUser.save();
          res.json(foundUser.wishlists);
        }
      });
    }
  });
});

//get the info of selected wishlist
router.get("/api/user/:id/wishlists/:w_id", function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.json(err);
    } else {
      Wishlist.findById(req.params.w_id, function(err, foundList) {
        if (err) {
          res.json(err);
        } else {
          res.json(foundList);
        }
      });
    }
  });
});

//add a product to selected wishlist
router.post("/api/user/:id/wishlists/:w_id", function(req, res) {
  Wishlist.findById(req.params.w_id, function(err, foundList) {
    if (err) {
      res.json(err);
    } else {
      if (foundList.products) {
        Product.findOne({ pid: req.body.productId }, function(
          err,
          foundProduct
        ) {
          if (err) {
            res.json(err);
          } else {
            if (
              foundProduct &&
              !foundList.products.includes(foundProduct._id)
            ) {
              foundList.products = [...foundList.products, foundProduct];
              foundList.save();

              res.json(foundList);
            }
          }
        });
      }
    }
  });
});

router.get("/api/user/:id/wishlists/:w_id/update", function(req, res) {
  res.json("update page");
});

//remove a product from selected wishlist
router.post("/api/user/:id/wishlists/:w_id/update", function(req, res) {
  //take the _id ,  find the product in WishList and remove
  //also need to remove the product id it from user
  Wishlist.findById(req.params.w_id, function(err, foundList) {
    if (err) {
      res.json(err);
    } else {
      let updatedProducts = foundList.products.filter(
        p => p.pid !== req.body.productId
      );
      foundList.products = updatedProducts;
      foundList.save();
      //send updated list with product removed
      res.json(foundList);
    }
  });
});

// ====================================== CART ==========================//

//get user shopping  cart
router.get("/api/user/:id/cart", (req, res) => {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.json(err);
    } else {
      res.json(foundUser.cart);
    }
  });
  //access user's cart property and send back to client
});

//add an item to cart
router.post("/api/user/:id/cart", (req, res) => {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.json(err);
    } else {
      foundUser.cart = [...foundUser.cart, { ...req.body }];
      foundUser.save();
      res.json(foundUser.cart);
    }
  });
});

//modify the quantity or specs of an item in cart
router.put("/api/user/:id/cart", (req, res) => {
  //find the product
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.json(err);
    } else {
      foundUser.cart = req.body;
      foundUser.save();
      res.json(foundUser.cart);
    }
  });
});

//remove an item from cart
router.delete("/api/user/:id/cart/:p_id", (req, res) => {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      res.json(err);
    } else {
      if (req.params.p_id === "9") {
        foundUser.cart = [];
        foundUser.save();
        res.json(foundUser.cart);
      } else {
        foundUser.cart = foundUser.cart.filter(
          item => item._id.toString() !== req.params.p_id
        );
        foundUser.save();
        res.json(foundUser.cart);
      }
    }
  });
});

// ====================================== LOGIN SIGNUP ==========================//
router.get("/api/user/signup", function(req, res) {
  res.json("signup page");
});

router.post("/api/user/signup", function(req, res) {
  const newUser = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    cart: [],
    admincode: req.body.admincode
  });

  // Wishlist.create({ listname: "startlist", products: [] }, function(
  //   err,
  //   newlist
  // ) {
  //   if (err) {
  //     res.json(err.message);
  //   } else {
  //     newUser.wishlists.push(newlist);
  //   }
  // });

  //Because user schema is using a plugin, by using register(comes from passport local mongoose. It create a
  //new user, but also integrate authentification with the password and username.
  //as an authentification strategy. )
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      res.json(err.message);
    } else {
      passport.authenticate("local")(req, res, function() {
        res.json(newUser.username);
      });
    }
  });
});

router.post("/api/user/login", passport.authenticate("local"), function(
  req,
  res
) {
  // console.log(req.user);
  res.json(req.user);
  //if authentification process is successful. user will have req.user property
});

//
router.get("/api/user/login", function(req, res) {
  res.json("success");
});
//show the new product form, user has to log in as an admin

router.get("/api/user/logout", function(req, res) {
  req.logout();
  res.json("logged out");
});

module.exports = router;
