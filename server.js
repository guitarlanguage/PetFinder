// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');
var router = express.Router();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use static method to give all parts of applcation access to img or css
app.use(express.static('app/public'));
//requires apiRoutes. api routes needs to be before htmlRoutes
require("./app/routing/apiRoutes.js") (app);
//requires htmlRoutes and uses app which is set to express() on line 16
require("./app/routing/htmlRoutes.js") (app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
