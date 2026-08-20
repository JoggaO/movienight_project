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