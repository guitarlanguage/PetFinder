// var path = require('path');
var siteFriends = require ("../data/friends.js");

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
        // console.log(req.body);
        var membersScores = 0;
        var totalScore = 0;
        var userBio = req.body;
        var userScore = userBio['scores[]'];
        // console.log(userScore);
        siteFriends.push(userBio);

        // console.log(siteFriends);

        siteFriends.forEach(function(element, j) {
            // membersScores += Math.abs(element.res.json);
            console.log(`${element.name}: ${element.scores}`);
        })

        // userScore.forEach(function(elem, i) {
        //     totalScore += Math.abs(elem);
        //     console.log(`scores: ${elem} and index: ${i}`);
        //
        // });

    // console.log(`${req.body.name}'s total score: ...${totalScore}`);






        // console.log(membersScores);
        // console.log(sightFriends);
        // siteFriends.forEach(function(elem, i) {
        //     console.log(`sightFriends: ${elem};`);
        //
        // })

        // function findAMatch() {
        //     if (totalScore )
        // };

    });

};
