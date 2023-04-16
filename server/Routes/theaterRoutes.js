const express = require('express')
const router = express.Router()

const {
  Login,
  Register,
  addScreen,
  viewScreen,
  deleteScreen,
  ScreennedMovies,
  AddShow
} = require('../Controllers/theaterControllers')
const authMiddleware = require('../Middlewares/authMiddleware')

//post
router.post('/login', Login)
router.post('/register', Register)
router.post('/add-screen', addScreen)
router.post("/add-Show",authMiddleware,AddShow)


// get
router.get('/view-screens',authMiddleware, viewScreen)
router.get("/view-show",authMiddleware,ScreennedMovies)


//delete
router.delete('/deleteScreen/:id', deleteScreen)

module.exports = router
