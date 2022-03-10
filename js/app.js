function randomNumber(min, max) {
	// entre 1 et 6
	return Math.round(Math.random() * (max - min) + min);
}

function rollDice() {
	var dice = randomNumber(1, 6);
	console.log(dice);

	var divDice = document.createElement("div");
	divDice.classList.add("dice");
	var player = document.getElementById("player");
	player.appendChild(divDice);
	divDice.style.backgroundPositionX = `${dice * 100}px`;
}

function severalRolls() {
	var combien = prompt("Combien de dés souhaitez-vous lancer ?");
	if (combien === null) {
		return;
	}
	var combienChiffre = parseInt(combien);
	if (isNaN(combienChiffre)) {
		alert("Veuillez entrer un chiffre");
	}
	console.log(combienChiffre);

	for (var i = 0; i < combienChiffre; i++) {
		rollDice();
	}
}

severalRolls();
