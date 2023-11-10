const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
import connectDB from './config/db'
import quizRouter from './routes/quizRoutes'
import announcementRouter from './routes/announcementRoutes'
const { errorHandler } = require('./middlewares/errorMiddleware')
const cors = require('cors')

const PORT = process.env.PORT || 8888
// connect to DB
connectDB()

// initialize the App
const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// cors middleware
const corsOptions = {
  origin: 'https://anyware-challenge.vercel.app', // frontend URI (ReactJS)
}
app.use(cors(corsOptions))

// Quiz Routes
app.use('/api/quizzes', quizRouter)

// Announcement Routes
app.use('/api/announcements', announcementRouter)

// error handler middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
