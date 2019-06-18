/*
	Fonctions qui permettent d'afficher et de cacher à chaque fois
	que le curseur de la souris passe par dessous ou quitte le projet
*/
function afficher(projet){
	projet.children[1].style.display="initial"
}
function cacher(projet){
	projet.children[1].style.display="none"
}
function afficher_doc(doc){
	let id = JSON.stringify(doc);
	let i;
	taille = tab_doc.length;
	for(i = 0; i < taille ; i++){
		document.getElementById(tab_doc[i]).style.display="none";
	}
	tab_doc = [];
	document.getElementById(id).style.transition="0.5s ease";
	document.getElementById(id).style.display="initial";

	tab_doc.push(id);
}