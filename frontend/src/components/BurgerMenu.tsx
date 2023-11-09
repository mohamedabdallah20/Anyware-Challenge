import React, { useState } from 'react'
import {
  FaBars,
  FaHome,
  FaBook,
  FaRegCalendarAlt,
  FaChartLine,
  FaBullhorn,
  FaGraduationCap,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function BurgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(true)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="lg:w-96 bg-blue-500 lg:min-h-screen">
        <button onClick={toggleMenu} className="lg:hidden text-white p-4">
          <FaBars />
        </button>
        <div
          className={`flex flex-col space-y-4 lg:pl-10 lg:space-y-14 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className={'hidden lg:block text-5xl m-7 mb-20 font-bold '}>
            Coligo
          </div>
          <Link
            to="/dashboard"
            className="text-white p-4 flex items-center text-lg  hover:bg-white hover:text-blue-700  "
          >
            <FaHome size={30} className="mr-2" /> Dashboard
          </Link>

          <Link
            to="/schedules"
            className="text-white p-4 flex items-center text-lg hover:bg-white hover:text-blue-700 "
          >
            <FaRegCalendarAlt size={30} className="mr-2" /> Schedules
          </Link>
          <Link
            to="/courses"
            className="text-white p-4 flex items-center text-lg hover:bg-white hover:text-blue-700 "
          >
            <FaBook size={30} className="mr-2" /> Courses
          </Link>
          <Link
            to="/gradebook"
            className="text-white p-4 flex items-center text-lg hover:bg-white hover:text-blue-700 "
          >
            <FaGraduationCap size={30} className="mr-2" /> Gradebook
          </Link>
          <Link
            to="/performance"
            className="text-white p-4 flex items-center text-lg hover:bg-white hover:text-blue-700 "
          >
            <FaChartLine size={30} className="mr-2" /> Performance
          </Link>
          <Link
            to="/announcement"
            className="text-white p-4 flex items-center text-lg hover:bg-white hover:text-blue-700 "
          >
            <FaBullhorn size={30} className="mr-2" /> Announcement
          </Link>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
