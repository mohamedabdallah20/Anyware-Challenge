import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import BurgerMenu from './components/BurgerMenu'
import withLogger from './hoc/withAuth'
function App() {
  return (
    <>
      <div className="lg:flex">
        <BurgerMenu />
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
const AuthApp = withLogger(App)
export default AuthApp
