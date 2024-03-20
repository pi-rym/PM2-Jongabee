const mongoose = require("mongoose")
require("dotenv").config()

const dbConfig = async () => {
    await mongoose.connect (process.env.MONGODB_URI)
}

module.exports = dbConfig