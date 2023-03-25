const MovieModel = require('../Models/movieModel')
const TheaterModel = require('../Models/theaterModel')
const bcrypt = require('bcrypt')

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

module.exports.theatorAccept = async (req, res, next) => {
  try {
    const { email } = await req.body
    console.log(req.body);
    TheaterModel.updateOne({ email: email }, { accepted: true })
      .then((resp) => {
        res.send({ msg: 'user accepted' })
      })
      .catch((err) => {
        res.send(err)
      })
  } catch (error) {
    res.send(error)
  }
}

module.exports.allOwners = async (req, res, next) => {
  try {
    TheaterModel.find({}, { password: 0 }).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.addMovie = async (req, res, next) => {
  // { "moviename":"name", "releasedate":"date",
  // "description":"dis", "poster1":"pos1",
  // "poster2":"pos1", "poster3":"pos1",
  //     "trailerlink":"link"
  //   }

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
      res.status(200).send({ msg: 'Movie Added successfully' })
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.editMovie = async (req, res, next) => {
  try {
    MovieModel.findOne({})
  } catch (error) {
    console.log(error)
  }
}

module.exports.deleteMovie = async (req, res, next) => {}
