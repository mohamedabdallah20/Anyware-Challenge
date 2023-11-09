import React from 'react'
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'

export default function Header() {
  return (
    <nav className="rounded-s-md bg-white p-4 h-40">
      <div className=" grid md:grid-cols-2 place-items-center h-full mx-auto">
        <div className="flex-grow  ">
          <div className="text-slate-600 md:text-5xl text-2xl font-bold mx-auto">
            Welcome Talia,
          </div>
        </div>
        <div className="place-self-center space-x-4 ">
          <div className="grid 2xl:grid-cols-2 mx-auto space-y-4 space-x-6 place-items-start lg:text-3xl md:text-xl sm:text-md ">
            <div className="input-group mx-auto ">
              <input
                type="text"
                placeholder="Search"
                className="form-control mx-auto text-gray-700 p-2 rounded-lg bg-slate-200"
              />
              <span className="input-group-text mx-auto" id="search-icon">
                <FaSearch size={30} />
              </span>
            </div>
            <div className="flex h-full space-x-4 pt-4 md:pt-0 place-self-end md:place-self-start">
              <Link to="/" className="text-slate-600">
                <FaBell className="text-3xl md:text-4xl" />
              </Link>
              <Link to="/" className="text-slate-600">
                <FaEnvelope className="text-3xl md:text-4xl" />
              </Link>
              <Link to="/" className="text-slate-600">
                <RxAvatar className="text-3xl md:text-4xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
