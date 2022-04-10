import {mine} from "../model/mine.js"
import {view} from "../view/view.js"

export class control{

#view;
#model;

constructor(){
	
	this.#model = new mine();
	this.#view = new view(this);

}

async update(level){
	await this.#model.LoadMap(level)
	this.#view.afficher();

}

get model() { return this.#model;}

getType(x,y){
	return this.#model.gettype(x,y);}

movePlayer(dir){
switch (dir) {
	case "d":
		this.#model.PlayerMoxe(0,1);
		break;
	case "q":
		this.#model.PlayerMoxe(0,-1);
		break;
	case "s":
		this.#model.PlayerMoxe(1,0);
		break;
	case "z":
		this.#model.PlayerMoxe(-1,0);
		break;
	default:
		break;
}

}

GetMaxDiams(){
	return this.#model.maxDiams;
}

GetMoves(){
	return this.#model.move;
}

GetDiams(){
	return this.#model.Diams;
}

GetWin(){return this.#model.Win;}

NextLevel(){
	let level = this.#model.level; 
	level++;
	this.update(level)

}

getProgress(){
	if(localStorage.getItem("ProgressLevel") != null){
		this.#model.level = localStorage.getItem("ProgressLevel")
		this.#model.map = localStorage.getItem("ProgressMap")
		this.#model.move = localStorage.getItem("ProgressMove")
		this.#model.Diams = localStorage.getItem("ProgressCDiams")
		this.#model.maxDiams = localStorage.getItem("ProgressTotDiams")
		this.#view.afficher()
		console.log("SALUT")
	}else{
		this.update(1)
	}

}
}