var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("you found a match!");
} else {
	console.log("sorry, try again!");
}
};
var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);
console.log("user flipped " + cards[cardId]);
console.log("user flipped " + cards[cardId]);
};

flipCard(0);
flipCard(2);







