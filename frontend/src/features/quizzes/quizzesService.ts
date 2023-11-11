import axios from 'axios'

const API_URL = 'https://anyware-challenge-server.vercel.app/api/quizzes'

// Fetch All quizzes
const getAllQuizzes = async () => {
  const response = await axios.get(API_URL)
  return response.data
}
const quizService = {
  getAllQuizzes,
}
export default quizService
