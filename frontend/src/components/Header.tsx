import React from 'react'
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa'

export default function Header() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-slate-600 text-2xl font-bold">
            Welcome Talia,
          </div>
          <div className=" flex space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="text-slate-600 p-2 rounded"
            />
            <a href="#" className="text-white">
              <FaBell className="text-slate-600" />
            </a>
            <a href="#" className="text-slate-600">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
