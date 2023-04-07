const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const movieModels = require('../Models/movieModel')

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({ id }, 'SuperSecretKey', {
    expiresIn: maxAge,
  })
}

const handleErrors = (err) => {
  let errors = { email: '', password: '' }

  console.log(err)
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered'
  }

  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect'
  }

  if (err.code === 11000) {
    errors.email = 'Email is already registered'
    return errors
  }

  if (err.message.includes('Users validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }

  return errors
}

module.exports.register = async (req, res, next) => {
  try {
    const { email, password, number } = req.body
    const action = { isBlocked: true }
    const user = await userModel.create({
      email,
      number,
      password,
      ...action,
    })
    res.status(201).json({ user: user._id, created: true })
  } catch (err) {
    console.log(err, 'Error from server,register')
    const errors = handleErrors(err)
    res.json({ errors, created: false })
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
    const errors = handleErrors(err)
    res.json({ errors, status: false })
  }
}

module.exports.getMovies = async (req,res,next)=>{
  try {
    movieModels.find().then((resp)=>{
      res.json(resp)
    }).catch((err)=>{
      res.json(err)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}