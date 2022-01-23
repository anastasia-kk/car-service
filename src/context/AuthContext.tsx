import React, {createContext, FC, useContext, useState} from 'react'

type AuthContextData = ReturnType<typeof useAuthProvider>

const useAuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem('APP_IS_LOGGED_IN') === 'true')
  return{
    isLoggedIn,
    setIsLoggedIn,
  }
}

const AuthContext = createContext<AuthContextData | null>(null)

export const AuthProvider: FC = ({children}) => {
  const value = useAuthProvider()
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const Auth = useContext(AuthContext)
  if (!Auth) {
    throw new Error('Auth provider doesnt exist')
  }
  return Auth
}