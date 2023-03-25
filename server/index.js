const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./Routes/UserRoutes')
const Theater = require('./Routes/theaterRoutes')
const Admin = require('./Routes/adminRoutes')
const app = express()

const cookieParser = require('cookie-parser')

app.use(
  cors({
    origin: [
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
      'http://127.0.0.1:3002',
    ],
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
app.use(cookieParser())


app.use('/', authRoutes)
app.use('/theater', Theater)
app.use('/admin', Admin)
