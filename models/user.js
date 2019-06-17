let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new mongoose.Schema({
  usernmae: String,
  password: String
});
// passportLocalMongoose takes the wheel and adds methods to my User
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
