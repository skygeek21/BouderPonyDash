import {control} from "../control/control.js"

export class view{

#controleur;

constructor(control){
	this.#controleur = control;
	document.addEventListener('keydown', (event) => {
		this.#controleur.movePlayer(event.key);
		this.afficher();
		if(this.#controleur.GetWin()){
			if (confirm("Felicitation vous avez gagné en " + this.#controleur.GetMoves() + " mouvements")) {
				
			}

		}
		// Alert the key name and key code on keydown

	  }, true);
}
afficher(){
	this.afficher_map();
	this.afficher_score();
	confirm
}

afficher_score(){
	let scoreTag = document.querySelector("score");
	let container = scoreTag.querySelector("div");
	let contDiams = container.querySelector("AD")
	contDiams.innerHTML = "Diams Available : " + this.#controleur.GetMaxDiams();
	let score = container.querySelector("CD")
	score.innerHTML = "Diams colected : " + this.#controleur.GetDiams();
	let desp = container.querySelector("MOVES")
	desp.innerHTML = "moves : " + this.#controleur.GetMoves();

}

afficher_map(){


	const mapview = document.querySelector("game"); // affiche la map
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
