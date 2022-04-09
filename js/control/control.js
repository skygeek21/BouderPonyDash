import {mine} from "../model/mine.js"
import {view} from "../view/view.js"

export class control{

#view;
#model;

constructor(){
	
	this.#model = new mine();
	this.#view = new view(this);
	this.update(1);
	
}

async update(level){
	await this.#model.readfile2("../../LEVEL" +level,level)
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

}
