import React from 'react'
import AnnouncementCard from './AnnouncementCard'
import { announcementType, announcementsPropsType } from '../types'
import { Link } from 'react-router-dom'

function Announcements(props: announcementsPropsType) {
  const { announcements, isError, isLoading, message } = props.data
  // let threeAnnouncements: announcementType[] = []

  // if (announcements.length > 3) {
  //   threeAnnouncements = announcements.slice(0, 3)
  // } else {
  //   threeAnnouncements = announcements.copyWithin(0)
  // }
  if (isError) {
    return <div>{message}</div>
  }
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }
  return (
    <div className="rounded-3xl mx-10 md:my-5 h-full py-4 bg-white ">
      <div className="grid grid-cols-2 relative ">
        <div className=" px-4 py-4 ">
          <h3 className="font-bold text-slate-600 text-3xl">Announcement</h3>
        </div>
        <div className="absolute top-4 right-4 ">
          <Link to="/announcements" className="text-primary-focus text-3xl">
            All
          </Link>
        </div>
      </div>
      {announcements.map((announcement: announcementType) => (
        <AnnouncementCard key={announcement._id.toString()}>
          {announcement}
        </AnnouncementCard>
      ))}
    </div>
  )
}

export default Announcements
