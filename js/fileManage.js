

export class fileManage{

#lvNb
#maps

	constructor(){
		this.scanLevels();
		this.show()
	}
	scanLevels(){
		if(localStorage.getItem("mapManageLevel") == null){
			this.#lvNb = 3
			this.#maps.push(
				[
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
					['M','P','R','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','R','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','R','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M']
				]
				
			);
			this.#maps.push(
				[
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
					['M','Ts','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','R','R','M','M','M','M','M','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','R','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','R','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','R','R','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','T','T','T','T','T','T','M'],
					['M','P','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M']
				]
				
			);
			this.#maps.push(
				[
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','R','R','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','D','T','T','T','T','T','T','T','T','R','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','M','M','M','M','M','M','R','R','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','R','R','M','M','M','M','M','M'],
					['M','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','R','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','R','R','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','T','T','T','T','T','T','M'],
					['M','P','T','T','T','D','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','R','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M']
				]
				
			);
			localStorage.setItem("manageMaps", JSON.stringify(this.#maps));
			localStorage.setItem("mapManageLevel",this.#lvNb);
			}else{
				this.#lvNb = localStorage.getItem("mapManageLevel")
				this.#maps =  JSON.parse(localStorage.getItem("manageMaps"))
			}
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
			inp.id = "Lv" + I
			inp.click;
			btn = document.createElement("button");
			btn.id = "Lv" + I + 'B';
			btn.innerHTML = "X"
			div.innerHTML = ("Lv " + I );
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
