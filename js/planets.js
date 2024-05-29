// Wait until the DOM is fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
  // Call the function to fetch and display planets when the page is loaded
  getSearchPlanets();
});

// fetch and display planets
async function getSearchPlanets () {
  // Indicate to the user that the content is loading
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";

  // Fetch planets data from the Star Wars API
	const response = await fetch("https://swapi.dev./api/planets");
  const planets = await response.json();

  // Clear the loading message
	document.getElementById("info-container").innerHTML = "";

  // Loop through the list of planets and create elements for each one
	for (let i = 0; i < planets.results.length; i++){
		createPlanetElement(planets.results[i]) 
	}
};

// Function to create and display a planet element
function createPlanetElement(planet) {
  
  // Get the container where movie details will be displayed
  const infoContainer = document.getElementById("info-container");

  // Create a new div element
  const planetDiv = document.createElement("div");

  // Set the inner HTML of the div to display the planet details
  planetDiv.innerHTML = 	`
    <h1>${planet.name}</h1>
    <h2>${planet.population} inhabitants</h2>
    <h4>Climate: ${planet.climate}</h4>
    <h4>Diameter: ${planet.diameter}</h4>
    <img src="assets/imgs/planets/${planet.name}.jpg" alt="${planet.name}">
    <p>The tarrain consists of ${planet.terrain}.</p>
  `;

  // Append the newly created div to the info container
  infoContainer.appendChild(planetDiv);
}