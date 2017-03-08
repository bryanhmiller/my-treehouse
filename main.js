var dinoContainer = document.getElementById("dinoContainer");


function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log(data.length);
	dinoContainer.innerHTML = data.name;
	for (i = 0; i < 81; i++){
		dinoContainer.innerHTML += `<img src="${data.badges[i].icon_url}" alt="badges">`;
	}
}

function executeThisCodeAfterFileFails(){
	console.log("booooo");
}






var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/bryanmiller5.json");
myRequest.send();
