import React, { useEffect } from 'react'
import ExamTime from '../components/ExamTime'
import DueTo from '../components/DueTo'
import Announcements from '../components/Announcements'
import { useDispatch, useSelector } from 'react-redux'
import {
  reset as AnnounceRest,
  getAllAnnouncements,
} from '../features/announcements/announceSlice'
import {
  reset as QuizzesRest,
  getAllQuizzes,
} from '../features/quizzes/quizzesSlice'
import { AppDispatch } from '../app/store'
import { RootState } from '../app/store'

export default function Dashboard() {
  const AnnouncementData = useSelector((state: RootState) => state.announce)
  const quizzesData = useSelector((state: RootState) => state.quizzes)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAnnouncements())
    dispatch(getAllQuizzes())

    return () => {
      dispatch(AnnounceRest())
      dispatch(QuizzesRest())
    }
  }, [dispatch])
  return (
    <div className="flex flex-col justify-between space-y-10 text-5xl">
      <ExamTime />
      <div className="grid lg:grid-cols-2 py-8">
        <Announcements data={AnnouncementData} />
        <DueTo data={quizzesData} />
      </div>
    </div>
  )
}
