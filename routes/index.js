let express = require("express");
let router = express.Router();
let passport = require("passport");
let User = require("../models/user");

// Root Route
router.get("/", (req, res) => {
  res.render("landing");
});

// ===========================
// AUTH ROUTES
// ===========================

// show register form
router.get("/register", function(req, res) {
  res.render("register", { page: "register" });
});

// handle sign-up logic
// register() is a method from passport-local-mongoose
// it stores the password and the crazy 'hash' number
// the user signs up, gets authentication, and is redirected
router.post("/register", function(req, res) {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render("register", { error: err.message });
    }
    passport.authenticate("local")(req, res, function() {
      req.flash(
        "success",
        " Welcome to YelpCamp! You're Successfully Signed Up! Nice to meet you  " +
          req.body.username
      );
      res.redirect("/campgrounds");
    });
  });
});

// show login form
router.get("/login", function(req, res) {
  res.render("login", { page: "login" });
});

// handling login logic
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }),
  function(req, res, next) {}
);

// logout route
// logout() is a method from passport-local-mongoose
router.get("/logout", function(req, res) {
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/campgrounds");
});

module.exports = router;
