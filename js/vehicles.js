// Wait until the DOM is fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
  // Call the function to fetch and display vehicles when the page is loaded
  getSearchVehicles();
});

// fetch and display vehicles
async function getSearchVehicles () {
  // Indicate to the user that the content is loading
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";
	
  // Fetch vehicles data from the Star Wars API
  const response = await fetch("https://swapi.dev./api/vehicles");
  const vehicles = await response.json();

  // Clear the loading message
	document.getElementById("info-container").innerHTML = "";

  // Loop through the list of vehicles and create elements for each one
	for (let i = 0; i < vehicles.results.length; i++){
		createVehicleElement(vehicles.results[i]) 
	}
};

// Function to create and display a planet element
function createVehicleElement(vehicle) {

  // Get the container where movie details will be displayed
  const infoContainer = document.getElementById("info-container");
   
  // Create a new div element
  const vehicleDiv = document.createElement("div");

  // Set the inner HTML of the div to display the planet details
  vehicleDiv.innerHTML = 	`
    <h1>${vehicle.name}</h1>
    <h2>Made by ${vehicle.manufacturer}</h2>
    <h4>Crew: ${vehicle.crew}</h4>
    <h4>Max speed: ${vehicle.max_atmosphering_speed}</h4>
    <img src="assets/imgs/vehicles/${vehicle.name}.jpg" alt="${vehicle.name}">
    <p>${vehicle.model}</p>
  `;

  // Append the newly created div to the info container
  infoContainer.appendChild(vehicleDiv);
}