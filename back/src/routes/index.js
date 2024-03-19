const {Router}  =   require ('express')
const moviesRouter = require ('./moviesRouter')
// const moviesController = require ('../controllers/moviesController')

const router = Router()

router.use('/movies' , moviesRouter)

module.exports = router

