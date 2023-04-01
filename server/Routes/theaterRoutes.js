const express = require('express')
const {
  Login,
  Register,
  addScreen,
  viewScreen,
  deleteScreen,
} = require('../Controllers/theaterControllers')
const router = express.Router()

//post
router.post('/login', Login)
router.post('/register', Register)
router.post('/add-screen', addScreen)

//get
router.get('/view-screens', viewScreen)

//delete
router.delete('/deleteScreen/:id', deleteScreen)

module.exports = router
