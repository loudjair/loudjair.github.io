"use strict";

function navigateur(){
	let nav = navigator.userAgent;
	/*Les différents navigateurs*/
	let chrome = nav.indexOf("Chrome")&&nav.indexOf("Safari");
	let edge = nav.indexOf("Edge");
	let ie = nav.indexOf("MSIE");
	let mozilla = nav.indexOf("Firefox");

	if(mozilla > -1)
		return 0; /* Le navigateur est mozilla*/
	if(ie > -1)
		return 1; /* Le navigateur est internet explorer*/
	if(chrome > -1){
		if(edge > -1)
			return 2; /* Le navigateur est edge*/
		else
			return 3; /* Le navigateur est chrome*/
	}
}

/*Pour centrer les boutons sur le navigateurs Chrome*/
/* 0%: top,bottom & 40%: left,right*/
function initialiser_bouton(){
	let boutons = ["1","2","3"];
	let x;
	for(x = 0; x < 3; x++){
		if(navigateur()==3){
			document.getElementById(boutons[x]).style.margin="0% 40%";
		}
		if(navigateur()==0){
			document.getElementById(boutons[x]).checked=false;
		}
	}
}