"use strict"

class Pomme{
	constructor(rayon=10,couleur="green"){
		this.rayon = rayon
		this.taille = 0
		this.pommes= []
		this.couleur = couleur
	}

	/*
		Comme la forme de la pomme est un cercle , le positionnement de celle ci
		doit se faire au centre d'une case quelconque du jeu.
		Comme le jeu est de taille 600x600
		Le centre du cercle doit être compris entre 10 et 590 
		De plus le centre doit être un multiple de 10

		@serpent : tableau des coordonnées et vérifier s'il n'y pas
		de confusion avec celles de la nouvelle qui sera placée
	*/
	ajouter(serpent,canvas){
		let abs ,ord ;
		while(1){

			/* On choisit aléatoirement entre 10 et 590 */
			abs = Math.floor(Math.random()*(canvas.largeur()-9))+10;
			ord = Math.floor(Math.random()*(canvas.hauteur()-9))+10;

			/* les dizaines de l'abs et ord doivent être impaire */
			if(Math.floor(abs/10)%2 != 0 && Math.floor(ord/10)%2 != 0){
				abs = Math.floor(abs/10)*10;
				ord = Math.floor(ord/10)*10;
				if(Verification.placement(abs,ord,serpent)===true)
					break;
			}
		}		
		this.pommes.push(new Objet(abs,ord,this.rayon,this.couleur))
		this.taille +=1
	}
	dessine(canvas){
		if(this.taille>0)
			this.pommes[0].dessine("cercle",canvas)
	}
}