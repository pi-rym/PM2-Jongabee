
const renderFilms = require("./runderFilms")

// $.get('https://students-api.2.us-1.fl0.io/movies',(data)=> data.forEach(renderFilms))

// $.get('https://students-api.up.railway.app/movies', (data)=> data.forEach(renderFilms))


const axios = require ('axios')

const fetchData = async ()=> {
    try {
        const {data} = await axios.get ('https://students-api.up.railway.app/movies')
        data.forEach(renderFilms)
    } catch(error){
        console.log(error.mesaje);
    }
}
fetchData()