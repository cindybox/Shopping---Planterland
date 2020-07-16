const middlewareObj = {};
// const flash = require("connect-flash");

middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Please Login In First");
  res.redirect("/login");
};

module.exports = middlewareObj;
