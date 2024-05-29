// Wait until the DOM is fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
  // Call the function to fetch and display films when the page is loaded
  getSearchFilms();
});

// fetch and display films
async function getSearchFilms () { 
  // Indicate to the user that the content is loading
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";

  // Fetch film data from the Star Wars API
	const response = await fetch("https://swapi.dev./api/films");
  const movies = await response.json();

  // Clear the loading message
	document.getElementById("info-container").innerHTML = "";

  // Loop through the list of movies and create elements for each one
	for (let i = 0; i < movies.results.length; i++){
	  createMovieElement(movies.results[i]) 
	}
};

// Function to create and display a movie element
function createMovieElement(movie) {

  // Get the container where movie details will be displayed
  const infoContainer = document.getElementById("info-container");

  // Create a new div element
  const movieDiv = document.createElement("div");

  // Set the inner HTML of the div to display the movie details
  movieDiv.innerHTML = 	`
    <h1>${movie.title}</h1>
    <h2>${movie.release_date}</h2>
    <h4>Director: ${movie.director}</h4>
    <h4>Producer: ${movie.producer}</h4>
    <img src="assets/imgs/films/${movie.episode_id}.jpg" alt="Movie poster">
    <p>${movie.opening_crawl}</p>
  `;

  // Append the newly created div to the info container
  infoContainer.appendChild(movieDiv);
}