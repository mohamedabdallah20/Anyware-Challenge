import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import BurgerMenu from './components/BurgerMenu'
import requireAuth from './hoc/requireAuth'
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
const AuthApp = requireAuth(App)
export default AuthApp
