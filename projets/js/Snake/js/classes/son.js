"use strict";
class Son{
	constructor(nom){
		this.son = document.getElementById(nom)
	}
	jouer(){
		this.son.play()
	}
	pause(){
		this.son.pause()
	}
	temps_courant(){
		return this.son.currentTime
	}
}