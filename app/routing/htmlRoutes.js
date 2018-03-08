// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    // Basic route that sends the user first to the AJAX Page
    // app.get("/", function(req, res) {
    //     // res.send("Welcome to the Star Wars Page!")
    //     res.sendFile(path.join(__dirname, "/../../app/public/home.html"));
    // });

    app.get("/survey", function(req, res) {
        // res.send("Welcome to the Star Wars Page!")
        res.sendFile(path.join(__dirname, "/../../app/public/survey.html"));
    });

    app.use( function (req, res) {
        res.sendFile(path.join(__dirname + "/../../app/public/home.html"));
    });

};
