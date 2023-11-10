import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const withLogger = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  return function AuthComponent(props: T) {
    const navigate = useNavigate()
    const isAuth = localStorage.getItem('auth') === 'auth'

    useEffect(() => {
      if (!isAuth) {
        navigate('/login')
      }
    }, [isAuth, navigate])

    return isAuth ? <WrappedComponent {...props} /> : null
  }
}

export default withLogger
