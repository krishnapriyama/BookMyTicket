const TheaterModel = require('../Models/theaterModel')
const ScreenModel = require('../Models/screenmodel')
const MovieModel = require('../Models/movieModel')
const ShowModel = require('../Models/showModel')
const bookingModel = require('../Models/BookingModel')
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
            const token = jwt.sign({ email }, 'SuperSecretKey')
            res.json({ created: true, token })
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
  
  try {
    const data = {
      screenname: req.body.screenname,
      totalcount: req.body.totalcount,
      row: req.body.rowcount,
      column: req.body.columncount,
      screentype: req.body.screentype,
    }
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

module.exports.viewScreen = async (req, res, next) => {
  const { email } = req.user
  try {
    TheaterModel.findOne({ email: email }).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.deleteScreen = async (req, res, next) => {
  const screenId = req.params.id
  try {
    TheaterModel.updateOne(
      { 'screens._id': screenId },
      { $pull: { screens: { _id: screenId } } },
      { new: true },
    ).then((resp) => {
      res.send({ msg: 'screen deleted' })
    })
  } catch (error) {
    res.status(404).send({ err: 'no idea', error })
  }
}
module.exports.deleteshow = async (req, res, next) => {
  const showId = req.params.id;
  try {
    await ShowModel.deleteOne({ _id: showId });
    res.send({ msg: 'movie deleted' });
  } catch (error) {
    res.status(404).send({ err: 'no idea', error });
  }
}


module.exports.ScreennedMovies = async (req, res, next) => {
  const { email } = req.user;
  try {
    ShowModel.find({ "theater.email": email }).sort({'EndDate': -1})
      .then((ScreendMovies) => {
        console.log(ScreendMovies);
        res.status(200).send(ScreendMovies);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.viewbooking = async (req, res, next) => {
  bookingModel.find().then((resp) => {
    res.status(200).send(resp);
  });
};

module.exports.screen = async (req, res, next) => {
  const { email } = req.user
  try {
    const theater = await TheaterModel.findOne({ email })
    const screens = theater.screens
    res.status(200).json({ screens })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

module.exports.AddShow = async (req, res, next) => {
  const { email } = req.user
  let Theater = await TheaterModel.findOne({ email: email })
  let Movie = await MovieModel.findOne({ _id: req.body.movie })
  let Times = req.body.ShowTimes.map((showtimes) => {
    return showtimes.value
  })
  const screen = Theater.screens.find((screen) => screen._id == req.body.screen)
  const newData = {
    startDate: new Date(req.body.startDate),
    EndDate: new Date(req.body.EndDate),
    ShowTimes: Times,
    TicketPrice: req.body.TicketPrice,
    Movie: Movie,
    theater: {
      name: Theater.name,
      email: Theater.email,
      address: Theater.place,
      screen: screen,
    },
  }
  try {
    ShowModel.create(newData).then((resp) => {
      res.send({ msg: 'Screen Added Successfully', created: true })
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports.updateScreen = async (req, res, next) => {
  const { _id, screenname, screentype, rowcount, columncount } = req.body

  try {
    const theater = await TheaterModel.findById(_id)
    const screen = theater.screens.find((s) => s._id.toString() === _id)

    screen.screenname = screenname
    screen.screentype = screentype
    screen.row = rowcount
    screen.column = columncount

    await theater.save()
    res.json(screen)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}
module.exports.totalincome = async (req, res, next) => {updateScreen
  try {
    const total = await bookingModel.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: {
            $sum: '$show.TotelPrice',
          },
        },
      },
    ])

    const monthwise = await bookingModel.aggregate([
      {
        $project: {
          month: {
            $month: '$BookingDate',
          },
          Amount: '$show.TotelPrice',
        },
      },
      {
        $group: {
          _id: '$month',
          totalRevenue: {
            $sum: '$Amount',
          },
        },
      },
    ])
    res.status(200).json({ totalIncome: total[0].totalAmount, monthwise })
  } catch (error) {
    console.log(error)
  }
}

module.exports.movietime = async (req, res, next) => {
  const screen_id = req.params.id
  console.log(req.user)

  try {
    const movie = await ShowModel.findOne({ 'theater.screen._id': screen_id })
    if (!movie) {
      return res
        .status(404)
        .json({ message: 'Movie not found for given screen id.' })
    }

    const theater = movie.theater
    const showTimes = movie.ShowTimes
    const movieDetails = [{
      movieName: movie.Movie.moviename,
    }]

    return res.status(200).json([ movieDetails, showTimes,theater ])
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Server error.' })
  }
}
