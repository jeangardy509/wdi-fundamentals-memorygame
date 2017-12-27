var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = [0];
var cardTwo = [2];

cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");

console.log("User flipped queen");
console.log("user flipped king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("you have found a match!");
}
else {
	alert("sorry, try again!");
}