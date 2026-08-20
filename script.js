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
    li.textContent = `${movie.title} - Betyg: ${movie.rating}`;

    const upBtn = document.createElement("button");
    upBtn.textContent = " +1";
    upBtn.onclick = () => 
    {
        movieRating(index, true);
        renderMovies();
    };

    const downBtn = document.createElement("button");
    downBtn.textContent = " -1";
    downBtn.onclick = () => 
    {
        movieRating(index, false);
        renderMovies();
    };

    li.append(upBtn);
    li.append(downBtn);
    movieList.appendChild(li);
    });

}

//"dummy"-filmer
document.addEventListener('DOMContentLoaded', () => {
    const filmer = ['Inception', 'The Matrix', 'Interstellar'];
    const ul = document.getElementById('movieList');

    ul.innerHTML = filmer.map(film => `<li>${film}</li>`).join('');
    movies.push({title:'Inception', rating: "unrated"}, {title:'The Matrix', rating: "unrated"}, {title:'Interstellar', rating: "unrated"})
    renderMovies();
});
//Slut "dummy"-filmer


// Slumpa en film
// Välj och returnera en filmtext
function getRandomMovieText() {
    const movies = document.querySelectorAll('#movieList li');
    if (movies.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex].textContent;
    
}

const button = document.getElementById('randomButton');

button.addEventListener('click', () => {
    const selectedMovie = getRandomMovieText();
    const resultDiv = document.getElementById('result');

    if (selectedMovie) {
        resultDiv.textContent = "Din random film är" + selectedMovie;
    } else {
        resultDiv.textContent = "Listan är tom!";
    }
});

// SLUT Slumpa en film
function laggTillFilm() {
            // 1. Hämta texten från textfältet
            const inputfält = document.getElementById("filmInmatning");
            const filmTitel = inputfält.value.trim();

            // 2. Validera att fältet inte är tomt
            if (filmTitel === "") {
                alert("Du måste skriva en filmtitel!");
                return;
            }

            // 3. Hämta den befintliga listan (ul)
            const lista = document.getElementById("movieList");

            // 4. Skapa ett nytt listelement (li)
            const nyttListelement = document.createElement("li");
            nyttListelement.textContent = filmTitel;

            // 5. Lägg till det nya elementet i listan
            lista.appendChild(nyttListelement);

            // 6. Töm textfältet för nästa inskrivning
            inputfält.value = "";
        }
