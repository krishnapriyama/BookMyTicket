const express = require('express')
const router = express.Router()
const {
   adminLogin,
  theatorAccept,
  allOwners,
  addMovie,
  editMovie,
  deleteMovie,
  viewUsers
} = require('../Controllers/adminControllers')

router.post('/login', adminLogin)
router.get('/view-theaters', allOwners)
router.patch('/accept', theatorAccept)
router.post('/addMovie', addMovie)
router.get('/editMovie/:id', editMovie)
router.delete('/deleteMovie/:id', deleteMovie)
router.get('/view-users',viewUsers)

module.exports = router
