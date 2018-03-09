// var path = require('path');
var siteFriends = require ("../data/friends.js");
// var fs = require('fs');

//    * A POST routes `/api/friends`. This will be used to handle
//  incoming survey results. This route will also be used to handle
//   the compatibility logic.

module.exports = function(app) {
    //app represents express
    app.get("/api/friends", function (req, res) {
        res.json(siteFriends);
        // thinking about doing a fs file 
        // fs.readFile("/../data/friends.js", "utf8", function(err, data) {
		// 	if (err) {
		// 		return console.log(err);
		// 	}
        //
		// 	else {
		// 		res.json(JSON.parse(data));
		// 	}
		// });
    });

    app.post("/api/friends", function (req, res) {
        //logic goes here---------->
        // console.log(req.body);
        // console.log(res.body);
        var totalScore = 0;
        var userBio = req.body;
        var userScore = userBio.scores;
        // var memberScores = siteFriends.scores;
        
        siteFriends.push(userBio);
       
        //testing trying to grab somebody
        // console.log(siteFriends[0].scores);
        // console.log(`___________`);
        console.log(`userScore: ${userScore}`);

        siteFriends.forEach(function(element, j) {
            var difference = 0;
            // console.log(element);
            console.log(`element.name: ${element.name}: element.scores:${element.scores} with a j index of ${j}`);
            // var scoreHolder = element[j].scores;
            // totalScore += Math.abs(siteFriends[j].scores);
            //targeting each score sheet
            // console.log(siteFriends[j].scores);
            // siteFriends[j].scores.forEach
            element.scores.forEach(function(list, l) {
                console.log(`--------`);
                console.log(list);
                console.log(`--------`);

                userScore.forEach(function(item, k) {
                    var doMath = Math.abs(parseInt(item - list));
                    console.log(`${element.name}'s (item): ${item} - (list): ${list}: ${doMath} | with a k index of ${k}`);
                    console.log(`k index on second loop: ${k} and element.scores: ${element.scores}`);
                    console.log(`___________________`)
                    totalScore += Math.abs(parseInt(item - list));
                    
                })
            })

            
            console.log(`totalScore: ${totalScore}`)

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
