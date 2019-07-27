const // Garden = require("../models/gardens"),
  //   Comment = require("../models/comments"),
  middlewareObj = {};
// const flash = require("connect-flash");

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Please Login In First");
  res.redirect("/login");
};

module.exports = middlewareObj;
//why not export default?
