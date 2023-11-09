import React from 'react'
import ExamTime from '../components/ExamTime'
import Announcement from '../components/Announcement'
import DueTo from '../components/DueTo'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  reset,
  getAllAnnouncements,
} from '../features/announcements/announceSlice'
import { AppDispatch } from '../app/store'
import { RootState } from '../app/store'

export default function Dashboard() {
  const { isLoading, isError, message, isSuccess, announcements } = useSelector(
    (state: RootState) => state.announce
  )
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAnnouncements())
    return () => {
      dispatch(reset())
    }
  }, [dispatch])
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
