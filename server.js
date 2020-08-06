var express = require("express");

var PORT = process.env.PORT || 3001;

var app = express();

// Serve static content for the burger app from "public" directory
// in the application directory
app.use (express.static("public"));

// parse request Body as JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set Handlebars
var exphbs = require ("express-handlebars");

app.engine ("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Burger App listen on : localhost:" + PORT);
})


