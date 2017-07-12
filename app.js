"use strict"
var guestName = prompt("Hey, what's your name? Let's play a game!");
alert("But I just read we can't use functions yet, so I will have to ask you all the questions here. \nYou should be able to see the answers once the page reload after all the prompts. \nOh dear.");
var answer1 = prompt("Can pigs look at the sky?\nY or N?");
answer1.toLowerCase();
if (answer1 === "n" || answer1 === "no") {
  alert("Correct! Their muscle doesn't allow that. Sad face.")
} else if (answer1 === "y" || answer1 === "yes") {
  alert("Wrong. They cannot fly either.")
} else {
  alert("You didn't type in Y or N.")
};
console.log("user answer1 is: " + answer1);

var answer2 = prompt("Can horses sleep while standing up?\nY or N?");
answer2.toLowerCase();
console.log("user answer2 is: " + answer2);
if (answer2 === "y" || answer2 === "yes") {
  alert("Correct! Horses are so cool...")
} else if (answer2 === "n" || answer2 === "no") {
  alert("Wrong. Can you imagine when they cuddle?")
} else {
  alert("You didn't type in Y or N.")
};

var answer3 = prompt("Do baby elephants suck their trunk?\nY or N?");
answer3.toLowerCase();
console.log("user answer3 is: " + answer3);
if (answer3 == "y" || answer3 === "yes") {
  alert("Correct! They are just like babies.")
} else if (answer3 == "n" || answer3 === "no") {
  alert("Wrong. There haven't yet been a pacifier for elephants.")
} else {
  alert("You didn't type in Y or N.")
};

var answer4 = prompt("Do prairie dogs kiss?\nY or N?");
answer4.toLowerCase();
console.log("user answer4 is: " + answer4);
if (answer4 == "y" || answer4 === "yes") {
  alert("Correct! They speak french too.")
} else if (answer4 === "n" || answer4 === "no") {
  alert("Wrong. You are just jealous?")
} else {
  alert("You didn't type in Y or N.")
};

var answer5 = prompt("Finally, can cats taste sugar?\nY or N?");
answer5.toLowerCase();
console.log("user answer5 is: " + answer5);
if (answer5 === "n" || answer5 === "no") {
  alert("Correct! They are flawed, god forbid!")
} else if (answer5 === "yes" || answer5 === "y") {
  alert("Wrong. They never smile, can't you see.")
} else {
  alert("You didn't type in Y or N.")
};

document.getElementById('guest_name').innerHTML = guestName;
document.getElementById('h1_guest_name').innerHTML = guestName;
console.log("User types in name: " + guestName)
