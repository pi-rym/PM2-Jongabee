// const moviesService = require("../services/moviesService")

// const moviesController = async (req , res) => {
//     try {
//         const response = await moviesService.getAllMovies();
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// }
// module.exports = moviesController

const{ getAllMovies , postMovie } = require ("../services/moviesService.js")

module.exports = {
    getAllMovies:async (req , res) => {
        try {
            const movies = await getAllMovies();
            res
            .status(200)
            .json(movies);
        } catch (error) {
            res
            .status(500)
            .json({
                mesage: "Error al obtener datos",
                error: error.message
            })
        }
    },
    postMovie: async (req , res) => {
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            const savedMovie = await postMovie({
                title, year, director, duration, genre, rate, poster
            });
            res.status(201).json(savedMovie);
        }catch (error) {
            res
            .status(500)
            .json({
                mesage: "Error al obtener datos",
                error: error.message
            })
        }
    }
}