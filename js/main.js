import {control} from "./control/control.js"
import {fileManage} from "./fileManage.js"
import {view} from "./view/view.js"

class main{

	#control
	#manage
	#view

	constructor()
	{

	}



	lauchManage(){
		this.#manage = new fileManage();
	}

	lauchGame(newGame){
		this.#control = new control();
		console.log(localStorage.getItem("newGame"))
		console.log(newGame)
		if(newGame == 11){
			console.log("HI");
		this.#control.getProgress();
		}else{
		this.#control.update(1);
		}
	}

}

const m = new main();
	
window.addEventListener("load", () => {

	switch (document.body.id) {
		case "home":
			var btnN = document.getElementById("newPart")
			btnN.onclick = function() {
				localStorage.setItem("newGame", 0);
				window.location.href = './game.html';
								
		};
			var btnC = document.getElementById("continue")
			btnC.onclick = function() { 
				localStorage.setItem("newGame", 11);
				window.location.href = './game.html';};
			break;

		case "swlvl":
			m.lauchManage();
			break;
		case "game":
				m.lauchGame(localStorage.getItem("newGame"));
			break;
		default:
			break;
	}

})