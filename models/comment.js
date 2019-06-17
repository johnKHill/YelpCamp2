const mongoose = require("mongoose");
// SCHEMA SETUP
var commentSchema = new mongoose.Schema({
  text: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
});

// Makes a comment model that uses the commentSchema that has methods on it (i.e. Comment.find())
// the model is "always" created singular (i.e. "Cat")
// but is pluralized in the database Schema collection (i.e."cats")
module.exports = mongoose.model("Comment", commentSchema);
