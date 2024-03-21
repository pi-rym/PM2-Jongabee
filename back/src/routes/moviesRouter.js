
const {getAllMovies , postMovie} = require ("../controllers/moviesController")
const express = require ("express")
const moviesRouter = express.Router()

moviesRouter.get("/", getAllMovies)
moviesRouter.post("/", postMovie)

module.exports = moviesRouter

