document.addEventListener('DOMContentLoaded', function() {

    getSearchPeople();
  });


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
                            <h2>Year of birth: ${person.birth_year}</h2>
                            <h4>Gender: ${person.gender}</h4>
                            <h4>Height: ${person.height}</h4>
                            <img src="assets/imgs/people/${person.name}.jpg" alt="${person.name}">
                            <p>Appears in ${person.films.length} film(s).</p>
							`;
    infoContainer.appendChild(personDiv);
}