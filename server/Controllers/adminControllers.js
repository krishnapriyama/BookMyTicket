const MovieModel = require('../Models/movieModel')
const TheaterModel = require('../Models/theaterModel')
const AdminModel = require('../Models/adminModel')
const bcrypt = require('bcrypt')
const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')


//Login
module.exports.adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const admin = await AdminModel.findOne({ email })
    if (admin) {
      bcrypt.compare(password, admin.password, function (err, result) {
        if (result === true) {
          const token = jwt.sign({email},'SuperSecretKey')
          res.json({ created: true ,token})
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

    console.log(req.body)

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
    const userId = req.params.id
    await userModel.findByIdAndDelete(userId)
    res.send({ msg: 'deleted' })
  } catch (error) {
    res.status(404).send(error)
  }
}
module.exports.deleteMovie = async (req, res, next) => {
  try {
    const movieId = req.params.id
    await MovieModel.findByIdAndDelete(movieId)
    res.json({ msg: 'Movie deleted' })
  } catch (error) {
    console.log(error)
    res.status(404).send(error)
  }
}

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
    console.log(req.body)
    const { email, action } = await req.body
    userModel
      .findOneAndUpdate({ email: email }, { isBlocked: action })
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

//Edit

module.exports.updateMovie = async (req, res, next) => {
  const {
    _id,
    moviename,
    releasedate,
    description,
    trailerlink,
    genre,
    language,
  } = req.body
  console.log(req.body)
  try {
    MovieModel.updateOne(
      { _id: _id },
      {
        $set: {
          moviename: moviename,
          releasedate: new Date(releasedate),
          description: description,
          trailerlink: trailerlink,
          genre: genre,
          language: language,
        },
      },
    ).then((resp) => {
      res.send({ msg: 'movie updated' })
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.updateUser = async (req, res, next) => {
  const { _id, number, email } = req.body
  try {
    userModel
      .updateOne({ _id: _id }, { number: number, email: email })
      .then((resp) => {
        res.send({ msg: `user updated` })
      })
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports.updateTheater = async (req, res, next) => {
  const { _id, theatername, place } = req.body
  try {
    TheaterModel.updateOne(
      { _id: _id },
      { name: theatername, place: place },
      ).then((resp) => {
        res.send({ msg: `theater updated` })
        console.log(req.body);
    })
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
