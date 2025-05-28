const API_KEY = "7dad2698";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");
const favoritesDiv = document.getElementById("favorites");
const modal = document.getElementById("movieDetailsModal");
const closeBtn = document.querySelector(".close");
const movieDetailsDiv = document.getElementById("movieDetails");
const reviewForm = document.getElementById("reviewForm");
const reviewsListDiv = document.getElementById("reviewsList");

let favoriteMovies = JSON.parse(localStorage.getItem("favorites")) || [];
let currentMovieId = null;

// Initialize the app
function init() {
    displayFavorites();
    
    // Event listeners
    searchBtn.addEventListener("click", searchMovies);
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
    
    // Review form submission
    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addReview();
    });
}

// Search movies function
async function searchMovies() {
    const query = searchInput.value.trim();
    if (!query) {
        alert("Моля, въведете име на филм!");
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        const data = await response.json();
        
        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            resultsDiv.innerHTML = `<p class="error">Филмът не е намерен!</p>`;
        }
    } catch (error) {
        console.error("Грешка при заявката:", error);
        resultsDiv.innerHTML = `<p class="error">Възникна грешка при търсенето.</p>`;
    }
}

// Display movies in results
function displayMovies(movies) {
    resultsDiv.innerHTML = "";
    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/100"}" alt="${movie.Title}">
            <h3>${movie.Title} (${movie.Year})</h3>
            <button onclick="showMovieDetails('${movie.imdbID}')">Детайли</button>
            <button onclick="addToFavorites('${movie.imdbID}', '${movie.Title}', '${movie.Poster}', '${movie.Year}')">Добави в любими</button>
        `;
        resultsDiv.appendChild(movieElement);
    });
}

// Show detailed movie view
async function showMovieDetails(imdbID) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
        const movie = await response.json();
        
        if (movie.Response === "True") {
            currentMovieId = imdbID;
            movieDetailsDiv.innerHTML = `
                <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}">
                <div class="movie-info">
                    <h2>${movie.Title} (${movie.Year})</h2>
                    <p><strong>Режисьор:</strong> ${movie.Director}</p>
                    <p><strong>Актьори:</strong> ${movie.Actors}</p>
                    <p><strong>Жанр:</strong> ${movie.Genre}</p>
                    <p><strong>Рейтинг:</strong> ${movie.imdbRating}</p>
                    <p><strong>Сюжет:</strong> ${movie.Plot}</p>
                </div>
            `;
            
            // Load reviews for this movie
            loadReviews(imdbID);
            modal.style.display = "block";
        } else {
            alert("Грешка при зареждане на детайлите за филма!");
        }
    } catch (error) {
        console.error("Грешка при заявката:", error);
        alert("Възникна грешка при зареждане на детайлите!");
    }
}

// Add to favorites function
function addToFavorites(id, title, poster, year) {
    if (!favoriteMovies.some(movie => movie.id === id)) {
        favoriteMovies.push({ id, title, poster, year });
        localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
        displayFavorites();
        alert(`${title} е добавен към любими!`);
    } else {
        alert("Този филм вече е добавен към любими!");
    }
}

// Display favorites
function displayFavorites() {
    favoritesDiv.innerHTML = "";
    favoriteMovies.forEach(movie => {
        const favoriteElement = document.createElement("div");
        favoriteElement.classList.add("movie", "favorite-movie");
        favoriteElement.innerHTML = `
            <button class="remove-favorite" onclick="removeFromFavorites('${movie.id}')">×</button>
            <img src="${movie.poster !== "N/A" ? movie.poster : "https://via.placeholder.com/100"}" alt="${movie.title}">
            <h3>${movie.title} (${movie.year})</h3>
            <button onclick="showMovieDetails('${movie.id}')">Детайли</button>
        `;
        favoritesDiv.appendChild(favoriteElement);
    });
}

// Remove from favorites
function removeFromFavorites(id) {
    favoriteMovies = favoriteMovies.filter(movie => movie.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
    displayFavorites();
}

// Add review
function addReview() {
    const reviewText = document.getElementById("reviewText").value.trim();
    const reviewRating = document.getElementById("reviewRating").value;
    
    if (!reviewText || !reviewRating) {
        alert("Моля, попълнете всички полета!");
        return;
    }
    
    const review = {
        text: reviewText,
        rating: reviewRating,
        date: new Date().toLocaleDateString()
    };
    
    // Save to localStorage
    const reviews = JSON.parse(localStorage.getItem(`reviews_${currentMovieId}`)) || [];
    reviews.push(review);
    localStorage.setItem(`reviews_${currentMovieId}`, JSON.stringify(reviews));
    
    // Clear form
    reviewForm.reset();
    
    // Reload reviews
    loadReviews(currentMovieId);
}

// Load reviews for a movie
function loadReviews(movieId) {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${movieId}`)) || [];
    reviewsListDiv.innerHTML = "";
    
    if (reviews.length === 0) {
        reviewsListDiv.innerHTML = "<p>Все още няма рецензии за този филм.</p>";
        return;
    }
    
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review-item");
        reviewElement.innerHTML = `
            <p><strong>Оценка:</strong> <span class="review-rating">${'★'.repeat(review.rating)}</span></p>
            <p>${review.text}</p>
            <p><small>${review.date}</small></p>
            <button onclick="deleteReview('${movieId}', ${index})">Изтрий</button>
        `;
        reviewsListDiv.appendChild(reviewElement);
    });
}

// Delete review
function deleteReview(movieId, index) {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${movieId}`)) || [];
    reviews.splice(index, 1);
    localStorage.setItem(`reviews_${movieId}`, JSON.stringify(reviews));
    loadReviews(movieId);
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init);