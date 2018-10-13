"use strict";
/*
	Class "Objet" qui permet de representer un quelconque objet,
	dans le jeu et grace à la Class parente "Canevas" on peut représenter celui ci
*/
class Objet{
	constructor(x1,y1,taille,couleur){
		this.x1 = x1;
		this.y1 = y1;
		this.taille = taille;
		this.couleur = couleur;
	}

	/*Selon la touche saisie, la direction du serpent change de direction */
	direction(touche,pas){
		/*FLECHE GAUCHE: DIRECTION OUEST*/
		this.x1 += Number(touche == "ArrowLeft")*pas*(-1);
		/*FLECHE HAUT: DIRECTION NORD*/
		this.y1 +=Number(touche == "ArrowUp")*pas*(-1);
		/*FLECHE DROIT: DIRECTION EST*/
		this.x1 +=Number(touche == "ArrowRight")*pas;
		/*FLECHE BAS: DIRECTION SUD*/
		this.y1 +=Number(touche == "ArrowDown")*pas;		
	}

	/* Modifie la position corporelle */
	modifyPosition(x1,y1){
		this.x1 = x1;
		this.y1 = y1;		
	}
	/* Dessine le serpent avec sa actuelle ou nouvelle position*/
	dessine(dessin,canvas){
		canvas.style(this.couleur);
		if(dessin =='carre')
			canvas.carre(this.x1,this.y1,this.taille);

		else if(dessin == "cercle"){
			canvas.cercle(this.x1,this.y1,this.taille)
		}
	}
}