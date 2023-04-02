const express = require('express')
const router = express.Router()
const {
  adminLogin,
  theatorAccept,
  viewTheaters,
  addMovie,
  deleteUser,
  viewUsers,
  viewMovies,
  userAction,
  deleteMovie,
  updateMovie,
} = require('../Controllers/adminControllers')

//get
router.get('/view-theaters', viewTheaters)
router.get('/view-users', viewUsers)
router.get('/view-movies', viewMovies)

//post
router.post('/login', adminLogin)
router.post('/useraction', userAction)
router.post('/addmovies', addMovie)
router.post('/updateMovie', updateMovie)

//patch
router.patch('/accept', theatorAccept)

//delete
router.delete('/deleteUser/:id', deleteUser)
router.delete('/deleteMovie/:id', deleteMovie)

module.exports = router
