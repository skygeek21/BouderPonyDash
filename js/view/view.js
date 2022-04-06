import {control} from "../control/control.js"

export class view{

#controleur;

constructor(control){
	this.#controleur = control;
	this.afficher();
}

afficher(){
const mine = this.#controleur.model;
const mapview = document.querySelector("game");
mapview.innerHTML = "";

mine.map.forEach((line) => {
	const linehtml = document.createElement("div");
	line.forEach(element => {
		const elemhtml = document.createElement("img");
		elemhtml.src = "../../img/diams.png";
		linehtml.appendChild(elemhtml);
	});
	mapview.appendChild(linehtml);
});

}

}