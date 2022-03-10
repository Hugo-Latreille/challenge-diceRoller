function randomNumber(min, max) {
	// entre 1 et 6
	return Math.round(Math.random() * (max - min) + min);
}

function rollDice(playerId) {
	var dice = randomNumber(1, 6);
	console.log(dice);

	var divDice = document.createElement("div");
	divDice.classList.add("dice");
	var player = document.getElementById("player");
	var otherPlayer = document.getElementById("dealer");

	if (playerId === "player") {
		player.appendChild(divDice);
	} else {
		otherPlayer.appendChild(divDice);
	}

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
		rollDice("dealer");
		rollDice("player");
	}
}

function adversary() {
	var otherPlayer = document.createElement("div");
	otherPlayer.classList.add("board");
	otherPlayer.setAttribute("id", "dealer");
	var app = document.getElementById("app");
	app.appendChild(otherPlayer);
}

adversary();
severalRolls();
