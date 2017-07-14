"use strict"
// prompt for username
var guestName = prompt("Hey, what's your name? Let's play a game!");
var correctTimes = 0;

document.getElementById('guest_name').innerHTML = guestName;
document.getElementById('h1_guest_name').innerHTML = guestName;
console.log("User types in name: " + guestName);

var answer;

// question 1-5
var yesOrNoQuestions = function() {
  var q1 = "Can pigs look at the sky?",
      q2 = "Can horses sleep while standing up?",
      q3 = "Do baby elephants suck their trunk?",
      q4 = "Do prairie dogs kiss?",
      q5 = "Finally, can cats taste sugar?";

  var gameArray = [[q1, {"y":["Wrong. They cannot fly either.", 0], "n":["Correct! Their muscle doesn't allow that. Sad face.", 1]}],
                  [q2, {"y":["Correct! Horses are so cool...", 1], "n":["Wrong. Can you imagine when they cuddle?", 0]}],
                  [q3, {"y":["Correct! They are just like babies.", 1], "n":["Wrong. There haven't yet been a pacifier for elephants.", 0]}],
                  [q4, {"y":["Correct! They speak French too.", 1], "n":["Wrong. You are just jealous.", 0]}],
                  [q5, {"y":["Wrong. They never smile, can't you see.", 0], "n":["Correct! They are flawed, god forbid!", 1]}]];

  for (var i = 0; i < 5; i++) {
    answer = prompt(gameArray[i][0]).toLowerCase();
    if (answer === "y" || answer === "yes") {
      alert(gameArray[i][1]["y"][0]);
      correctTimes += gameArray[i][1]["y"][1];
    } else if (answer === "n" || answer === "no") {
      alert(gameArray[i][1]["n"][0]);
      correctTimes += gameArray[i][1]["n"][1];
    } else {
      alert("You didn't type in yes or no.");
    }
  }
}

yesOrNoQuestions();

var timeOrTimes = ["time", "times", "times", "times", "times"] //stupid way to determine: to use 'times' or 'time' based on count

//question 6
var question6 = function() {
  var count = 1;
  var setNumber = Math.floor(Math.random()*100);
  var guessNumber = parseInt(prompt("Hey now, tell me what you think your karma value is in numbers, out of 100."));
  do {
    if(guessNumber === setNumber) {
      alert("You know your karma! \nThe most difficult thing is to know yourself. -- Thales.")
      count = count + 1;
      correctTimes ++;
      break;
    } else if(guessNumber > setNumber && count !== 4) {
      guessNumber = prompt("Ah, I see you are confident, but probably you might want to consider being a bit humble. \nYou have " + (4-count) + " " + timeOrTimes[3-count] + " left. Guess again!");
      count ++;
    } else if(guessNumber < setNumber && count !== 4) {
      guessNumber = prompt("Give your self more karma point! \nYou have " + (4-count) + " " + timeOrTimes[3-count] + " left. Guess again!")
      count ++;
    } else if(count === 4 && guessNumber !== setNumber) {
      alert("Uh oh, you ran out of chances! You karma value is: " + setNumber + ". Not that it matters.");
      break;
    } else {
      alert("You typed something else, apparently you don't take it seriously. Angry face. And plus you now break my JS loop.");
      break;
    }
  }
  while(count <= 4);
} // question6 function END
question6();

//question 7
var question7 = function() {
  var count2 = 1;
  var brewery = ["hilliard", "fremont", "lucky envelope", "reuben's", "", "outlander", "naked city"];
  var answer7 = prompt("Let's talk about beers. What brewery in Seattle do I like?\nfinally something about ME.").toLowerCase();
  do {
    if(brewery.includes(answer7) && answer7 !== "") {
      alert("Great minds think alike. You can buy us 2 beers and celebrate!");
      correctTimes ++;
      count2 ++;
      answer7 = prompt("Let's talk about beers. What brewery in Seattle do I like?\nfinally something about ME. \nYou have " + (6-count2) + " " + timeOrTimes[5-count2] + " left.").toLowerCase();
    } else {
        answer7 = prompt("Hmm....not really. Hint: I don't like high IBUs. \nYou have " + (6-count2) + " " + timeOrTimes[5-count2] + " left. Guess again!" );
        count2 ++;
      }

      if(count2 === 6) {
      alert("Uh oh, looks like no beers for us...\nFor breweries in Seattle area, I like these guys: Hilliard, Lucky Envelope, Naked City.");
      break;
      }
    }
  while(count2 < 7);
} // question7 function END
question7();

alert("Hey, " + guestName + " you get " + correctTimes + " out of 12 right. Yay.")
