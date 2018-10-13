"use strict";

window.onload = function(){
	let canvas = new Canvas('animation-serpent')
	let serpent = new Serpent(20)
	let vitesse = 110
	serpent.corps.push(new Objet(110,70,10,'tomato'))
	serpent.taille +=1
	serpent.grandir(80,60)
	serpent.grandir(60,60)
	serpent.dessine(canvas)
	window.setInterval(() => {
		canvas.rafraichir()
		serpent.nouvelle_position()
		serpent.dessine(canvas)
		/* La tête du serpent se situe à corps[0]*/
		if(serpent.corps[0].x1 == 290 && serpent.direction == "ArrowRight"){
			serpent.direction = "ArrowDown"
		}
		if(serpent.corps[0].x1 == 50 && serpent.direction == "ArrowLeft"){
			serpent.direction = "ArrowUp"
		}
		if(serpent.corps[0].y1 == 290 && serpent.direction == "ArrowDown"){
			serpent.direction = "ArrowLeft"
		}
		if(serpent.corps[0].y1 == 70 && serpent.direction == "ArrowUp"){
			serpent.direction = "ArrowRight"
		}
	},vitesse);  
}