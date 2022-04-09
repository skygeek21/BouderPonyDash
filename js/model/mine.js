
export class mine{

#level
#nbLv
#maps
#map
#playerX
#playerY
#Diams
#move
#maxDiams
#gameOver
#Win
	constructor(){ // on constructeur tout ce qui ya de plus normal
		this.#level = 1;
		this.#nbLv = 3
		this.#Win = false;
		this.#gameOver = false
		this.#move = 0;
		this.#Diams = 0;
		this.#maxDiams = 0;
		this.initMap();

	}

	initMap(){ // verifier si le joueur a une sauvegarde dans son local storage
		this.#maps = [];

		this.#map = Array(16);
		for (let X = 0; X < 16; X++) {
			this.#map[X] = Array(32);
			
		}
		this.#playerX = 1;
		this.#playerY = 1;
		this.#map[1][1] = 'P'

		this.#maps.push(
			[
				['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
				['M','P','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
			]
			
		);
		this.#maps.push(
			[
				['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
				['M','P','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
			]
			
		);
		this.#maps.push(
			[
				['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
				['M','P','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
				['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
			]
			
		);
	}


	async readfile3(filename){ // oui readfile2 ... on ne parlera pas de readfile1. Brrrr... j'ai des frissons rien que d'y pensser ...
		let map;
			let txt;
		var xhr = new XMLHttpRequest();
		xhr.open('HEAD', filename, false);
		xhr.send();
		if(xhr.status == 404){
			location.reload();
		}
		await fetch(filename)
			.then(function(reponse) {
				return reponse.text();
			})
			.then(function(reponse) {
				txt = reponse.split("\n") // je lit les fichier du jeu
			})
	
	
			for (let X = 0; X < 16; X++) {
				for (let Y = 0; Y < 32; Y++) {
					map[X][Y] = txt[X][Y];
				}
				
			}
		return map;
		}

	get map() { return this.#map;}

	gettype(x,y) {
		return this.#map[x][y]
	}
	PlayerMoxe(mx,my){
		if(this.#gameOver) {return;} // la fonction ne fonctionne plus si le joueur est mort ... normal quoi
		if ((this.#playerX + mx >= 0 && this.#playerX + mx < 16) && (this.#playerY + mx >= 0 && this.#playerY + mx < 32)) {
			let map = this.#map;
			const next = this.#map[this.#playerX+mx][this.#playerY+my];
			switch (next) { // on deplace le joueur
				case 'T': // si c'est de la terre ON CASSE LA TERRE
					map[this.#playerX+mx][this.#playerY+my] = 'P'; 
					map[this.#playerX][this.#playerY] = ' ';
					this.#playerX = this.#playerX+mx;
					this.#playerY = this.#playerY+my;
					this.#move++;
					break;
				case 'M': // si c'est un mur ON ! fait rien en fait ...
					
					break;
				case 'P': // ouaip le c'est problematique si ca arrive le joueur est donc bloqué si il se rencontre lui même je laisse ca la
						// beaucoup de fun possible lors de la gen de la map par fichier ^^
					// wtf
					break;
				case 'D': // si c'est un diamant ON VOLE LE DIAMANT
					map[this.#playerX+mx][this.#playerY+my] = 'P'
					map[this.#playerX][this.#playerY] = ' '
					this.#playerX = this.#playerX+mx
					this.#playerY = this.#playerY+my
					this.#Diams ++
					this.#move++;
					break;
				case 'R':
					if (mx == 0 && map[this.#playerX+mx][this.#playerY+(2*my)] == ' ') {
						map[this.#playerX+mx][this.#playerY+(2*my)] = 'R'
						map[this.#playerX+mx][this.#playerY+my] = 'P'
						map[this.#playerX][this.#playerY] = ' '
						this.#playerX = this.#playerX+mx
						this.#playerY = this.#playerY+my
						this.#move++;
					}

					break;
				case ' ': // si c'est un vide on utilise l'acion la plus cheatée du jeu: ON SE DEPLACE
					map[this.#playerX+mx][this.#playerY+my] = 'P'
					map[this.#playerX][this.#playerY] = ' '
					this.#playerX = this.#playerX+mx
					this.#playerY = this.#playerY+my
					this.#move++; 
					break;
				default:
					break;
				}
		}
		this.appliedPhysic();
		if (this.#Diams == this.#maxDiams && !this.#gameOver) { // on declare que le joueur a gagné si il recupére tout les diamants ET si il est toujours en vie
																// possibilitée de se faire écraser par un rocher pendant le même temps de jeu peux probable mais au moins c'est fixed
			console.log("C'est gagné")
			this.#Win = true
			this.#gameOver = true;
		}
	}
	appliedPhysic(){ // bon celle la est un peux en bordel mais alons y
		let move = true
		while (move) {
		move = false	

		for (let X = 0; X < 16; X++) {
			for (let Y = 0; Y <32; Y++) { 
				if(this.#map[X][Y] == 'R'  && this.#map[X+1][Y] == ' ' ){ // en premier lieu on regarde si un rocher est present sous un espace vide
					this.#map[X+1][Y] = 'R';
					this.#map[X][Y] = ' ';

					for(let i = 2 ; X+i < 16; i++){ //ensuite quand un espace vide et detecté on boucle sur toute la ligne sous rocher pour savoir ou il s'arête
						if(this.#map[X+i][Y] == 'P'){ // on regarde si le joueur se fait écraser par le rocher
							console.log("gameOver")
							this.#gameOver = true;
							this.#map[X+i][Y] = 'R';
							this.#map[X+i-1][Y] = ' ';
						}else if(this.#map[X+i][Y] != ' '){ // si il n'y a pas de vide en dessous on arete la boucle
							break;
						}else{
							this.#map[X+i][Y] = 'R'; // sinon on deplace le rocher et on recommence !
							this.#map[X+i-1][Y] = ' ';
						}
					}
					move = true; // utilisé pour les deplacements en chaine (un rocher qui cree un espace vide sous un autre rocher en tombant)
				}
				
			}
		}
			
		}
	}
get move(){return this.#move};
get Diams(){return this.#Diams};
get maxDiams(){return this.#maxDiams};
get Win(){return this.#Win};
get level(){return this.#level};
LoadMap(level){
	this.#level = level;
	this.#Win = false;
	this.#gameOver = false
	this.#move = 0;
	this.#Diams = 0;
	this.#maxDiams = 0;
	if (level > this.#nbLv) {
		location.reload();
	}
	this.#map = this.#maps[level-1]
	for (let X = 0; X < 16; X++) {
		for (let Y = 0; Y < 32; Y++) {

			if(this.#map[X][Y] == 'D'){
				this.#maxDiams++; // je compte le nombre de diamants pour detecter la victoire
			}else if(this.#map[X][Y] == 'P'){// et je determine la position de départ du joueur.
				this.#playerX = X;
				this.#playerY = Y;
			}
		}
		
	}
	console.log(level);
}
}