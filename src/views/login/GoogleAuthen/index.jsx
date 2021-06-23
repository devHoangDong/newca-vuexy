import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';


const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
  //for local
  const GOOGLE_CLIENT_ID = '117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com'
  //for product
  //const GOOGLE_CLIENT_ID = '818031211174-5j50gsf9knjqec9j0lcgo05v34irl1ni.apps.googleusercontent.com'
  const googleAuth = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID, // Your clientID from Google.
    isSignedIn: true
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)