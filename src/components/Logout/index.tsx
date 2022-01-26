import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from 'context/AuthContext'

export const Logout = () => {
  const {setIsLoggedIn} = useAuth()
  useEffect(() => {
    localStorage.setItem('APP_IS_LOGGED_IN', 'false')
    setIsLoggedIn(false)
  }, [])
  return(
    <Navigate to="/login" replace={true} />
  )
}