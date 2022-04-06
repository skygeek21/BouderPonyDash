import {elements} from "./elements.js"

export class mine{

#map

	constructor(){
		this.#map = new Array(16)
		for( var i = 0;i < 16; i++){
			this.#map[i] = new Array(32);
			for (let y = 0; y < 32; y++) {
				this.#map[i][y] = new elements();
			}
		}
	}

	get map() { return this.#map;}

}