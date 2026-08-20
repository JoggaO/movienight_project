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