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
        //logic goes here---------->
        // console.log(req);
        var totalScore = 0;
        var userBio = req.body;
        var userScore = userBio['scores[]'];
        // console.log(userScore);
        siteFriends.push(userBio);

        userScore.forEach(function(elem, i) {
            console.log(`here I am: ${elem}`);
        })

    });

};
