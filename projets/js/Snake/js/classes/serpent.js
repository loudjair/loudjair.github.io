class Serpent{
	/*
		@dim : dimension de chaque membre corporel du serpent
	*/
	constructor(dim){
		this.direction = "ArrowRight"
		this.corps = []
		this.taille = 0
		this.dim_membre = dim
	}

	grandir(abs,ord){
		this.corps.push(new Objet(abs,ord,this.dim_membre,"green"))
		this.taille += 1
	}

	nouvelle_position(){
		let i = this.taille-1
		for(;i>0;i--){
			if(this.corps[i-1].taille == 10){
				if(this.corps[i].x1-this.corps[i-1].x1 == -10){
					if(this.corps[i].y1 < this.corps[i-1].y1){
						this.corps[i].modifyPosition(this.corps[i].x1,this.corps[i].y1+20)
					}
					else
						this.corps[i].modifyPosition(this.corps[i].x1,this.corps[i].y1-20)
				}
				else if(this.corps[i].y1-this.corps[i-1].y1 == -10){
					if(this.corps[i].x1-this.corps[i-1].x1 == -30)
						this.corps[i].modifyPosition(this.corps[i].x1+20,this.corps[i].y1)
					else
						this.corps[i].modifyPosition(this.corps[i].x1-20,this.corps[i].y1)
				}
			}
			else
				this.corps[i].modifyPosition(this.corps[i-1].x1,this.corps[i-1].y1);
		}
		this.corps[0].direction(this.direction,this.dim_membre);
	}
	dessine(canvas){
		let corps
		for(corps in this.corps){
			if(this.corps[corps].taille == 10)
				this.corps[corps].dessine("cercle",canvas)
			else
				this.corps[corps].dessine("carre",canvas)

		}
	}

	diriger(){
		window.addEventListener("keydown",(event)=>{
				let touche = event.key;
				//Seules les touches directionnelles sont acceptées
				if( touche == "ArrowLeft" || touche == "ArrowUp" || touche == "ArrowRight" || touche == "ArrowDown"){
					if(this.direction == "ArrowLeft"){
						if(touche !="ArrowRight" )
							this.direction = touche;
					}else if(this.direction == "ArrowRight"){
						if(touche !="ArrowLeft")
							this.direction = touche;
					}else if(this.direction == "ArrowUp"){
						if(touche !="ArrowDown")
							this.direction = touche;
					}else if(this.direction == "ArrowDown"){
						if(touche !="ArrowUp")
							this.direction = touche;
					}
				}
			});		
	}
	tete_percuter(canvas){
		return (0 > this.corps[0].x1 || this.corps[0].x1 > canvas.largeur() || this.corps[0].y1 < 0 || this.corps[0].y1 > canvas.hauteur())
	}
	corps_percuter(){
		let i = 1;
		for(;i< this.taille;i++){
			if((this.corps[0].x1-this.corps[i].x1)== 10 && (this.corps[0].y1-this.corps[i].y1)==10)
				return true
		}
		return false
	}
	manger(pomme,distance){
		if(Math.sqrt(Math.pow(pomme.x1-this.corps[0].x1,2)+Math.pow(pomme.y1-this.corps[0].y1,2))<= distance)
			return true		
		return false
	}
}