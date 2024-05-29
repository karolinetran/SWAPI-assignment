// Wait until the DOM is fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
  // Call the function to fetch and display people when the page is loaded
  getSearchPeople();
});

// fetch and display people
async function getSearchPeople () {
  // Indicate to the user that the content is loading
	document.getElementById("info-container").innerHTML = "<p>Loading...</p>";
	
  // Fetch people data from the Star Wars API
  const response = await fetch("https://swapi.dev./api/people");
  const people = await response.json();

  // Clear the loading message
	document.getElementById("info-container").innerHTML = "";

  // Loop through the list of people and create elements for each one
	for (let i = 0; i < people.results.length; i++){
		createPeopleElement(people.results[i]) 
	}
};

// Function to create and display a people element
function createPeopleElement(person) {

  // Get the container where people details will be displayed
  const infoContainer = document.getElementById("info-container");
  
  // Create a new div element
  const personDiv = document.createElement("div");

  // Set the inner HTML of the div to display the people details
  personDiv.innerHTML = 	`
    <h1>${person.name}</h1>
    <h2>Year of birth: ${person.birth_year}</h2>
    <h4>Gender: ${person.gender}</h4>
    <h4>Height: ${person.height}</h4>
    <img src="assets/imgs/people/${person.name}.jpg" alt="${person.name}">
    <p>Appears in ${person.films.length} film(s).</p>
  `;

  // Append the newly created div to the info container
  infoContainer.appendChild(personDiv);
}