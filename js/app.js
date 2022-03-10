var divDice = document.createElement("div");

divDice.classList.add("dice");

var player = document.getElementById("player");

player.appendChild(divDice);

function randomNumber(min, max) {
	// entre 1 et 6
	return Math.round(Math.random() * (max - min) + min);
}

function rollDice() {
	var dice = randomNumber(1, 6);
	console.log(dice);
	divDice.style.backgroundPositionX = `${dice * 100}px`;
}

rollDice();
