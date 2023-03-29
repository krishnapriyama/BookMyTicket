const express = require('express')
const router = express.Router()
const {
  adminLogin,
  theatorAccept,
  viewTheaters,
  addMovie,
  editMovie,
  deleteUser,
  viewUsers,
  viewMovies,
  userAction,
  deleteMovie,
} = require('../Controllers/adminControllers')

//get
router.get('/view-theaters', viewTheaters)
router.get('/view-users', viewUsers)
router.get('/view-movies', viewMovies)

router.get('/editMovie/:id', editMovie)

//post
router.post('/login', adminLogin)
router.post('/useraction', userAction)
router.post('/addmovies', addMovie)

//patch
router.patch('/accept', theatorAccept)

//delete
router.delete('/deleteUser/:id', deleteUser)
router.delete('/deleteMovie/:id', deleteMovie)

module.exports = router
