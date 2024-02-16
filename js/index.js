

// Movies

async function getSearchFilms () { 
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";
	const response = await fetch("https://swapi.dev./api/films");
  	const movies = await response.json();
  	console.log(movies.results);
	document.getElementById("info-container").innerHTML = "";
	for (let i = 0; i < movies.results.length; i++){
		createMovieElement(movies.results[i]) 
	}
};

function createMovieElement(movie) {
	console.log(movie)
    const infoContainer = document.getElementById("info-container");
    const movieDiv = document.createElement("div");
    movieDiv.innerHTML = 	`
							<h1>${movie.title}</h1>
							`;
    infoContainer.appendChild(movieDiv);
}


// People

async function getSearchPeople () {
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";
	const response = await fetch("https://swapi.dev./api/people");
  	const people = await response.json();
  	console.log(people.results);
	document.getElementById("info-container").innerHTML = "";
	for (let i = 0; i < people.results.length; i++){
		createPeopleElement(people.results[i]) 
	}
};

function createPeopleElement(person) {
	console.log(person)
    const infoContainer = document.getElementById("info-container");
    const personDiv = document.createElement("div");
    personDiv.innerHTML = 	`
							<h1>${person.name}</h1>
							`;
    infoContainer.appendChild(personDiv);
}

// Planets

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
							`;
    infoContainer.appendChild(planetDiv);
}

 // Vehicles
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
							`;
    infoContainer.appendChild(vehicleDiv);
}