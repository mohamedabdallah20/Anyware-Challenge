const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
import connectDB from './config/db'
import quizRouter from './routes/quizRoutes'
const { errorHandler } = require('./middlewares/errorMiddleware')

const PORT = process.env.PORT || 8888
// connect to DB
connectDB()

// initialize the App
const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Quiz Routes
app.use('/api/quizzes', quizRouter)

// Announcement Routes
// app.use('/api/Announcement', require('./routes/announcementRoutes'))

// error handler middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
