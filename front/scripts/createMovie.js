const axios = require("axios");

function validateForm({title, year, director, duration, genre, rate, poster}) {
    if(!title || !year || !director || !duration || !genre || !rate || !poster)
        return "Todos los campos son obligatorios";
    if(year < 1900 || year > 2025)
        return "El año es incorrecto"
    if (isNaN(rate) || rate < 1 || rate > 10)
        return "La calificación debe ser entre 1 y 10";
    if (!poster.includes("https://"))
        return "El póster debe ser una URL válida";

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

    const newMovie = { title, year, director, duration, genre, rate, poster };

    const error = validateForm(newMovie);
    if (error) return alert(error);

    axios.post("http://localhost:3000/movies", newMovie)
        .then(() => {
            alert("Película creadaaa!! :)");

            document.getElementById("title").value = "";
            document.getElementById("year").value = "";
            document.getElementById("director").value = "";
            document.getElementById("duration").value = "";
            document.getElementById("genre").value = "";
            document.getElementById("rate").value = "";
            document.getElementById("poster").value = "";
        })
        .catch((error) => alert("Error al crear la película"));
}

module.exports = createMovie;

