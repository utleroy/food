var dogFood = [];

function loadFood () {
	dogFood = JSON.parse(this.response).dog_brands;
	var contentElement = document.getElementById("output");
	var displayDiv = "";
	var types = [];
	for (var i = 0; i < dogFood.length; i++) {
		var dogFoodLoop = dogFood[i];

		displayDiv += 
		`<div>
		  <h1>${dogFoodLoop.name}</h1>
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

var dogBrandsReq = new XMLHttpRequest();
dogBrandsReq.addEventListener("load", loadFood);
dogBrandsReq.open("GET", "dogfood.json");
dogBrandsReq.send();