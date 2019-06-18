require("dotenv").config();
const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  flash = require("connect-flash"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  methodOverride = require("method-override"),
  Campground = require("./models/campground"),
  Comment = require("./models/comment"),
  User = require("./models/user"),
  seedDB = require("./seeds");

// Requiring Routes
let commentRoutes = require("./routes/comments"),
  campgroundRoutes = require("./routes/campgrounds"),
  indexRoutes = require("./routes/index");

// ===========================
// ==== CONFIGURATIONS =======
// ===========================
// Connect/Create a "yelp_camp" database in mongodb directory || heroku "DATABASEURL" server
console.log(process.env.DATABASEURL);
mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true
});

mongoose.set("useCreateIndex", true);
// Use bodyParser to have the form data be available in req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// SAFEST way to connect css files or js files
app.use(express.static(__dirname + "/public"));
// Lets you use HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
app.use(flash());
// Execute/Seed the DB at the beginning to have code that could be run
// ===================================================================
// seedDB();

// =======================
// PASSPORT CONFIGURATION
// =======================
app.use(
  require("express-session")({
    secret: "Once again Rocko wins Best Dog",
    resave: false,
    saveUninitialized: false
  })
);
// 2 METHODS NEEDED FOR PASSPORT TO WORK WITHIN THE APPLICATION
app.use(passport.initialize());
app.use(passport.session());
// Method to authenticate given by the plugin 'passportLocalMongoose'
passport.use(new LocalStrategy(User.authenticate()));
// 2 METHODS RESPONSIBLE FOR READING THE SESSION 'ENCODED' AND 'DECODED', AND PUTTING IT BACK INTO SESSIONS
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MY OWN middleware to be called on every route!!!
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// Required Routes
// reducing duplication for ROUTES...shortening them
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// Starting the Server
app.listen(port, function() {
  console.log("The YelpCamp Server Has Started!");
});
