
export class mine{

#map
#playerX
#playerY
#gameOver
	constructor(){
		this.#gameOver = false
		this.initMap();

	}

	initMap(){
		this.#map = Array(16);
		for (let X = 0; X < 16; X++) {
			this.#map[X] = Array(32);
			
			
		}
		this.#playerX = 1;
		this.#playerY = 1;
		this.#map[1][1] = 'P'
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


		for (let X = 0; X < 16; X++) {
			for (let Y = 0; Y < 32; Y++) {
				this.#map[X][Y] = txt[X][Y];
				
			}
			
		}


		for(let x = 0; x<16;x++){
			for (let y = 0; y < 32; y++) {
				if (this.#map[x][y] == 'P'){
					this.#playerX = x;
					this.#playerY = y;
				}
				
			}
		}
	
	}

	get map() { return this.#map;}

	gettype(x,y) {
		return this.#map[x][y]
	}
	PlayerMoxe(mx,my){
		if(this.#gameOver) {return;}
		if ((this.#playerX + mx >= 0 && this.#playerX + mx < 16) && (this.#playerY + mx >= 0 && this.#playerY + mx < 32)) {
			let map = this.#map;
			const next = this.#map[this.#playerX+mx][this.#playerY+my];
			switch (next) { // on deplace le joueur
				case 'T':
					map[this.#playerX+mx][this.#playerY+my] = 'P';
					map[this.#playerX][this.#playerY] = ' ';
					this.#playerX = this.#playerX+mx;
					this.#playerY = this.#playerY+my;
					break;
				case 'M':
					
					break;
				case 'P':
					// wtf
					break;
				case 'D':
					map[this.#playerX+mx][this.#playerY+my] = 'P'
					map[this.#playerX][this.#playerY] = ' '
					this.#playerX = this.#playerX+mx
					this.#playerY = this.#playerY+my
					break;
				case 'R':
					if (mx == 0 && map[this.#playerX+mx][this.#playerY+(2*my)] == ' ') {
						map[this.#playerX+mx][this.#playerY+(2*my)] = 'R'
						map[this.#playerX+mx][this.#playerY+my] = 'P'
						map[this.#playerX][this.#playerY] = ' '
						this.#playerX = this.#playerX+mx
						this.#playerY = this.#playerY+my
					}

					break;
				case ' ':
					map[this.#playerX+mx][this.#playerY+my] = 'P'
					map[this.#playerX][this.#playerY] = ' '
					this.#playerX = this.#playerX+mx
					this.#playerY = this.#playerY+my
					break;
				default:
					break;
				}
		}
		this.appliedPhysic();
	}
	appliedPhysic(){
		for (let X = 0; X < 16; X++) {
			for (let Y = 0; Y <32; Y++) {
				if(this.#map[X][Y] == 'R'  && this.#map[X+1][Y] == ' ' ){
					this.#map[X+1][Y] = 'R';
					this.#map[X][Y] = ' ';
					for(let i = 2 ; X+i < 16; i++){
						if(this.#map[X+i][Y] == 'P'){
							console.log("gameOver")
							this.#gameOver = true;
							this.#map[X+i][Y] = 'R';
							this.#map[X+i-1][Y] = ' ';
						}if(this.#map[X+i][Y] != ' '){
							break;
						}else{
							this.#map[X+i][Y] = 'R';
							this.#map[X+i-1][Y] = ' ';
						}
					}
				}
				
			}
			
		}
		console.log(this.#map)
	}
}