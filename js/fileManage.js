

export class fileManage{

#lvNb
#control

	constructor(controler){
		this.#control = controler
		this.scanLevels();
		this.show()
		this.delFile("../testfile")

	}
	scanLevels(){
		let cnt = 0;
		let filename = "../LEVEL"
		let xhr;
		do {
			cnt ++;
			xhr = new XMLHttpRequest();
			xhr.open('HEAD', filename + cnt, false);
			xhr.send();
		} while (xhr.status != 404);
		this.#lvNb = cnt -1;
		console.log(this.#lvNb);
	}
	show(){
		let array = document.getElementsByClassName("menu")
		let menu = array[0];
		let div;
		let btn;
		let inp;
		for (let I = 1; I <= this.#lvNb ; I++) {
			div = document.createElement("div");
			inp = document.createElement("input");
			inp.type = "file"
			inp.click;
			btn = document.createElement("button");
			btn.className = "Lv" + I;
			btn.innerHTML = "X"
			div.innerHTML = ("Lv " + I);
			div.appendChild(inp);
			div.appendChild(btn);
			menu.appendChild(div);
			
		}
		btn = document.createElement("button");
			div = document.createElement("div");
			div.innerHTML = "Nouveau Niveau"
			inp = document.createElement("input");
			inp.type = "file"
			inp.click();
			div.appendChild(inp)
			menu.appendChild(div);
	}

}
