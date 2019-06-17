const mongoose = require("mongoose");
// SCHEMA SETUP
let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  description: String,
  location: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, // embedding an ID reference to the comments
      ref: "Comment"
    }
  ]
});
// Makes a campground model that uses the campgroundSchema that has methods on it (i.e. Campground.find())
// the model is "always" created singular (i.e. "Cat")
// but is pluralized in the database Schema collection (i.e."cats")
module.exports = mongoose.model("Campground", campgroundSchema);
