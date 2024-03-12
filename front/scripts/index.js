//const axios = require ("axios")//
const renderFilms = require("./runderFilms")

// $.get('https://students-api.2.us-1.fl0.io/movies',(data)=> data.forEach(renderFilms))


$.get('https://students-api.up.railway.app/movies', (data)=> data.forEach(renderFilms))