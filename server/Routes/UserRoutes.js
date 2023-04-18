const {
  register,
  login,
  getMovies,
  newrelease,
  singleMovie,
  categorymovie,
  findShow,
  search
} = require('../Controllers/userControllers')
const { checkUser } = require('../Middlewares/UserMddleware')

const router = require('express').Router()

//post
router.post('/', checkUser)
router.post('/register', register)
router.post('/login', login)
router.get('/getMovies', getMovies)
router.get('/new-release', newrelease)
router.get('/moviedetail/:id', singleMovie)
router.get('/categorymovie/:category', categorymovie)
router.get('/findShow/:id',findShow)
router.get('/search',search)

module.exports = router
