// var path = require('path');
var siteFriends = require ("../data/friends.js");

// 4. Your `apiRoutes.js` file should contain two routes:
//
//    * A GET route with the url `/api/friends`.
//    This will be used to display a JSON of all possible friends.

//    * A POST routes `/api/friends`. This will be used to handle
//  incoming survey results. This route will also be used to handle
//   the compatibility logic.

module.exports = function(app) {
    //app represents express
    app.get("/api/friends", function (req, res) {
        res.json(siteFriends);
    });

    app.post("/api/friends", function (req, res) {

        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }

    });

    app.post("/api/clear", function () {
        tableData = [];
        waitlistData = [];

        console.log(tableData);
        console.log(waitListData);

    });

};
