import { Schema, model, Document } from 'mongoose'

interface Question {
  question: string
  options: string[]
  correctAnswer: string
}

interface QuizDocument extends Document {
  title: string
  type: 'quiz' | 'assignment'
  course: string
  topic: string
  dueTo: Date
  questions: Question[]
}

const quizSchema = new Schema<QuizDocument>({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  dueTo: {
    type: Date,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [String],
      correctAnswer: {
        type: String,
        required: true,
      },
    },
  ],
})

const QuizModel = model<QuizDocument>('Quiz', quizSchema)

export { QuizDocument, quizSchema }
export default QuizModel
