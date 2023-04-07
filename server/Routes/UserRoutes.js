const { register, login,getMovies } = require('../Controllers/userControllers')
const { checkUser } = require('../Middlewares/UserMddleware')

const router = require('express').Router()


//post
router.post('/', checkUser)
router.post('/register', register)
router.post('/login', login)
router.get('/getMovies',getMovies)

module.exports = router
