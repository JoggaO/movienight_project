const movies = [];

function movieRating(index, isUpvoted)
{
    const change = isUpvoted ? 1 : -1;
    const movie = movies[index];
    if (movie.rating === "unrated")
    {
        movie.rating = change;
    }
    else
    {
        movie.rating += change;
    }    
}

function renderMovies()
{
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    movies.forEach((movie, index) =>
    {
    const li = document.createElement("li");

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    const textSpan = document.createElement("span");

    textSpan.textContent = `${movie.title} - Betyg: ${movie.rating}`;
    li.appendChild(textSpan);

    const upBtn = document.createElement("button");
    upBtn.textContent = " +1";
    upBtn.style.width = "auto";
    upBtn.onclick = () => 
    {
        movieRating(index, true);
        renderMovies();
    };

    const downBtn = document.createElement("button");
    downBtn.textContent = " -1";
    downBtn.style.width = "auto";
    downBtn.onclick = () => 
    {
        movieRating(index, false);
        renderMovies();
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.width = "auto";
    deleteButton.onclick = () =>
    {
        movies.splice(index, 1);
        renderMovies();
    };

    li.append(upBtn, downBtn, deleteButton);
    movieList.appendChild(li);
    });
}

//"dummy"-filmer
document.addEventListener('DOMContentLoaded', () => {
    movies.push(
        {title:'Inception', rating: "unrated"},
        {title:'The Matrix', rating: "unrated"},
        {title:'Interstellar', rating: "unrated"})
    renderMovies();
});
//Slut "dummy"-filmer


// Slumpa en film
// Välj och returnera en filmtext
// 1. Function to select a random movie
document.getElementById("randomButton").addEventListener("click", function() 
{
    const resultDisplay = document.getElementById("result");

    if (movies.length === 0)
    {
        resultDisplay.textContent = "The list is empty! Please add a movie first.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex].title;
    resultDisplay.textContent = "Your random movie is: " + selectedMovie;

});

// 2. Function to add a new movie to the list
function addMovie()
{
    const inputField = document.getElementById("filmInmatning"); // Keep HTML ID or change in index.html too
    const movieTitle = inputField.value.trim();

    // Validate input
    if (movieTitle === "") {
        alert("You must enter a movie title!");
        return;
    }

    movies.push({title: movieTitle, rating: "unrated"});
    
    renderMovies();
    inputField = "";
    document.getElementById("result").textContent = "";
    // Style the list item to keep text and button on the same line
    
}

