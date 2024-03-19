const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    year: {
        type: Number,
        require: true,
        min: [1900, `No existen películas previas a {VALUE}`]
    },
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: {
            type: String,
            validate: {
                validator: function(input) {
                return input.includes("https://")
                },
                message: props=> `${props.value} no es una URL válida`
            }
        }
    })

const Movie = mongoose.model ("Movie", movieSchema)

module.exports = Movie;