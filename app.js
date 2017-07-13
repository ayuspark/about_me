"use strict"
// prompt for username
var guestName = prompt("Hey, what's your name? Let's play a game!");
var correctTimes = 0;
// var i;
// var allQuestions = ["Can pigs look at the sky?", "Can horses sleep while standing up?", "Do baby elephants suck their trunk?", "Do baby elephants suck their trunk?", "Do prairie dogs kiss?", "Finally, can cats taste sugar?", "Hey now, tell me what you think your karma value is in numbers, out of 100.", "Let's talk about beers. What brewery in Seattle do I like?\nfinally something about ME."];

// var answer1, answer2, answer3, answer4, answer5, answer7, guessNumber;
// answer1 = prompt(allQuestions[0]).toLowerCase();
// answer2 = prompt(allQuestions[1]).toLowerCase();
// answer3 = prompt(allQuestions[2]).toLowerCase();
// answer4 = prompt(allQuestions[3]).toLowerCase();
// answer5 = prompt(allQuestions[4]).toLowerCase();
// guessNumber = prompt(allQuestions[5]).toLowerCase();
// answer7 = prompt(allQuestions[6]).toLowerCase();
document.getElementById('guest_name').innerHTML = guestName;
document.getElementById('h1_guest_name').innerHTML = guestName;
console.log("User types in name: " + guestName);

// question 1
var answer1 = prompt("Can pigs look at the sky?\nY or N?").toLowerCase();
if(answer1 === "n" || answer1 === "no") {
  alert("Correct! Their muscle doesn't allow that. Sad face.");
  correctTimes ++;
} else if (answer1 === "y" || answer1 === "yes") {
  alert("Wrong. They cannot fly either.")
} else {
  alert("You didn't type in Y or N.")
}
console.log("user answer1 is: " + answer1);

// question 2
var answer2 = prompt("Can horses sleep while standing up?\nY or N?").toLowerCase();
console.log("user answer2 is: " + answer2);
if (answer2 === "y" || answer2 === "yes") {
  alert("Correct! Horses are so cool...");
  correctTimes ++;
} else if (answer2 === "n" || answer2 === "no") {
  alert("Wrong. Can you imagine when they cuddle?")
} else {
  alert("You didn't type in Y or N.")
};

// question 3
var answer3 = prompt("Do baby elephants suck their trunk?\nY or N?").toLowerCase();
console.log("user answer3 is: " + answer3);
if (answer3 == "y" || answer3 === "yes") {
  alert("Correct! They are just like babies.");
  correctTimes ++;
} else if (answer3 == "n" || answer3 === "no") {
  alert("Wrong. There haven't yet been a pacifier for elephants.")
} else {
  alert("You didn't type in Y or N.")
};

// question 4
var answer4 = prompt("Do prairie dogs kiss?\nY or N?").toLowerCase();
console.log("user answer4 is: " + answer4);
if (answer4 == "y" || answer4 === "yes") {
  alert("Correct! They speak french too.");
  correctTimes ++;
} else if (answer4 === "n" || answer4 === "no") {
  alert("Wrong. You are just jealous?")
} else {
  alert("You didn't type in Y or N.")
};

// question 5
var answer5 = prompt("Finally, can cats taste sugar?\nY or N?").toLowerCase();
console.log("user answer5 is: " + answer5);
if (answer5 === "n" || answer5 === "no") {
  alert("Correct! They are flawed, god forbid!");
  correctTimes ++;
} else if (answer5 === "yes" || answer5 === "y") {
  alert("Wrong. They never smile, can't you see.")
} else {
  alert("You didn't type in Y or N.")
};

document.getElementById('guest_name').innerHTML = guestName;
document.getElementById('h1_guest_name').innerHTML = guestName;
console.log("User types in name: " + guestName);

//question 6
var count = 1;
var setNumber = Math.floor(Math.random()*100);
var timeOrTimes = ["time", "times", "times", "times", "times"] //stupid way to determine: to use 'times' or 'time' based on count
var guessNumber = prompt("Hey now, tell me what you think your karma value is in numbers, out of 100.");
do {
  if(guessNumber === setNumber) {
    alert("You know your karma! \nThe most difficult thing is to know yourself. -- Thales.")
    count = count + 1;
    correctTimes ++;
    break;
  } else if(guessNumber > setNumber && count != 4) {
    guessNumber = prompt("Ah, I see you are confident, but probably you might want to consider being a bit humble. \nYou have " + (4-count) + " " + timeOrTimes[3-count] + " left. Guess again!");
    count ++;
  } else if(guessNumber < setNumber && count != 4) {
    guessNumber = prompt("Give your self more karma point! \nYou have " + (4-count) + " " + timeOrTimes[3-count] + " left. Guess again!")
    count ++;
  } else if(count === 4 && guessNumber != setNumber) {
    alert("Uh oh, you ran out of chances! You karma value is: " + setNumber + ". Not that it matters.");
    break;
  } else {
    alert("You typed something else, apparently you don't take it seriously. Angry face. And plus you now break my JS loop.");
    break;
  }
}
while(count <= 4);

//question 7
var count2 = 1;
var brewery = ["hilliard", "fremont", "lucky envelope", "reuben's", "", "outlander", "naked city"];
var answer7 = prompt("Let's talk about beers. What brewery in Seattle do I like?\nfinally something about ME.").toLowerCase();
do {
  if(brewery.includes(answer7) && answer7 != "") {
    alert("Great minds think alike. You can buy us 2 beers and celebrate! \nFor breweries in Seattle area, I like these guys: Hilliard, Lucky Envelope, Naked City.");
    correctTimes ++;
    break;
  } else if(count2 === 6) {
    alert("Uh oh, looks like no beers for us...\nFor breweries in Seattle area, I like these guys: Hilliard, Lucky Envelope, Naked City.");
    break;
  } else {
    answer7 = prompt("Hmm....not really. Hint: I don't like high IBUs. \nYou have " + (6-count2) + " " + timeOrTimes[5-count2] + " left. Guess again!" );
    count2 ++;
  }
}
while(count2 < 7);

alert("Hey, " + guestName + " you get " + correctTimes + " out of 7 right. Yay.")
