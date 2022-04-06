import {control} from "./control/control.js"
import {view} from "./view/view.js"

class main{

	#control

	#view

	constructor()
	{
		this.#control = new control();
		this.#view = new view(this.#control);
	}

}

	
window.addEventListener("load", () => {
	const m = new main();
})