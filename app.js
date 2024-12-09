// Registrace service workeru
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker byl úspěšně registrován!'))
        .catch((error) => console.error('Registrace Service Workeru selhala:', error));
}




// Funkce pro zobrazení hlavní stránky
function showMain() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('settingsPage').style.display = 'none';
    updateFavoriteMovie();
}

// Funkce pro zobrazení nastavovací stránky
function showSettings() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('settingsPage').style.display = 'block';
}

// Funkce pro aktualizaci zobrazeného filmu
function updateFavoriteMovie() {
    const movie = sessionStorage.getItem('favoriteMovie');
    const movieDisplay = document.getElementById('favoriteMovie');
    if (movie) {
        movieDisplay.textContent = `Nejoblíbenější film: ${movie}`;
    } else {
        movieDisplay.textContent = "Žádný film nebyl nastaven.";
    }
}

// Funkce pro uložení filmu
function saveMovie() {
    const movieInput = document.getElementById('movieInput').value;
    if (movieInput) {
        sessionStorage.setItem('favoriteMovie', movieInput);
        alert('Film byl úspěšně nastaven!');
        showMain();
    } else {
        alert('Prosím, zadejte název filmu.');
    }
}

// Aktualizace zobrazení při načtení stránky
updateFavoriteMovie();
