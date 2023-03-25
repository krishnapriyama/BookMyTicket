const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const theaterOwnerSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, ' Email is require'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, ' Password is require'],
  },
  place: {
    type: String,
    require: [true, ' Place is require'],
  },
  accepted: {
    type: Boolean,
  },
})

theaterOwnerSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model('theaters', theaterOwnerSchema)
