import React from 'react'
import { announcementType } from '../types'

type props = {
  children: announcementType
}
export default function AnnouncementCard(props: props) {
  const announcement = props.children
  return (
    <div className="grid grid-cols-2">
      <div>
        <div className="place-self-center font-bold text-slate-600 text-xl pt-4 pl-28">
          <h6>{announcement.userName}</h6>
        </div>
        <div className="text-slate-600 text-lg pb-4 pl-28">
          <p>{announcement.course}</p>
        </div>
      </div>
      <div>
        <div className="border-l border-slate-300 pl-4 text-slate-600 text-lg p-4">
          <p>{announcement.content}</p>
        </div>
      </div>
    </div>
  )
}
