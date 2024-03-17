document.addEventListener('DOMContentLoaded', function() {

    getSearchPlanets();
  });

async function getSearchPlanets () {
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";
	const response = await fetch("https://swapi.dev./api/planets");
  	const planets = await response.json();
  	console.log(planets.results);
	document.getElementById("info-container").innerHTML = "";
	for (let i = 0; i < planets.results.length; i++){
		createPlanetElement(planets.results[i]) 
	}
};

function createPlanetElement(planet) {
	console.log(planet)
    const infoContainer = document.getElementById("info-container");
    const planetDiv = document.createElement("div");
    planetDiv.innerHTML = 	`
                            <h1>${planet.name}</h1>
                            <h2>${planet.population} inhabitants</h2>
                            <h4>Climate: ${planet.climate}</h4>
                            <h4>Diameter: ${planet.diameter}</h4>
                            <img src="assets/imgs/planets/${planet.name}.jpg" alt="${planet.name}">
                            <p>The tarrain consists of ${planet.terrain}.</p>
							`;
    infoContainer.appendChild(planetDiv);
}