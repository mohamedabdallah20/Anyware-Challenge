import React from 'react'
import desktop from '../assets/images/pngwing.com2.png'

export default function ExamTime() {
  return (
    <div className="rounded-3xl mx-10 h-1/6  bg-white mt-10 grid md:grid-cols-2 gap-10 ">
      <div className="grid justify-items-start">
        <h1 className="mt-10 ml-10 text-blue-500 font-bold">Exam Time</h1>
        <p className="mt-10 ml-10  text-blue-300 justify-self-stretch">
          Here we are, Are you ready to fight? Don't worry we prepare some tips
          to be ready for you exams.
        </p>
        <button className="btn btn-primary mt-10 ml-10 mb-10 justify-self-center text-2xl">
          View exams tips
        </button>
      </div>

      <img
        src={desktop}
        className="justify-self-end w-full h-auto lg:w-1/2"
        alt="desktop"
      />
    </div>
  )
}
