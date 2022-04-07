
export class mine{

#map
#mapr
	constructor(){
		this.#mapr = false;
		this.initMap();

	}

	initMap(){
		this.#map = ["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
					"MPTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTRTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTDTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTRTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTDTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTT TTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTM",
					"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"]
	}


	

	async readfile2(filename){
	let txt;
	await fetch(filename)
		.then(function(reponse) {
			return reponse.text();
		})
		.then(function(reponse) {
			txt = reponse.split("\n")


		})
		this.#map = txt
	
	}

	get map() { return this.#map;}

	gettype(x,y) {
		return this.#map[x][y]
	}
}