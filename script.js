//"dummy"-filmer
document.addEventListener('DOMContentLoaded', () => {
   // const filmer = ['Inception', 'The Matrix', 'Interstellar'];
    const ul = document.getElementById('movieList');

    ul.innerHTML = filmer.map(film => `<li>${film}</li>`).join('');
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


    // Funktion för att lägga till en film (uppdaterad med ta bort-knapp)
function laggTillFilm() {
    const inputfält = document.getElementById("filmInmatning");
    const filmTitel = inputfält.value.trim();

    if (filmTitel === "") {
        alert("Du måste skriva en filmtitel!");
        return;
    }

    const lista = document.getElementById("movieList");
    const nyttListelement = document.createElement("li");
    
    // 1. Lägg till filmens text
    nyttListelement.textContent = filmTitel + " ";

    // 2. Skapa själva "Ta bort"-knappen
    const taBortKnapp = document.createElement("button");
    taBortKnapp.textContent = "❌";
    taBortKnapp.style.marginLeft = "10px"; // Ger lite mellanrum mellan text och knapp

    // 3. Ge knappen en funktion som raderar just detta listelement
    taBortKnapp.onclick = function() {
        nyttListelement.remove();
    };

    // 4. Lägg till knappen inuti listelementet, och listelementet i listan
    nyttListelement.appendChild(taBortKnapp);
    lista.appendChild(nyttListelement);

    inputfält.value = "";
}