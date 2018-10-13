"use strict";

function bordure_3(){
	let grille = document.getElementById("grille").children;
	let i;
	/*Bordure verticale*/
	for(i=0;i<7;i+=3){
		grille[i].style.borderWidth="1px";
		grille[i].style.borderRight="3px solid black";
	}
	for(i=1;i<8;i+=3){
		grille[i].style.borderWidth="1px";
		grille[i].style.borderRight="3px solid black";
	}
	/*Bordure horizontale*/
	for(i=0;i<6;i++){
		if(i==2 || i==5)
			grille[i].style.borderWidth="1px";
		grille[i].style.borderBottom="3px solid black";
	}
}
function bordure_6(){
	let grille = document.getElementById("grille").children;
	let i;
	/*Bordure verticale*/
	for(i=2;i<33;i+=6){
		grille[i].style.borderWidth="1.19px";
		grille[i].style.borderRight="3px solid black";
	}
	/*Bordure horizontale*/
	for(i=6;i<12;i++){
		if(i!=8)
			grille[i].style.borderWidth="1.19px";
		grille[i].style.borderBottom="3px solid black";
	}
	for(i=18;i<24;i++){
		if(i!=20)
			grille[i].style.borderWidth="1.19px";
		grille[i].style.borderBottom="3px solid black";
	}	
}
function bordure_9(){
	let grille = document.getElementById("grille").children;
	let i;
	/*Bordure verticale*/
	for(i=2;i<75;i+=9){
		grille[i].style.borderWidth="1px";
		grille[i].style.borderRight="3px solid black";
	}
	for(i=5;i<78;i+=9){
		grille[i].style.borderWidth="1px";
		grille[i].style.borderRight="3px solid black";
	}
	/*Bordure horizontale*/
	for(i=18;i<27;i++){
		if(i!=20 && i!=23)
			grille[i].style.borderWidth="1px";
		grille[i].style.borderBottom="3px solid black";
	}
	for(i=45;i<54;i++){
		if(i!=47 && i!=50)
			grille[i].style.borderWidth="1px";
		grille[i].style.borderBottom="3px solid black";
	}
}
function bordure(taille){
	if(taille==3){
		bordure_3();
	}
	else if(taille==6){
		bordure_6();
	}
	else
		bordure_9();
}