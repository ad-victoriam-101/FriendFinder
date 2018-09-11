// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Profile  = require("./app/data/friends")

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
console.log(Profile);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// due to time constraints have to sudo code the rest
// after getting the pages to talk to each other use the user form data to populate a new Profile Constructor, 
// I wanted to auto fill the radio buttons for the questions. 
// after the user data is returned take the user score and compare it to the scores on file. 
// find the totall ammount diff and compare the numbers to find the smallest one. 
// after finding the profile that has the scores closest to the user, using a Modal display to the user the profile of the winner. 
