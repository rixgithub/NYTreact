// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Create Instance of Express
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// --------Database configuration with Mongoose-------
// -----------Define local MongoDB URI---------
var databaseUri = "mongodb://localhost/nytreact";
if (process.env.MONGODB_URI) {
	// THIS EXECUTES IF THIS IS BEING EXECUTED IN HEROKU APP
	mongoose.connect(process.env.MONGODB_URI);
} else {
	// THIS EXECUTES IF THIS IS BEING EXECUTED ON LOCAL MACHINE
	mongoose.connect(databaseUri);
}
// ----------End database configuration-----------


var db = mongoose.connection;

// Run Morgan for Logging
app.use(logger("dev"));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Require Article Schema
var Article = require("./models/Article");

// ***********Routes******************************


// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// Post route to save articles
// app.post('/api/saved', function(req, res) {
 
//   var content = new Article(req.body);
//   content.save(req.body, function(err, saved) {
//     if (err) {
//       console.log('Mongo Error',err);
//     } else {
//       console.log('Data has been saved',saved);
//       res.send(saved);
//     }
//   });
// });

// Get route to find saved articles
// app.get('/api/saved', function(req, res) {
 
//   Article.find({}, function(err, found) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(found);
//     }
//   });
// });

// Route to delete saved articles
// app.delete('/api/saved/:id', function(req, res){

//   Article.find({'_id': req.params.id}).remove()
//     .exec(function(err, doc) {
//       res.send(doc);
//   });
// });


// ************************************

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

