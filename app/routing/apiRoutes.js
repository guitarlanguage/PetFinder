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
        var goodFriend;
        var userBio = req.body;
        var userScore = userBio.scores;
        
        siteFriends.push(userBio);
        console.log(`userScore outside of loop: ${userScore}`);

        // function findAMatch() {
            
        // };

        siteFriends.forEach(function(element, j) {

            var totalScore = 0;
            var difference = 0;
            console.log(`inside ${element.name}'s loop ******${j}*******`);
            console.log(`element.name: ${element.name}: element.scores:${element.scores} with a j index of ${j}`);
            console.log(`******************************************`);
            
            //looping within the siteFriends Loop--------------------
            element.scores.forEach(function(list, l) {
                //caching variable to get absolute value diffence
                var difference = Math.abs(userScore[l] - list);
                console.log(`orbit userScore[l]: ${userScore[l]} - ${list} (list): ${userScore[l] - list}`);
                totalScore += difference;
                // console.log(`-------------`);
                // console.log(`compatibility score (lower number is better): ${totalScore}`);
            })
            console.log(`totalScore (lower number is better): ${totalScore}`);
            
            if (totalScore <= 20) {
                console.log(`say hello to your new friend ${element.name} ${element.photo}`);
                
            } else {
                console.log(`no friends for you`);
            };
            
            

        });



    });

};
