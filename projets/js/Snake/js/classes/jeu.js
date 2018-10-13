"use strict";

class Jeu{
	constructor(canvas,point){
		this.serpent = new Serpent(20)
		this.pomme = new Pomme()
		this.partie
		this.gameover_son = new Son("gameOver")
		this.pommeVerte = new Son("pommeVerte")
		this.distance = Math.sqrt(50)
		this.canvas = canvas
		this.score = point
	}
	initialisation(){
		/* Ajout du serpent avec sa tete (tomato) et son corps(green) */
		/* Placement par defaut du serpent*/
		this.serpent.corps.push(new Objet(130,210,10,'tomato'))
		this.serpent.grandir(100,200,'green')
		this.serpent.taille = 2
		this.serpent.dessine(this.canvas)
		this.point = 0
		this.score.innerHTML = 0
	}

	animer(){
		this.canvas.rafraichir()
		this.serpent.nouvelle_position()
		this.serpent.dessine(this.canvas)
		this.pomme.dessine(this.canvas)
	}

	game_over(){
		/* Une petite mélodie est jouée lorsque le joueur perd */
		this.gameover_son.jouer()
		/* On arrête la boucle  */
		window.clearInterval(this.partie);
	}

	en_cours(){
		let vitesse = 100;
		this.partie = window.setInterval(()=>{
				this.animer();
				if(this.serpent.tete_percuter(this.canvas) || this.serpent.corps_percuter())
					this.game_over()
				if(this.pomme.taille < 1){
					this.pomme.ajouter(this.serpent.corps,this.canvas);
				}
				else{
					if(this.serpent.manger(this.pomme.pommes[0],this.distance)){
						this.pommeVerte.jouer()
						this.pomme.pommes.pop()
						this.serpent.grandir()
						this.pomme.taille -=1
						this.point +=10
						this.score.innerHTML = this.point
					}
				}
				this.serpent.diriger();
			},vitesse);
	}
}