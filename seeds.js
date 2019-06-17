const mongoose = require("mongoose");
let Campground = require("./models/campground");
let Comment = require("./models/comment");

// Array of objects to add to DB
let data = [
  {
    name: "Cloud's Rest",
    image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Desert Mesa",
    image: "https://farm5.staticflickr.com/4249/34978179570_f2286217a1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Canyun Floor",
    image: "https://farm4.staticflickr.com/3741/9586943706_b22f00e403.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

function seedDB() {
  // Remove All campgrounds
  Campground.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed campgrounds!");
      // add a few campgrounds objects from the data array
      data.forEach(function(seed) {
        Campground.create(seed, function(err, campground) {
          if (err) {
            console.log(err);
          } else {
            console.log("added a campground");
            // create comment
            Comment.create(
              {
                text:
                  "This place is great, but I wish there was an internet!!!",
                author: "Homer"
              },
              function(err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  // add a few comments
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created New comment");
                }
              }
            );
          }
        });
      });
    }
  });
}

module.exports = seedDB;
