
export class mine{

#map
#mapr
	constructor(){
		this.#mapr = false;
		this.initMap();
		this.readfile("../../LEVEL1");

	}

	initMap(){
		this.#map = ["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
					"MPTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"]
	}

	async readfile(filename){
		fetch(filename).then((response) => { // on recupère le contenu du fichier
			response.text().then((value) => {
				let x = 0;
				let lines = value.split("\n");
					lines.forEach(line => {
							console.log(line)
							this.#map[x] = line;
						x++
					});
				});
				
			});
		this.#mapr = true;
		console.log(this.#map)
	}

	get map() { return this.#map;}

	gettype(x,y) {
		return this.#map[x][y]}
}