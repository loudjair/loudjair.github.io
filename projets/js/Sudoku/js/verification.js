"use strict";
/*
	Vérification des valeurs saisies si elles sont correctes
*/
function verifier(bloc){
	let taille = document.getElementById("grille").children.length;
	if(taille==9 && "123".indexOf(bloc.value)<0){
		alert("entrer un chiffre entre 1 et 3");bloc.value="";
	}
	if(taille==36 && "123456".indexOf(bloc.value)<0){
		alert("entrer un chiffre entre 1 et 6");bloc.value="";
	}
	if(taille==81 && "123456789".indexOf(bloc.value)<0){
		alert("entrer un chiffre entre 1 et 9");bloc.value="";
	}
	if(bloc.style.color == "red")
		bloc.style.color = "";
}
function les_valeurs(taille){
	switch(taille){
		case 3: return ["1","2","3"];
		case 6: return ["1","2","3","4","5","6"];
		case 9: return ["1","2","3","4","5","6","7","8","9"];
	}
}
function verifier_colonne(taille,tab){
	let grille = document.getElementById("grille").children;
	let i , j , val;
	
	for(i = 0; i < taille; i++){
		val = les_valeurs(taille);
		/* Parcourt vers le bas */
		for( j = i ; grille[j] != undefined ; j += taille ){
			if(grille[j].value != ""){
				/*tab c'est pour les occurences*/
				if(grille[j].disabled == false && val.indexOf(grille[j].value) == -1)
					tab.splice(0,0,j);
				else
					val.splice(val.indexOf(grille[j].value),1);
			}
			/* Grille incomplète */
			else
				return 1;
		}
	}
	return 0;
}
function verifier_ligne(taille,tab){
	let grille = document.getElementById("grille").children;
	let i , j , val;
	
	for(i = 0; grille[i] != undefined; i+=taille){
		val = les_valeurs(taille);
		/* Parcourt vers le bas */
		for( j = i ; j < i + taille ; j++ ){
			if(grille[j].value != ""){
				/*tab c'est pour les occurences*/
				if(grille[j].disabled == false && val.indexOf(grille[j].value) == -1 && tab.indexOf(j) == -1)
					tab.splice(0,0,j);
				else
					val.splice(val.indexOf(grille[j].value),1);
			}
			/* Grille incomplète */
			else
				return 1;
		}
	}
	return 0;
}
function case_6(tab){
	let grille = document.getElementById("grille").children;
	let i,x,val;
	for(i = 0; i < 25; i += 12 ){
		val = les_valeurs(6);
		for(x = i; x < i + 3; x++){
			if(grille[x].value != ""){
				/*Tab d'occurences*/
				if(grille[x].disabled == false && val.indexOf(grille[x].value) == -1 && tab.indexOf(x) == -1)
					tab.splice(0,0,x);
				else
					val.splice(val.indexOf(grille[x].value),1);
			}
		}
		for(x = i+6; x < i + 9; x++){
			if(grille[x].value != ""){
				/*Tab d'occurence*/
				if(grille[x].disabled == false && val.indexOf(grille[x].value) == -1 && tab.indexOf(x) == -1)
					tab.splice(0,0,x);
				else
					val.splice(val.indexOf(grille[x].value),1);
			}
		}
		val = les_valeurs(6);
		for(x = i + 3; x < i + 6; x++){
			if(grille[x].value != ""){
				/*Tab d'occurence*/
				if(grille[x].disabled == false && val.indexOf(grille[x].value) == -1 && tab.indexOf(x) == -1)
					tab.splice(0,0,x);
				else
					val.splice(val.indexOf(grille[x].value),1);
			}
		}
		for(x = i + 9; x < i + 12; x++){
			if(grille[x].value != ""){
				/*Tab d'occurence*/
				if(grille[x].disabled == false && val.indexOf(grille[x].value) == -1 && tab.indexOf(x) == -1)
					tab.splice(0,0,x);
				else
					val.splice(val.indexOf(grille[x].value),1);
			}
		}	
	}
}
function case_9(tab){
	let grille = document.getElementById("grille").children;
	let i,x,y,c,val;
	/*
		y : grande ligne qui compose les 3 cases
		i : chaque case qui compose la grille
		c : chaque ligne qui compose chaque case
		x : les indices du chaque block
		val : tableau contenant les valeurs allant de 0 à 9
	*/
	for(y = 0; y < 55; y += 27 ){
		for(i = 0; i < 3; i++){
			val = les_valeurs(9);
			for(c = 0; c < 3; c++){
				for(x = i*3 + c*9 + y; x < i*3 + c*9 + 3 + y; x++){
					if(grille[x].value != ""){
						/*Tab d'occurences*/
						if(grille[x].disabled == false && val.indexOf(grille[x].value) == -1 && tab.indexOf(x) == -1)
							tab.splice(0,0,x);
						else
							val.splice(val.indexOf(grille[x].value),1);
					}					
				}
			}			
		}
	}
}
function valider(){
	let grille = document.getElementById("grille").children;
	if(grille.length>0){
		let tab=[],i,taille;
		switch(grille.length){
			case 9: taille = 3; break;
			case 36: taille = 6; break;
			case 81: taille = 9; break;
		}
		if((verifier_colonne(taille,tab)|verifier_ligne(taille,tab)) == 1)
			alert("Compléter la grille avant de valider");
		else{
			if(taille == 6)
				case_6(tab);
			else if(taille == 9)
				case_9(tab);	
			if(tab.length == 0){
				for(i=0;i<taille*taille;i++){
					grille[i].disabled = true;
					grille[i].style.color="green";
				}
				alert("Félicitation vous avez résolu le sudoku");
			}
			else{
				alert("Dommage vous n'avez pas résolu le sudoku\nmodifier encore la grille");
				for(i=0;i<tab.length;i++){
					grille[tab[i]].style.color="red";
				}
			}
		}
	}
}