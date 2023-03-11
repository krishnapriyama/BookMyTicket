const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PUT', 'PATCH'],
    credentials: true,
  }),
)

mongoose
  .connect('mongodb://localhost:27017/bookticket', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Sucessfully Installed')
  })
  .catch((err) => {
    console.log(err.message)
  })

app.listen(4000, () => {
  console.log('Server Started on Port 4000')
})

app.use(express.json())
