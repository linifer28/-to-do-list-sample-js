let inpDiv = document.querySelectorAll('#inpDiv')
	inpDiv = inpDiv[0]

let toDoList = document.querySelectorAll('#toDoList')
	toDoList = toDoList[0]	

let ul = document.querySelectorAll('ul')
	ul = ul[0]	

let tplInp = `
			<input type="text" name="item" ><button type="button" onclick="agregarItem()">Agregar</button>
	`	
		inpDiv.innerHTML = tplInp

let input = document.querySelectorAll('input')
input = input[0]

let isEdit = ""
let idAleatoria = ''
	

let agregarItem	= function() {
	let genList = document.querySelectorAll('li span')
	let duplicado = false
	let idAsignada = document.querySelectorAll('#idAsignada')
		
		if (!isEdit)	{
			for (let i = genList.length - 1; i >= 0; i--) {
				let itemLista = genList[i]

				if(itemLista.innerText == input.value){
					duplicado = true
					alert("Item ya existente")
					break
				}
			}
				
				if (!duplicado && input.value !="") {
					
					idAleatoria =  Math.floor( Math.random() * 10000000 )

					let tplLi = `
						<li>
							<span id="valorItem">${input.value}</span>
							<button type="button" class="edit" onclick="editItem(${idAleatoria})">Editar</button>
							<button type="button" class="delete" onclick="deleteItem('${input.value}')">Eliminar</button>
							<span id="idAsignada">${idAleatoria}</span>
						</li>	
			
					`
					
					ul.innerHTML += tplLi	

				}
				if (input.value == "") {
					alert("Debe ingresar texto") 
					return false
				}	
				
				let li = document.querySelectorAll('li')
				
				li.id = idAleatoria
				input.value = ''
			}
		
		else {
			editItem(idAleatoria)	
		}
	}
		
		

let editItem = function(idAleatoria) {
			
			if (!isEdit) {
				genIdList = document.querySelectorAll('#idAsignada')
				genItems = document.querySelectorAll('#valorItem')
				
			
				for (let i = genIdList.length - 1; i >= 0; i--) {
					itemGen = genIdList[i];
					genItemValue = genItems[i];

					if(itemGen.innerText == idAleatoria){
						input.value = genItemValue.innerText
						isEdit = true
						document.querySelectorAll(#(itemGen))[0].outerHTML = li 
						break
					}

				}
				console.log("idAleatoria editada:", idAleatoria)
				return idAleatoria	 
			}	
				
			else {

				if(itemGen.innerText == idAleatoria){
					genItemValue.innerText = input.value
					}
					
			}	
}			
	
let deleteItem = function(item) {
	let genList = document.querySelectorAll('li')
		for (let i = genList.length - 1; i >= 0; i--) {
			let itemGen = genList[i];

			if(itemGen.firstElementChild.innerText == item){
					genList[i].outerHTML = ''
				}
		}
}
