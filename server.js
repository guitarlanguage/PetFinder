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
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

//requires apiRoutes. api routes needs to be before htmlRoutes
// require("./routes/apiRoutes.js") (app);
//requires htmlRoutes and uses app which is set to express() on line 16
require("./app/routing/htmlRoutes.js") (app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
