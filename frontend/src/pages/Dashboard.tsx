import React from 'react'
import ExamTime from '../components/ExamTime'
import Announcement from '../components/Announcement'
import DueTo from '../components/DueTo'

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-between space-y-10 text-5xl">
      <ExamTime />
      <div className="grid md:grid-cols-2">
        <Announcement />
        <DueTo />
      </div>
    </div>
  )
}
