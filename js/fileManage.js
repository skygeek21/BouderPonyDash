export class fileManage{

#lvNb
maps

	constructor(){
		this.scanLevels();
		this.show()
		this.setInput();
	}
	scanLevels(){
		if(localStorage.getItem("mapManageLevel") == null){
			this.#lvNb = 3
			this.maps = []
			this.maps.push(
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
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','D','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M']
				]
				
			);
			this.maps.push(
				[
					['M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M','M'],
					['M','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','M'],
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
			this.maps.push(
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
			localStorage.setItem("manageMaps", JSON.stringify(this.maps));
			localStorage.setItem("mapManageLevel",this.#lvNb);
			console.log(this.maps)
			console.log(JSON.parse(JSON.stringify(this.maps)))
			}else{
				this.#lvNb = localStorage.getItem("mapManageLevel")
				this.maps =  JSON.parse(localStorage.getItem("manageMaps"))
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
			inp.id = "NewLevel"

			div.appendChild(inp)
			menu.appendChild(div);
	}

	setInput(){
		for (let I = 1; I <= this.#lvNb; I++) {
			console.log(I)
			const fileSelector = document.getElementById('Lv'+I); 
			fileSelector.addEventListener('change', (event) => {
				 
			var fr=new FileReader();
			fr.readAsText(event.target.files[0]);
			let obj = this
			fr.onload=function(){
				console.log(obj.maps);
				obj.maps[I-1] = txtToMap(fr.result);
				console.log(obj.maps);
				obj.update();
			}

			});
			
		}
		const fileSelector = document.getElementById("NewLevel"); 
		fileSelector.addEventListener('change', (event) => {
			 
		var fr=new FileReader();
		fr.readAsText(event.target.files[0]);
		fr.onload=function(){

			this.#lvNb++
			this.maps.push(txtToMap(fr.result));
			this.update();
		}



	});


	}

	update(){
		localStorage.setItem("manageMaps", JSON.stringify(this.maps));
		localStorage.setItem("mapManageLevel",this.#lvNb);
		//document.location.href="./chgniv.html"; 
	}

	onLoadLevel(){
		this.maps[I-1] = txtToMap(fr.result);
		this.update();

	}

}

function txtToMap(text){

	let Text = new String(text);
	console.log(text);
	let txt = Text.split("\n") // je lit les fichier du jeu
	console.log(txt);
	
	let map = Array(16);
		for (let X = 0; X < 16; X++) {
			map[X]= Array(32)
			for (let Y = 0; Y < 32; Y++) {
				map[X][Y] = txt[X][Y];
			}
			
		}

	return map;
	}
