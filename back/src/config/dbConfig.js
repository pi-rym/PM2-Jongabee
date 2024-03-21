const mongoose = require("mongoose")
// require("dotenv").config()

// const dbConfig = async () => {
//     await mongoose.connect (process.env.MONGODB_URI)
// }

// module.exports = dbConfig

const dbConfig = async () => {
    await mongoose.connect (
        "mongodb+srv://jonatanmosqueda:QazFxL5Nsqocg90N@clusterm2.lzrifkr.mongodb.net/movies?retryWrites=true&w=majority&appName=ClusterM2"
    )
}

module.exports = dbConfig