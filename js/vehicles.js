document.addEventListener('DOMContentLoaded', function() {

    getSearchVehicles();
  });


async function getSearchVehicles () {
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";
	const response = await fetch("https://swapi.dev./api/vehicles");
  	const vehicles = await response.json();
  	console.log(vehicles.results);
	document.getElementById("info-container").innerHTML = "";
	for (let i = 0; i < vehicles.results.length; i++){
		createVehicleElement(vehicles.results[i]) 
	}
};

function createVehicleElement(vehicle) {
	console.log(vehicle)
    const infoContainer = document.getElementById("info-container");
    const vehicleDiv = document.createElement("div");
    vehicleDiv.innerHTML = 	`
                            <h1>${vehicle.name}</h1>
                            <h2>Made by ${vehicle.manufacturer}</h2>
                            <h4>Crew: ${vehicle.crew}</h4>
                            <h4>Max speed: ${vehicle.max_atmosphering_speed}</h4>
                            <img src="assets/imgs/vehicles/${vehicle.name}.jpg" alt="${vehicle.name}">
                            <p>${vehicle.model}</p>
							`;
    infoContainer.appendChild(vehicleDiv);
}