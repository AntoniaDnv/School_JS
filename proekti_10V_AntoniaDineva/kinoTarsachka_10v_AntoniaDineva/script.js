const API_KEY = "7dad2698"; 
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");
const favoritesDiv = document.getElementById("favorites");
async function searchMovies() {
    const query = searchInput.value.trim();
    if (!query) {
        alert("Моля, въведете име на филм!");
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            resultsDiv.innerHTML = `<p>Филмът не е намерен!</p>`;
        }
    } catch (error) {
        console.error("Грешка при заявката:", error);
        resultsDiv.innerHTML = `<p>Възникна грешка при търсенето.</p>`;
    }
}
function displayMovies(movies) {
    resultsDiv.innerHTML = "";
    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/100"}" alt="${movie.Title}">
            <h3>${movie.Title} (${movie.Year})</h3>
            <button onclick="addToFavorites('${movie.imdbID}', '${movie.Title}', '${movie.Poster}')">Добави в любими</button>
        `;
        resultsDiv.appendChild(movieElement);
    });
}
let favoriteMovies = JSON.parse(localStorage.getItem("favorites")) || [];
function addToFavorites(id, title, poster) {
    if(favoritesDiv.includes(id, 0) == true){

    }
    else{
        alert('Movie is already aded!');
        return;
    }
}

searchBtn.addEventListener("click", searchMovies);

