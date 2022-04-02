import {elements} from "./elements"

class mine{

#map

	constructor(){
		this.#map = new Array(32)
		for( var i = 0;i < 32; i++){
			this.#map[i] = new Array(16);
			for (let y = 0; y < 16; y++) {
				this.#map[i][y] = new elements();
			}
		}
	}

}