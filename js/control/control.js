import {mine} from "../model/mine"
import {view} from "../view/view"

class control{

#view
#model

constructor(){
	this.#view = new view();
	this.#model = new mine();
}

}