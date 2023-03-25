const express = require('express')
const router = express.Router()
const {
   adminLogin,
  theatorAccept,
  allOwners,
  addMovie,
  editMovie,
  deleteMovie,
} = require('../Controllers/adminControllers')

router.post('/login', adminLogin)
router.get('/view-theaters', allOwners)
router.patch('/accept', theatorAccept)
router.post('/addMovie', addMovie)
router.get('/editMovie/:id', editMovie)
router.delete('/deleteMovie/:id', deleteMovie)

module.exports = router
