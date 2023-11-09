import React from 'react'
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'

export default function Header() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-slate-600 text-2xl font-bold">
            Welcome Talia,
          </div>
          <div className=" flex space-x-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search"
                className="form-control text-gray-700 p-2 rounded-lg bg-slate-200"
              />

              <span className="input-group-text" id="search-icon">
                <FaSearch />
              </span>
            </div>

            <Link to="/" className="text-white">
              <FaBell size={24} className="text-slate-600" />
            </Link>
            <Link to="/" className="text-white">
              <FaEnvelope size={24} className="text-slate-600" />
            </Link>
            <Link to="/" className="text-white">
              <RxAvatar size={24} className="text-slate-600" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
