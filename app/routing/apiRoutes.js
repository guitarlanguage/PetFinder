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
       
        var userBio = req.body;
        var userScore = userBio.scores;
        
        siteFriends.push(userBio);
        console.log(`userScore outside of loop: ${userScore}`);

        siteFriends.forEach(function(element, j) {

            var totalScore = 0;
            var difference = 0;
            console.log(`inside ${element.name}'s loop ******${j}*******`);
            console.log(`element.name: ${element.name}: element.scores:${element.scores} with a j index of ${j}`);
            console.log(`******************************************`);
            // var scoreHolder = element[j].scores;
            // totalScore += Math.abs(siteFriends[j].scores);
            //targeting each score sheet
            // console.log(siteFriends[j].scores);
            // siteFriends[j].scores.forEach
            
            element.scores.forEach(function(list, l) {
                
                var difference = userScore[l] - list;
                // console.log(`==${list} ==== at ${l} index`);
                // console.log(`orbit userScore: ${userScore[l]}`);
                console.log(`orbit userScore[l]: ${userScore[l]} - ${list} (list): ${userScore[l] - list}`);
                totalScore += difference;
                console.log(`-------------`);
                console.log(totalScore);
            })
            
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

        });




        // function findAMatch() {
        //     if (totalScore )
        // };

    });

};
