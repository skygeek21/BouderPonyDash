import {elements} from "./elements"

class mine{

#map

	constructor(){
		this.#map = new Array(60)
		for( var i = 0;i < 60; i++){
			this.#map[i] = new Array(30);
			for (let y = 0; y < 30; y++) {
				this.#map[i][y] = new elements();
			}
		}
	}

}