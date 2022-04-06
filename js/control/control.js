import {mine} from "../model/mine.js"
import {view} from "../view/view.js"

export class control{

#view;
#model;

constructor(){
	this.#model = new mine();
}

get model() { return this.#model;}


}