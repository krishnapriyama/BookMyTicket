const express = require('express')
const router = express.Router()

const {
  Login,
  Register,
  addScreen,
  viewScreen,
  deleteScreen,
  ScreennedMovies,
  AddShow,
  updateScreen,
  totalincome,
  screen,
  movietime,
  viewbooking,
  deleteshow
} = require('../Controllers/theaterControllers')
const authMiddleware = require('../Middlewares/authMiddleware')

//post
router.post('/login', Login)
router.post('/register', Register)
router.post('/add-screen', addScreen)
router.post("/add-Show",authMiddleware,AddShow)
router.post('/updateScreen', updateScreen)
router.get('/total-income', totalincome)

// get
router.get('/view-screens',authMiddleware, viewScreen)
router.get("/view-show",authMiddleware,ScreennedMovies)
router.get("/view-booking",authMiddleware,viewbooking)
router.get("/screen",authMiddleware,screen)
router.get("/movie-time/:id",authMiddleware,movietime)


//delete
router.delete('/deleteScreen/:id', deleteScreen)
router.delete('/deleteshow/:id', deleteshow)

module.exports = router
