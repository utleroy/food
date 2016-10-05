var dogFood = [];

function loadFood () {
	dogFood = JSON.parse(this.response).dog_brands;
	var contentElement = document.getElementById("output");
	var displayDiv = "";
	displayDiv += `<h1>DAWG STUFF</h1>`
	for (var i = 0; i < dogFood.length; i++) {
		var dogFoodLoop = dogFood[i];

		displayDiv += 
		`<div>
		<h2>${dogFoodLoop.name}</h2>
		<hr>
		<h2>${dogFoodLoop.types[0].type}</h2> 
		<h3>${dogFoodLoop.types[0].volumes[0].name}</h3> 
		<h3>$${dogFoodLoop.types[0].volumes[0].price}</h3>
		<h3>${dogFoodLoop.types[0].volumes[1].name}</h3> 
		<h3>$${dogFoodLoop.types[0].volumes[1].price}</h3>
		<h2>${dogFoodLoop.types[1].type}</h2>
		<h3>${dogFoodLoop.types[1].volumes[0].name}</h3> 
		<h3>$${dogFoodLoop.types[1].volumes[0].price}</h3>
		<h3>${dogFoodLoop.types[1].volumes[1].name}</h3> 
		<h3>$${dogFoodLoop.types[1].volumes[1].price}</h3> 
		<hr> 
		</div>`

		contentElement.innerHTML = displayDiv;
	}
	console.log("dogFoodLoop", dogFoodLoop);
}

function loadCatFood () {
	catFood = JSON.parse(this.response).cat_brands;
	var contentCatElement = document.getElementById("cat-output");
	var catDisplayDiv = "";
	var breedsDisplay = "";
	catDisplayDiv += `<h1>CAT STUFF</h1>`
	for (var i = 0; i < catFood.length; i++) {
		var catFoodLoop = catFood[i];
		for (var i = 0; i < catFoodLoop.breeds.length; i++) {
			var breedsLoop = catFoodLoop.breeds[i]
		

		catDisplayDiv += 
		`<div>
		<h2>${catFoodLoop.name}</h2>
		<hr>
		</div>`
		breedsDisplay +=
		`<div>
		<h2>${breedsLoop}</h2>
		</div>`

contentCatElement.innerHTML = catDisplayDiv + breedsDisplay;
	}
}
	console.log("catFoodLoop", catFoodLoop)
}

var catBrandsReq = new XMLHttpRequest();
catBrandsReq.addEventListener("load", loadFood);
catBrandsReq.open("GET", "dogfood.json");
catBrandsReq.send();

var catBrandsReq = new XMLHttpRequest();
catBrandsReq.addEventListener("load", loadCatFood);
catBrandsReq.open("GET", "catfood.json");
catBrandsReq.send();