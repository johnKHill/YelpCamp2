# YelpCamp
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
  * Name
  * Image
  * { name: "Jacket Pond", image: "https://farm2.staticflickr.com/1064/5116563404_8bff751b20.jpg"},
  * route: "/campgrounds"


# Layout and Basic Styling
* Create the header and footer partials
* Add in Bootstrap


# Create New Campground
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add a basic unstyled form

# Style the campgrounds page
* Add a beter header/title
* Make campgrounds display in a grid

# Style the Vabbar and Form
* Add a navbar to all templates
* Style the new campground form

# Databases

## Intro to Databases
* What is a database?
  * A collection of information/data
  * Has an interface
    * a language
    * Can write code to interact with
      * db.dogs.find(),
      * db.dogs.delete({age: 14})

* SQL(relational) vs. NoSQL(non-relational)
  * SQL
    * tabular/flat

    USERS TABLE
  id |  name   | age | city
  ----------------------------
  1  | Tim     | 57  | NYC
  2  | Ira     | 24  | Missoula
  3  | Sue     | 40  | Boulder


    COMMENTS TABLE
  id |       text
  ----------------------------
  1  | "lol"
  2  | "Come visit Montana!"
  3  | "I love puppies!!!"
  4  | "Seriously Montana is great!"


  USER/COMMENTS JOIN TABLE
  userId  | commentId
  ----------------------------
    1          3
    2          2
    2          4
    3          1


  * NoSQL
    * more flexble
    * don't have to define a pattern
    * non-flat
    * things can be nested
    * looks like javascript but is called
    * BSON (Binary Javascript Object Notation)


  ==========================
  A NON-RELATIONAL DATABASE:
  ==========================
  {
    name: "Ira",
    age: 24,
    city: "Missoula",
    comments: [
      {text: "Come visit Montana!"},
      {text: "Seriouls Montana is great!"},
      {text: "Why does no one care about Montana???"}
    ],
    favColor: "purple"
  },
  {
    name: "Tammy",
    age: 24,
    city: "Missoula",
    comments: [
      {text: "Come visit Montana!"},
      {text: "Seriouls Montana is great!"},
      {text: "Why does no one care about Montana???"}
    ],
    favFood: "Ribeye"
  }

# Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

# Show Page
* Review the RESTFUL routes we've seen so far
* Add description to our campground model
* Show db.collection.drop() - drops ALL the campgrounds
* Add a show route/template

RESTFUL ROUTES

name       url          HTTP verb      desc.
====================================================
INDEX     /dogs         GET            Displays a list os all dogs
NEW       /dogs/new     GET            Displays new dog form, send to CREATE
CREATE    /dogs         POST           Adds new dog to DB, then redirects somewhere
SHOW      /dogs:id      GET            Shows info about one specific dog

MY ROUTES
======================
INDEX   / campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NESTED ROUTES
======================
NEW     campground/:id/comments/new     GET
CREATE  campgrounds/:id/comments/      POST


# Refactor Mongoose Code
* Create a models directory and campground file
* Use module.exports
* Require everything correctly!
  * require mongoose
  * require campground file


# Add Seeds files
* The point of a 'seeds' file is that we can run it to seed our DB with some data
* Add a seeds.js file
* Run the seeds file everytime the server starts


# Add the Comment model!
* Make the eerors go away
* Display comments on campgrounds show page

# Comment New/Create
* Discuss nested routes
* Add the comment form which is a 'new' route
  * and a post route to create a comment called create
* Add the new comment form

# Style Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styleing Show Page
 * Add public directory
 * Add custon stylesheet
## ------------------ AUTHENTICATION BASICS --------------
# Authentication Refers to finding out if someone is who they say they are
##Auth Pt 1. - Add User Model
* Install all packages needed for auth
* Define User model

## Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt. 3 - Login
* Add login routes
* Add login template


## Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

## Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

## -------------- AUTHENTICATION BASICS END ------------------

## Refactor the Routes
* Use Express router to reorganize all routes


## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
  * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
* Add Edit Route for Campgrounds
* Add Link to Edit page
* Add Update Route

# Deleting Campgrounds
* Add Destroy Route
* Add Delete button


# Authorization Part 1: Campgrounds
* User can only edit his/her campground
* User can only delete his/her background
* Hide/Show edit and delete buttons


# Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Campground Edit Route: <!--  /campgrounds/:id/edit -->
Comment Edit Route     <!-- /campgrounds/:id/comments/:comment_id/edit -->


# Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: <!--  /campgrounds/:id
Comment Destroy Route:    <!--  /campgrounds/:id/comments/:comments_id -->

# Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

# Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header
