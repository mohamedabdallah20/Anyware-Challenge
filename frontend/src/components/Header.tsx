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
            <div className="relative ">
              <input
                type="text"
                placeholder="   Search"
                className="form-control text-gray-700 p-2 pl-8 rounded-lg bg-slate-200"
              />
              <span className="absolute md:left-5 left-4 md:top-4 top-2 text-gray-500">
                <FaSearch size={24} />
              </span>
            </div>
            <div className="relative h-full  pt-4 md:pt-0 place-self-end md:place-self-start ">
              <div className="flex absolute -right-52 -top-2 space-x-4 ">
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
      </div>
    </nav>
  )
}
