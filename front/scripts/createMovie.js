const axios = require("axios")

function validateForm({title, year, director, duration, genre, rate, poster}) {
if(!title || !year || !director || !duration || !genre[0] || !rate || !poster)
    return "Todos los campos son obligatorios"
if (isNaN(rate) || rate < 1 || rate > 10)
    return "El rating debe ser entre 1 y 10"
if (!poster.includes("https://"))
    return "El póster debe ser una URL válida"
}

function createMovie(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value;
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    const newMovie = { title, year, director, duration, genre, rate, poster }

    const error = validateForm(newMovie);
    if (error) return alert(error)

    axios.post("http://localhost:3000/movies", newMovie).then(() => alert("Película creadaaa!! :)"))
    .catch((error) => alert("Error al crear la película"));
}

module.exports = createMovie
