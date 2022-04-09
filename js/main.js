import {control} from "./control/control.js"
import {fileManage} from "./fileManage.js"
import {view} from "./view/view.js"

class main{

	#control
	#manage
	#view

	constructor()
	{
		this.#control = new control();
	}

	lauchManage(){
		this.#manage = new fileManage();
	}

	lauchGame(){
		this.#control.update(1);
	}

}

const m = new main();

console.log("coucou");
	
window.addEventListener("load", () => {

	switch (document.body.id) {
		case "home":
			var btnN = document.getElementById("newPart")
			btnN.onclick = function() { window.location.href = './game.html';
				
				m.lauchGame();								
		};
			var btnC = document.getElementById("newPart")
			btnC.onclick = function() { window.location.href = './game.html';};
			break;

		case "swlvl":
			m.lauchManage();
			break;
		case "game":

			break;
		default:
			break;
	}

})