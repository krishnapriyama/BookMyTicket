const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const movieModels = require('../Models/movieModel')
const bcrypt = require('bcrypt')
const ShowModel = require('../Models/showModel')

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
  console.log(req.body)
  try {
    const { email, name, password, phone } = req.body
    const action = { isBlocked: true }
    const user = await userModel.create({
      email,
      name,
      phone,
      password,
      ...action,
    })
    res.json({ user: user._id, created: true })
  } catch (err) {
    console.log(err, 'Error from server,register')
    const errors = handleErrors(err)
    res.json({ errors, created: false })
  }
}

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          if (user.isBlocked) {
            res.status(401).json({ error: "user Blocked Contact admin" });
          } else if (!user.verified) {
            res.status(401).json({ error: "user Not verified" });
          }else{
            const token = jwt.sign({ email }, 'SuperSecretKey')
            res.json({ created: true, token })
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
    res.send(error)
  }
}

module.exports.getMovies = async (req, res, next) => {
  try {
    movieModels
      .find({})
      .then((resp) => {
        res.json(resp)
      })
      .catch((err) => {
        res.json(err)
      })
  } catch (error) {
    res.status(404).send(error)
  }
}
module.exports.newrelease = async (req, res, next) => {
  try {
    movieModels
      .find().sort({"releasedate": -1}).limit(6)
      .then((resp) => {
        res.json(resp)
      })
      .catch((err) => {
        res.json(err)
      })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.singleMovie = async (req, res, next) => {
  try {
    movieModels.findOne({ _id: req.params.id }).then((resp) => {
      res.json(resp);
    });
  } catch (error) {}
};

module.exports.categorymovie = async (req, res, next) => {
  try {
    var category = req.params.category
    console.log(category);
     movieModels.find({ genre: category }).then((resp) => {
      console.log(resp);
      res.json(resp);
    });
  } catch (error) {}
};

module.exports.findShow = async (req, res, next) => {
  const id = req.params.id;
  try {
    ShowModel.find({"Movie._id": id }).then((resp) => {
      res.status(200).send(resp);
      console.log(resp)
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.search = async (req, res, next) => {
  let key = req.query.key.toLowerCase(); // convert the search query to lowercase
  const limit = req.query.limit;
  try {
    const resp = await movieModels.find({"moviename": { $regex: new RegExp(key, "i") } }).limit(Number(limit));
    res.status(200).send(resp);
    console.log(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing the request');
  }
};

module.exports.verifyNumber = async (req,res,next)=>{
  let number = req.body.number.split('+91')[1]
  userModel.updateOne({phone:number},{$set:{verified:req.body.verified}}).then((resp)=>{
   
     if (resp.matchedCount > 0){
      res.status(200).send({verified:true,resp})
    }else if(resp.modifiedCount == 0 || resp.matchedCount == 0){
      res.status(200).send({err:"Not Verified",resp})
    }
   
  }).catch((err)=>{
    res.status(200).send(err)
  })
   
  
}
