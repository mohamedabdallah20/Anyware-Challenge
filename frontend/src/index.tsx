import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthApp from './App'
import Login from './pages/Login'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

// const theme = createTheme()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <ThemeProvider theme={theme}>
  //   {/* <React.StrictMode> */}

  //   {/* </React.StrictMode> */}
  // </ThemeProvider>

  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <AuthApp />
    </Router>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
