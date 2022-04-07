import {control} from "../control/control.js"

export class view{

#controleur;

constructor(controle){
	this.#controleur = controle;
}

afficher(){


const mapview = document.querySelector("game");
mapview.innerHTML = "";
for( var i = 0;i < 16; i++){
	const linehtml = document.createElement("div");
	for (let y = 0; y < 32; y++) {
		const elemhtml = document.createElement("img");

			switch (this.#controleur.getType(i,y)) {
				case 'T':
					elemhtml.src = "../../img/terre.png";
					break;
				case 'M':
					elemhtml.src = "../../img/mur.gif";
					break;
				case 'P':
					elemhtml.src = "../../img/pony-town-Yeralda-stand-blinking-4x(1).gif";
					break;
				case 'D':
					elemhtml.src = "../../img/diams.png";
					break;
				case 'R':
					elemhtml.src = "../../img/cayou.png";
					break;
				case ' ':
					elemhtml.src = "../../img/vide.png";
					break;
				default:
					break;
			}
		linehtml.appendChild(elemhtml);
	}
	mapview.appendChild(linehtml);
}

}

}
