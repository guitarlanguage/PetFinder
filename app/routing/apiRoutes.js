// var path = require('path');
var siteFriends = require ("../data/friends.js");
// var fs = require('fs');

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
        // console.log(res.body);
        var totalScore = 0;
        var userBio = req.body;
        var userScore = userBio.scores;
        
        siteFriends.push(userBio);
        console.log(`userScore outside of loop: ${userScore}`);

        siteFriends.forEach(function(element, j) {
            var difference = 0;
            console.log(`inside ${element.name}'s loop ******${j}*******`);
            console.log(`element.name: ${element.name}: element.scores:${element.scores} with a j index of ${j}`);
            // var scoreHolder = element[j].scores;
            // totalScore += Math.abs(siteFriends[j].scores);
            //targeting each score sheet
            // console.log(siteFriends[j].scores);
            // siteFriends[j].scores.forEach
            
            element.scores.forEach(function(list, l) {
                
                console.log(`==${list} ==== at ${l} index`);
                console.log(`orbit userScore: ${userScore[l]}`);
                console.log(`orbit userScore[l]: ${userScore[l]} - ${list} (list): ${userScore[l] - list}`);
                totalScore += totalScore + userScore[l] - list;
                console.log(`-------------`);

            })
            console.log(totalScore);
                // userScore.forEach(function(item, k) {


                //     // totalScore += MATH.abs(parseInt(siteFriends[j].scores))
                //     //want to subtract item from a slowed down siteFriends[j].scores
                //     console.log(`inside userScore's orbit: ${item} at an index of ${k}`);
                //     console.log(siteFriends[j].scores);

                //     // for (var c = 0; c < element.scores.length; c++) {

                //     //     console.log(`inside element.scores.lenght's loop ******************`);
                //     //     console.log(`current score for this orbit: ${element.scores[c]}`);
                        

                //     // }
                    
                    
                // })
            

            
            console.log(`totalScore: ${totalScore}`);

            // membersScores += Math.abs(element.scores);
        });
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
