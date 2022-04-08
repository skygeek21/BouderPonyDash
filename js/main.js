import {control} from "./control/control.js"
import {view} from "./view/view.js"

class main{

	#control

	#view

	constructor()
	{
		this.#control = new control();
	}

}

	
window.addEventListener("load", () => {
	const m = new main();
})