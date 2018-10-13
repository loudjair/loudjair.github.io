"use strict";
function remplir_9(grille,valeurs){
	let i = 0;
	let j,ligne=2; /*ligne a 3 valeurs : 1(1ere ligne),2(2nd ligne) et 3(3eme ligne)*/
	for(;i<9;i++)
		grille[i].value = valeurs.splice(Math.floor(Math.random()*valeurs.length),1)[0];
	while(i<81){
		if(ligne == 1){
			for(j=0;j<9;j++){
				if(j<8)
					grille[i].value = grille[i-26].value;
				else
					grille[i].value = grille[i-35].value;
				i++;
			}
			ligne++;
		}
		else{
			for(j=0;j<9;j++){
				if(j<6)
					grille[i].value = grille[i-6].value;
				else
					grille[i].value = grille[i-15].value;
				i++;
			}
			(ligne==3)?ligne=1:ligne++;
		}
	}
}
function remplir_6(grille,valeurs){
	let i =0;
	let j,ligne=0; /* ligne a 2 valeurs : 0 (paire) et 1 (impaire) */
	/*Initialisation aléatoire de la première ligne*/
	for(;i<6;i++)
		grille[i].value = valeurs.splice(Math.floor(Math.random()*valeurs.length),1)[0];
	while(i<36){
		if(ligne==0){
			for(j=0;j<6;j++){
				if(j<3)
					grille[i].value = grille[i-3].value;
				else
					grille[i].value = grille[i-9].value;
				i++;
			}
			ligne = 1;
		}
		else{
			for(j=0;j<6;j++){
				if(j<5)
					grille[i].value = grille[i-11].value;
				else
					grille[i].value = grille[i-17].value;
				i++;
			}
			ligne = 0;
		}
	}
}
function remplir_3(grille,valeurs){
	let i=0;
	/*Initialisation aléatoire de la première ligne*/
	for(;i<3;i++)
		grille[i].value = valeurs.splice(Math.floor(Math.random()*valeurs.length),1)[0];
	for(;i<9;i++){
		if(i%3 == 0){
			grille[i+2].value=grille[i-3].value; /* pour les indices 5 et 8*/
			grille[i].value=grille[i-2].value;
		}
		else{
			if(!((i-2)%3==0))
				grille[i].value = grille[i-2].value; /* pour les indices 4 et 7*/
		}
	}
}
function finalisation_3(grille){
	let i,somme=0;
	for(i=0;i<9;i++){
		if(Math.floor(Math.random()*3) == 0){
			grille[i].disabled="true";grille[i].style.color="black";++somme;
		}
		else
			grille[i].value = "";
		if(i==8 && somme == 0)
			i = 0;
	}
}
function finalisation(grille,taille){
	let i,val;
	/*Finalisation de la grille*/
	for(i=0;i<grille.length;i++){
		val = Math.floor(Math.random()*taille) ;
		if(val == 0 || val == taille-1 ){
			grille[i].disabled="true";grille[i].style.color="black";
		}
		else
			grille[i].value = "";
	}
}
function remplir(taille){
	let grille = document.getElementById("grille").children;
	let valeurs = ["1","2","3"];
	let i,val;
	for(i=4;i<=taille;i++) /*Ajout de valeurs supplémentaire à la liste*/
		valeurs.splice(i,0,JSON.stringify(i));
	if(taille == 3){
		remplir_3(grille,valeurs);finalisation_3(grille);
	}
	else if(taille == 6){
		remplir_6(grille,valeurs);finalisation(grille,6);
	}
	else{ 
		remplir_9(grille,valeurs);finalisation(grille,9);
	}
}