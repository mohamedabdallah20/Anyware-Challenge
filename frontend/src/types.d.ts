import { ReturnType } from 'react-redux'
import { ObjectId } from 'mongoose'

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

type announcementType = {
  _id: ObjectId | string
  title: string
  content: string
  course: string
  userName: string
  createdAt: Date
}

type announcementStateDataType = {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  message: string
  announcements: announcementType[]
}

type announcementsPropsType = {
  data: announcementStateDataType
}
