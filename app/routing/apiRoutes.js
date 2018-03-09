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
        // console.log(res.body);
        var totalScore = 0;
        var userBio = req.body;
        // var userScore = userBio.scores;
        // var memberScores = siteFriends.scores;
        // console.log(userScore);
        siteFriends.push(userBio);

        console.log(siteFriends[0].scores);
        // console.log(`___________`);
        // console.log(userScore);

        siteFriends.forEach(function(element, j) {
            // membersScores += Math.abs(element.res.json);
            console.log(`${element.name}: ${element.scores} with an index of ${j}`);
            // totalScore += Math.abs(siteFriends[j].scores);
            //targeting each score sheet
            // console.log(siteFriends[j].scores);

            siteFriends[j].scores.forEach(function(item, k) {
                item
                console.log(item);
            })
            // console.log(element.scores);

            // membersScores += Math.abs(element.scores);
        })
        // console.log(totalScore);
        // console.log(membersScores);
        // siteFriends.scores.forEach(function(element, j) {
        //     // membersScores += Math.abs(element.res.json);
        //
        //
        // })
        // console.log(`${siteFriends.name} score is: ${membersScores}`);
    //     userScore.forEach(function(elem, i) {
    //         totalScore += Math.abs(elem);
    //         console.log(`scores: ${elem} and index: ${i}`);
    //
    //     });
    // //
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
