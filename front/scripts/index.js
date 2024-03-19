const createMovie = require ("./createMovie.js")
const renderFilms = require("./runderFilms")

const axios = require ('axios')

const fetchData = async ()=> {
    try {
        const {data} = await axios.get ('http://localhost:3000/movies')
        data.forEach(renderFilms)
    } catch(error){
        console.log(error.mesaje);
    }
}
document.addEventListener("DOMContentLoaded" , () => {
    fetchData();
    const submit = document.getElementById("movieForm")
    submit?.addEventListener("submit", createMovie)
})
