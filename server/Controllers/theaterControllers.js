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
    const { email, place, password } = req.body
    const autherize = { accepted: false }
    const TheaterOwner = await TheaterModel.create({
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
            res.json({ created: true })
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
  console.log(req.body)
  try {
    const {
      screenname,
      screentype,
      acnon,
      rowcount,
      columncount,
      totalcount,
    } = req.body

    const Screen = {
      screenname: screenname,
      screentype: screentype,
      acnon: acnon,
      rowcount: rowcount,
      columncount: columncount,
      totalcount: totalcount,
    }

    ScreenModel.create(Screen).then((resp) => {
      console.log(resp)
      res.send({ msg: 'Screen Added successfully' })
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.viewScreen = async (req, res, next) => {
  try {
    ScreenModel.find({}).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}


module.exports.deleteScreen = async (req,res,next)=>{
  try {
    const screenId = req.params.id; 
    await ScreenModel.findByIdAndDelete(screenId);
    res.send({msg:'deleted'}); 
  } catch (error) {
    res.status(404).send(error);
  }
}
