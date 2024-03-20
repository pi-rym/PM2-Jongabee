const dbConfig = require("./src/config/dbConfig");
const app = require("./src/server")
const PORT = 3000;

const startServer = async () => {
    try {
        await dbConfig()
        app.listen (PORT, ()=> console.log(`Server is listening on port ${PORT}`))
    } catch (error) {
        throw new Error(error)
    }

}

startServer()