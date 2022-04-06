
export class mine{

#map

	constructor(){
		this.initMap();
		this.readfile("../../LEVEL1");

	}

	initMap(){
		this.#map = new Array(16)
		for( var i = 0;i < 16; i++){
			this.#map[i] = new Array(32);
			for (let y = 0; y < 32; y++) {
				this.#map[i][y] = 'M'
			}
		}
	}

	readfile(filename){
		fetch(filename).then((response) => { // on recupère le contenu du fichier
			response.text().then((value) => {
				let x = 0;
				let lines = value.split("\n");
					lines.forEach(line => {
						for(let y = 0; y < 32; y++){
							this.#map[x][y] = line[y];
						}
						x++
					});
				});
				
			});
	}

	get map() { return this.#map;}

	gettype(x,y) {
		console.log(this.#map)
		return this.#map[x][y]}
}