import React from 'react'
import { Link } from 'react-router-dom'
import { QuizType, quizzesPropsType } from '../types'
import QuizCard from './QuizCard'

function DueTo(props: quizzesPropsType) {
  const { quizzes, isError, isLoading, message } = props.data
  let threeQuizzes: QuizType[] = []

  if (quizzes.length > 3) {
    threeQuizzes = quizzes.slice(0, 3)
  } else {
    threeQuizzes = quizzes
  }
  if (isError) {
    return <div>{message}</div>
  }
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }
  return (
    <div className="rounded-3xl mx-20 h-full my-5 bg-white ">
      <div className="grid grid-cols-2 relative ">
        <div className=" px-4 py-4 ">
          <h3 className="font-bold text-slate-600 text-3xl">Whats's Due</h3>
        </div>
        <div className="absolute top-4 right-4 ">
          <Link to="/" className="text-primary-focus text-3xl">
            All
          </Link>
        </div>
      </div>
      {threeQuizzes.map((quiz: QuizType) => (
        <QuizCard key={quiz._id.toString()}>{quiz}</QuizCard>
      ))}
    </div>
  )
}

export default DueTo
