"use strict"

class Verification{
	/*
		On vérifie si ces deux entités ne se confonde pas
		pendant le placement de la pomme
		@x : abscisse pomme
		@y : ordonnee pomme
		@rayon: rayon de la pomme
		@serpent : tableau des coordonnées du serpent
	*/
	static placement(x,y,serpent){
		let corps;
		for(corps in serpent){
			if(Math.sqrt(Math.pow(corps.x1-x,2)+Math.pow(corps.y1-y,2)) <= Math.sqrt(50)){
				return false
			}
		}
		return true
	}
}