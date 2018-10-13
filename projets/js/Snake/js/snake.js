"use strict";

let clique = 0

window.onload = function(){
	let jouer = document.getElementById("jouer")
	let point = document.getElementById("point")
	let canvas = new Canvas()
	let snake = new Jeu(canvas,point);
	snake.initialisation()

	jouer.addEventListener("click",lancement);
	function lancement(){
		if(clique == 0 ){
			clique = 1
			snake.en_cours()

		}
	}
};