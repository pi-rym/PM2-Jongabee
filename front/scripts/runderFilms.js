// $.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
//     renderFilms(data);
// });

const moviesContainer= document.getElementById("movies-container");

function renderFilms (movie){
    const movieElement = document.createElement ("article")
    const containerMovie = document.createElement ("div")
    movieElement.classList.add("movie")
    movieElement.classList.add("divMovie")

    movieElement.innerHTML = `<img class= "card-image" src="${movie.poster}" alt = "${movie.title}">`

    containerMovie.innerHTML = `
    <h1> ${movie.title}</h1>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Duración:</strong> ${movie.duration}</p>
    <p><strong>Género:</strong> ${movie.genre.join(', ')}</p>
    <p><strong>Rate:</strong> ${movie.rate}</p>
    <p><strong>Año:</strong> ${movie.year}</p>

    `
    moviesContainer?.appendChild(movieElement)
    movieElement.appendChild(containerMovie)
}
module.exports = renderFilms
// tempData.forEach(renderFilms) 