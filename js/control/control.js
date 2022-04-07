import {mine} from "../model/mine.js"
import {view} from "../view/view.js"

export class control{

#view;
#model;

constructor(){
	
	this.#model = new mine();
	this.#view = new view(this);
	this.update();
	
}

async update(filename){
	await this.#model.readfile2("../../LEVEL1")
	console.log(this.#model.map);
	this.#view.afficher();

}

get model() { return this.#model;}

getType(x,y){
	return this.#model.gettype(x,y);}

movePlayer(dir){
switch (dir) {
	case "ArrowRight":
		this.#model.PlayerMoxe(0,1);
		break;
	case "ArrowLeft":
		this.#model.PlayerMoxe(0,-1);
		break;
	case "ArrowDown":
		this.#model.PlayerMoxe(1,0);
		break;
	case "ArrowUp":
		this.#model.PlayerMoxe(-1,0);
		break;
	default:
		break;
}

}

}
