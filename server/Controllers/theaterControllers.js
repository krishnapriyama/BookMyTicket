const TheaterModel = require('../Models/theaterModel')
const ScreenModel = require('../Models/screenmodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const handleErrors = (err) => {
  let errors = { email: '', password: '' }

  if (err.code === 11000) {
    errors.email = 'Email is already registered'
    return errors
  }
}

module.exports.Register = async (req, res, next) => {
  try {
    const { name, email, place, password } = req.body
    const autherize = { accepted: false }
    const TheaterOwner = await TheaterModel.create({
      name,
      email,
      place,
      password,
      ...autherize,
    })
    res.status(200).send({ TheaterOwner, created: true })
  } catch (err) {
    console.log(err, 'Error from Register catch')
    const errors = handleErrors(err)
    res.json({ errors, created: false })
  }
}

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const TheatOwner = await TheaterModel.findOne({ email })
    if (TheatOwner) {
      bcrypt.compare(password, TheatOwner.password, function (err, result) {
        if (result === true) {
          if (TheatOwner.accepted === true) {
            const token = jwt.sign({email},'SuperSecretKey')
            res.json({ created: true ,token})
            console.log('Password match')
          } else {
            res.json({ error: 'Admin Not accepted' })
          }
        } else {
          res.json({ error: 'Invalid email or password' })
          console.log('Passwords do not match.')
        }
      })
    } else {
      res.json({ error: 'Invalid email or password' })
    }
  } catch (error) {
    console.log(error)
    res.status(404).send(error)
  }
}

module.exports.addScreen = async (req, res, next) => {
  const data = {
    screenname: req.body.screenname,
    totalcount: req.body.totalcount,
    row: req.body.rowcount,
    column: req.body.columncount,
    screentype: req.body.screentype,
  }

  try {
    TheaterModel.updateOne({ $push: { screens: data } })
      .then((resp) => {
        res.json({ created: true })
      })
      .catch((err) => {
        res.json({ created: false, err })
      })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.
viewScreen = async (req, res, next) => {
  const {email} = req.user;
  try {
    TheaterModel.findOne({email:email}).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.deleteScreen = async (req, res, next) => {
  try {
    const screenId = req.params.id
    await TheaterModel.findByIdAndDelete(screenId)
    res.send({ msg: 'deleted' })
  } catch (error) {
    res.status(404).send(error)
  }
}
