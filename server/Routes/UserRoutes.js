const { register, login } = require('../Controllers/userControllers')
const { checkUser } = require('../Middlewares/authMiddleware')

const router = require('express').Router()


//post
router.post('/', checkUser)
router.post('/register', register)
router.post('/login', login)

module.exports = router
