//"dummy"-filmer
document.addEventListener('DOMContentLoaded', () => {
    const filmer = ['Inception', 'The Matrix', 'Interstellar'];
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
        resultDiv.textContent = selectedMovie;
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

    // 1. Koppla en händelse (click) till din slumpknapp
document.getElementById("randomButton").addEventListener("click", function() {
    
    // 2. Hämta alla <li>-element inuti din filmlista
    const filmer = document.querySelectorAll("#movieList li");
    
    // 3. Kontrollera att det faktiskt finns filmer i listan
    if (filmer.length === 0) {
        document.getElementById("result").textContent = "Listan är tom! Lägg till en film först.";
        return;
    }
    
    // 4. Generera ett slumpmässigt index baserat på antal filmer
    const slumpIndex = Math.floor(Math.random() * filmer.length);
    
    // 5. Hämta texten från den slumpade filmen
    const valdFilm = filmer[slumpIndex].textContent;
    
    // 6. Visa resultatet i din div på skärmen
    document.getElementById("result").textContent = "Ikväll tittar ni på: " + valdFilm;
});
