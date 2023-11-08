import express from 'express'
import asyncHandler from 'express-async-handler'
import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} from '../controller/quizController'

const quizRouter = express.Router()

// Create a new quiz
quizRouter.post('/', asyncHandler(createQuiz))

// Get all quizzes
quizRouter.get('/', asyncHandler(getAllQuizzes))

// Get a specific quiz by ID
quizRouter.get('/:id', asyncHandler(getQuizById))

// Update a quiz by ID
quizRouter.put('/:id', asyncHandler(updateQuiz))

// Delete a quiz by ID
quizRouter.delete('/:id', asyncHandler(deleteQuiz))

export default quizRouter
