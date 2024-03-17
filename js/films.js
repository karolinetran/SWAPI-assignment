document.addEventListener('DOMContentLoaded', function() {

    getSearchFilms();
  });

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
                            <h2>${movie.release_date}</h2>
                            <h4>Director: ${movie.director}</h4>
                            <h4>Producer: ${movie.producer}</h4>
                            <img src="assets/imgs/films/${movie.episode_id}.jpg" alt="Movie poster">
                            <p>${movie.opening_crawl}</p>
							`;
    infoContainer.appendChild(movieDiv);
}