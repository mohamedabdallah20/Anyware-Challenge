import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import BurgerMenu from './components/BurgerMenu'
function App() {
  return (
    <>
      <Router>
        <div className="lg:flex">
          <BurgerMenu />
          <div className="w-full">
            <Header />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
