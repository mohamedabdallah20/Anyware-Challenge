import { Schema, model, Document, Types } from 'mongoose'
import { QuizDocument, quizSchema } from './quizModel'
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  quizzes: [quizSchema], // Embed quiz documents within the user
})

interface UserDocument extends Document {
  username: string
  email: string
  quizzes: Types.DocumentArray<QuizDocument>
}

const UserModel = model<UserDocument>('User', userSchema)
export default UserModel
