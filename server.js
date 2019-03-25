//This file is to ensure that things connect across the site.
//There are different required dependencies that need to be linked, so this is where those connections are established

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");


//This code initializes the express app
var express = require("express");
var app = express();


//This code helps logg the dev part of the app
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);


//This code sets up the app engine 
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/newsscraper");
var db = mongoose.connection;


//This code lets us know if we're able to establish a connection to Mongoose
db.on("error", console.error.bind(console, "Malfunction trying to connect:"));
db.once("open", function() {
    console.log("Congratulations, you're connected to Mongoose!");
});


//This section ensures that there's a connection to my local port and displays a successful message after launching.
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("This is working/listening on local port " + port);

});

//This code will connect the app to the public folder

