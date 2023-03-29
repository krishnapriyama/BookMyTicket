const MovieModel = require('../Models/movieModel')
const TheaterModel = require('../Models/theaterModel')
const bcrypt = require('bcrypt')
const userModel = require('../Models/userModel')

//Login
module.exports.adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const admin = await TheaterModel.findOne({ email })
    if (admin) {
      bcrypt.compare(password, admin.password, function (err, result) {
        if (result === true) {
          res.json({ created: true })
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

//List Details
module.exports.viewTheaters = async (req, res, next) => {
  try {
    TheaterModel.find({}, { password: 0 }).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.viewUsers = async (req, res, next) => {
  try {
    userModel.find({}, { password: 0 }).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.viewMovies = async (req, res, next) => {
  try {
    MovieModel.find({}).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}


//Add Details
module.exports.addMovie = async (req, res, next) => {
  try {
    const {
      moviename,
      releasedate,
      description,
      poster1,
      poster2,
      poster3,
      trailerlink,
      genre,
      language,
    } = req.body

    const Movie = {
      moviename: moviename,
      releasedate: Date(releasedate),
      description: description,
      poster1: poster1,
      poster2: poster2,
      poster3: poster3,
      genre: genre,
      language: language,
      trailerlink: trailerlink,
    }

    MovieModel.create(Movie).then((resp) => {
      res.send({ msg: 'Movie Added successfully' })
    })
  } catch (error) {
    res.status(404).send(error)
  }
}


//Delete 
module.exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id; 
    await userModel.findByIdAndDelete(userId);
    res.send({msg:'deleted'}); 
  } catch (error) {
    res.status(404).send(error);
  }
}
module.exports.deleteMovie = async (req, res, next) => {
  try {
    const movieId = req.params.id; 
    await MovieModel.findByIdAndDelete(movieId);
    res.json({msg:'Movie deleted'}); 
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};




//Authorise
module.exports.theatorAccept = async (req, res, next) => {
  try {
    const { email, action } = await req.body
    console.log(req.body)
    TheaterModel.findOneAndUpdate({ email: email }, { accepted: action })
      .then((resp) => {
        res.send(resp)
      })
      .catch((err) => {
        res.send(err)
      })
  } catch (error) {
    res.send(error)
  }
}

module.exports.userAction = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, action } = await req.body
    userModel
      .findOneAndUpdate({ email: email }, { isBlocked : action })
      .then((resp) => {
        res.send(resp);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    res.send(error);
  }
}



module.exports.editMovie = async (req, res, next) => {
  try {
    MovieModel.findOne({})
  } catch (error) {
    console.log(error)
  }
}


