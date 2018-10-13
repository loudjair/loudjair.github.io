"use strict";

class Canvas{
	constructor(canvas="canevas"){
		this.canvas = document.getElementById(canvas)
		this.context = this.canvas.getContext("2d")
	}
	largeur(){
		return this.canvas.width
	}
	hauteur(){
		return this.canvas.height
	}
	style(couleur){
		this.context.fillStyle = couleur;
	}
	carre(abscisse,ordonnee,taille){
		this.context.fillRect(abscisse,ordonnee,taille,taille);
	}
	cercle(abscisse,ordonnee,rayon){
		this.context.beginPath();
		this.context.arc(abscisse,ordonnee,rayon,0,2*Math.PI);
		this.context.fill();
	}
	rafraichir(){
		this.context.clearRect(0,0,this.largeur(),this.hauteur());
	}
}
