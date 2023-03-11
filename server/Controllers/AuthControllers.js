const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({ id }, 'SuperSecretKey', {
    expiresIn: maxAge,
  })
}



module.exports.register = async (req, res, next) => {
   try {
     const { email, password} = req.body
     const user = await userModel.create({ email, password})
     
     const token = createToken(user._id)
 
     res.cookie('jwt', token, {
       withCredentials: true,
       httpOnly: false,
       maxAge: maxAge * 1000,
     })
 
     res.status(201).json({ user: user._id, created: true })
   } catch (err) {
     console.log(err)
   }
 }
 
 module.exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
     const user = await userModel.login(email, password)
     const token = createToken(user._id)
     res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 })
     res.status(200).json({ user: user._id, status: true })
   } catch (err) {
      console.log(err)
   }
 }