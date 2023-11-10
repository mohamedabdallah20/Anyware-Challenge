import { Request, Response } from 'express'
import QuizModel, { QuizDocument } from '../models/quizModel'

// Create a new quiz
export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, course, topic, dueTo, type, questions } = req.body
    const newQuiz = new QuizModel({
      title,
      type,
      course,
      topic,
      dueTo,
      questions,
    })
    const savedQuiz = await newQuiz.save()
    res.status(201).json(savedQuiz)
  } catch (error: Error | any) {
    res.status(400)
    throw new Error(error.message)
  }
}

// Get all quizzes
export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes: QuizDocument[] = await QuizModel.find()
    res.status(200).json(quizzes)
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}

// Get a specific quiz by ID
export const getQuizById = async (req: Request, res: Response) => {
  try {
    const quiz: QuizDocument | null = await QuizModel.findById(req.params.id)
    if (!quiz) {
      res.status(404).json({ error: 'Quiz not found' })
      throw new Error('Quiz not found')
    }
    res.status(200).json(quiz)
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}

// Update a quiz by ID
export const updateQuiz = async (req: Request, res: Response) => {
  try {
    const updatedQuiz: QuizDocument | null = await QuizModel.findByIdAndUpdate(
      req.params.id,
      req.body
    )
    if (!updatedQuiz) {
      res.status(404).json({ error: 'Quiz not found' })
      throw new Error('Quiz not found')
    }
    res.status(200).json(updatedQuiz)
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}

// Delete a quiz by ID
export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const deletedQuiz: QuizDocument | null = await QuizModel.findByIdAndRemove(
      req.params.id
    )
    if (!deletedQuiz) {
      res.status(404).json({ error: 'Quiz not found' })
      throw new Error('Quiz not found')
    }
    res.status(204).end()
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}
