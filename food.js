var dogFood = [];

function loadFood () {
	dogFood = JSON.parse(this.response).dog_brands;
	var content = document.getElementById("output");
	for (var i = 0; i < dogFood.length; i++) {
		 var dogFoodLoop = dogFood[i];
	}
console.log("dogFoodLoop", dogFoodLoop);
}

var dogBrandsReq = new XMLHttpRequest();
dogBrandsReq.addEventListener("load", loadFood);
dogBrandsReq.open("GET", "dogfood.json");
dogBrandsReq.send();