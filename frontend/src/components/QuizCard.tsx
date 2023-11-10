import React from 'react'
import { QuizType } from '../types'
import { Link } from 'react-router-dom'
import { GiSandsOfTime } from 'react-icons/gi'
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
type props = {
  children: QuizType
}
function QuizCard(props: props) {
  const quiz = props.children
  const dueToDate = new Date(quiz.dueTo).toLocaleDateString()
  return (
    <div className="border-b-2 rounded-lg p-4">
      <div className="flex  text-slate-600">
        <div className="pr-4">
          {quiz.type === 'quiz' ? (
            <GiSandsOfTime />
          ) : (
            <MdOutlineAssignmentTurnedIn />
          )}
        </div>
        <div className="font-bold text-3xl">{quiz.title}</div>
      </div>
      <div className="text-xl text-slate-600">Course : {quiz.course}</div>
      <div className="text-xl text-slate-600">Topic : {quiz.topic}</div>
      <div className="text-xl text-slate-600">Due To : {dueToDate}</div>
      <Link
        to={`/quizzes/${quiz._id}`}
        className="btn btn-primary self-stretch w-full rounded-sm"
      >
        Start Quiz
      </Link>
    </div>
  )
}

export default QuizCard
