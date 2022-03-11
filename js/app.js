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

	divDice.style.backgroundPositionX = `${dice * -100}px`;
	// divDice.style.backgroundPositionX = dice * -100 + "px";
}

function eraseDices(userId) {
	var playerBoardElement = document.querySelector(userId);
	playerBoardElement.innerHTML = "";
}

function severalRolls() {
	// var combien = prompt("Combien de dés souhaitez-vous lancer ?");
	// if (combien === null) {
	// 	return;
	// }
	// var combienChiffre = parseInt(combien);
	// if (isNaN(combienChiffre)) {
	// 	alert("Veuillez entrer un chiffre");
	// }
	// console.log(combienChiffre);

	eraseDices("#player");
	eraseDices("#dealer");

	var rangeElement = document.querySelector(".howMany");
	var diceCount = rangeElement.value;

	for (var i = 0; i < diceCount; i++) {
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

function updateRangeInputValue() {
	var rangeInputElement = document.querySelector(".howMany");
	var rangeValue = rangeInputElement.value;

	// je recupère le span
	var rangeValueElement = document.querySelector("#range-value");
	// et je modifie son contenu pour afficher ce qui selectionné avec le slider
	rangeValueElement.textContent = rangeValue;

	severalRolls();
}

adversary();

var btnElement = document.querySelector("#rollDicesBtn");
btnElement.addEventListener("click", severalRolls);

var rangeInputElement = document.querySelector(".howMany");
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/change_event
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
rangeInputElement.addEventListener("input", updateRangeInputValue);
