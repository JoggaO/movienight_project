//"dummy"-filmer
document.addEventListener('DOMContentLoaded', () => {
   // const filmer = ['Inception', 'The Matrix', 'Interstellar'];
    const ul = document.getElementById('movieList');

    ul.innerHTML = filmer.map(film => `<li>${film}</li>`).join('');
});
//Slut "dummy"-filmer


// Slumpa en film
// Välj och returnera en filmtext
// 1. Function to select a random movie
document.getElementById("randomButton").addEventListener("click", function() {
    const movies = document.querySelectorAll("#movieList li");
    const resultDisplay = document.getElementById("result");
    
    // Check if the list is empty
    if (movies.length === 0) {
        resultDisplay.textContent = "The list is empty! Please add a movie first.";
        return;
    }
    
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * movies.length);
    
    // Get only the movie title text (ignore the delete button)
    const selectedMovie = movies[randomIndex].firstChild.textContent.trim();
    
    // Display the result
    resultDisplay.textContent = "Your random movie is: " + selectedMovie;
});

// 2. Function to add a new movie to the list
function addMovie() {
    const inputField = document.getElementById("filmInmatning"); // Keep HTML ID or change in index.html too
    const movieTitle = inputField.value.trim();

    // Validate input
    if (movieTitle === "") {
        alert("You must enter a movie title!");
        return;
    }

    const movieList = document.getElementById("movieList");
    const newListItem = document.createElement("li");
    
    // Style the list item to keep text and button on the same line
    newListItem.style.display = "flex";
    newListItem.style.alignItems = "center";
    newListItem.style.gap = "10px";
    newListItem.style.marginBottom = "5px";

    // Add the movie title text
    const textNode = document.createTextNode(movieTitle);
    newListItem.appendChild(textNode);

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    // Adjust button size
    deleteButton.style.width = "auto";
    deleteButton.style.height = "auto";
    deleteButton.style.padding = "2px 6px";
    deleteButton.style.fontSize = "12px";
    deleteButton.style.display = "inline-block";

    // Add delete functionality
    deleteButton.onclick = function() {
        newListItem.remove();
    };

    // Append button to item, and item to list
    newListItem.appendChild(deleteButton);
    movieList.appendChild(newListItem);

    // Clear input field
    inputField.value = "";

    // Clear the random result message when a new movie is added
    document.getElementById("result").textContent = "";
}
