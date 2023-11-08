const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
import connectDB from './config/db'
const { errorHandler } = require('./middlewares/errorMiddleware')

const PORT = process.env.PORT || 8888
// connect to DB
connectDB()

// initialize the App
const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// error handler middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
