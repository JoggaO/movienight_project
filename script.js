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
        resultDiv.textContent = "Din random film är " + selectedMovie;
    } else {
        resultDiv.textContent = "Listan är tom!";
    }
});


    // Funktion för att lägga till en film (med mindre knapp på samma rad)
function laggTillFilm() {
    const inputfält = document.getElementById("filmInmatning");
    const filmTitel = inputfält.value.trim();

    if (filmTitel === "") {
        alert("Du måste skriva en filmtitel!");
        return;
    }

    const lista = document.getElementById("movieList");
    const nyttListelement = document.createElement("li");
    
    // 1. Gör så att listelementet använder Flexbox för att lägga allt på en rad
    nyttListelement.style.display = "flex";
    nyttListelement.style.alignItems = "center";
    nyttListelement.style.gap = "10px"; // Ger ett lagom mellanrum mellan text och knapp
    nyttListelement.style.marginBottom = "5px"; // Lite mellanrum till nästa film

    // 2. Lägg till filmens text
    const textNod = document.createTextNode(filmTitel);
    nyttListelement.appendChild(textNod);

    // 3. Skapa själva "Ta bort"-knappen
    const taBortKnapp = document.createElement("button");
    taBortKnapp.textContent = "❌";

    // 4. Återställ knappens storlek så den inte blir gigantisk
    taBortKnapp.style.width = "auto";
    taBortKnapp.style.height = "auto";
    taBortKnapp.style.padding = "2px 6px"; // Gör knappen liten och nätt
    taBortKnapp.style.fontSize = "12px";   // Minskar storleken på krysset
    taBortKnapp.style.display = "inline-block";

    // 5. Ge knappen funktionen att radera listelementet
    taBortKnapp.onclick = function() {
        nyttListelement.remove();
    };

    // 6. Lägg till knappen i listelementet, och listelementet i listan
    nyttListelement.appendChild(taBortKnapp);
    lista.appendChild(nyttListelement);

    inputfält.value = "";
}
