"use strict";
/*
	Configuration stylistique de l'affichage de la grille
	@taille, la taille de la grille

*/
function css_grid(taille){

	let grille = document.getElementById("css-grille");
	let i;
	let police = " "+JSON.stringify(450/taille/2)+"px;\ntext-align:center;}";
	let taille_colonne =" "+JSON.stringify(450/taille)+"px";

	grille.innerHTML = "#grille{grid-template-columns: ";
	for(i=0;i<taille;i++){
		grille.innerHTML +=taille_colonne;
	}
	grille.innerHTML +=";}\n#grille>input{font-size:"+police;
}


/*
	Parametrage de la grille, avec la configuration de son css,
	et un remplissage aléatoire de la grille

	@taille , la taille de la grille

*/

function parametrer(taille){
	let grille =document.getElementById("grille");
	if(grille.children.length==0){
		taille = Number(taille);
		css_grid(taille);
		let i;
		let cases = "<input type=\"text\" maxlength=\"1\" oninput=\"verifier(this)\">";
		for (i=0;i < taille*taille; i++) {
			grille.innerHTML += cases;
		}
		/* la fct bordure va configurer le style des bordures des inputs*/
		bordure(taille);
		/* Remplissage aléatoire de la grille*/
		remplir(taille);
	}
}