import React, { useState } from 'react'
import {
  FaBars,
  FaTachometerAlt,
  FaBook,
  FaCalendar,
  FaChartBar,
  FaBullhorn,
  FaClipboard,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function BurgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(true)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="lg:w-64 bg-blue-500 lg:min-h-screen">
        <button onClick={toggleMenu} className="lg:hidden text-white p-4">
          <FaBars />
        </button>
        <div
          className={`flex flex-col space-y-4 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            to="/"
            className="text-white p-4 flex items-center hover:bg-white hover:text-blue-700  "
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link
            to="/courses"
            className="text-white p-4 flex items-center hover:bg-white hover:text-blue-700 "
          >
            <FaBook className="mr-2" /> Courses
          </Link>
          <Link
            to="/schedules"
            className="text-white p-4 flex items-center hover:bg-white hover:text-blue-700 "
          >
            <FaCalendar className="mr-2" /> Schedules
          </Link>
          <Link
            to="/performance"
            className="text-white p-4 flex items-center hover:bg-white hover:text-blue-700 "
          >
            <FaChartBar className="mr-2" /> Performance
          </Link>
          <Link
            to="/announcement"
            className="text-white p-4 flex items-center hover:bg-white hover:text-blue-700 "
          >
            <FaBullhorn className="mr-2" /> Announcement
          </Link>
          <Link
            to="/gradebook"
            className="text-white p-4 flex items-center hover:bg-white hover:text-blue-700 "
          >
            <FaClipboard className="mr-2" /> Gradebook
          </Link>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
