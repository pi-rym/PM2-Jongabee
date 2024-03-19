const Movie = require ("../models/Movie")

module.exports = {
    getAllMovies: async () => {
        const allMovies = await Movie.find()
        return allMovies;
    },
    postMovie: async (movie) => {
        const newMovie = new Movie(movie);
        const savedMovie = await newMovie.save();
        return savedMovie;
    }
};
