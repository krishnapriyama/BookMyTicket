const express = require('express')
const router = express.Router()

const {
  Login,
  Register,
  addScreen,
  viewScreen,
  deleteScreen,
} = require('../Controllers/theaterControllers')
const authMiddleware = require('../Middlewares/authMiddleware')

//post
router.post('/login', Login)
router.post('/register', Register)
router.post('/add-screen', addScreen)


// http://localhost:4000/theater/deleteScreen/:id 
router.get('/view-screens',authMiddleware, viewScreen)

//delete
router.delete('/deleteScreen/:id', deleteScreen)

module.exports = router
