import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { axios } from 'axios';

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
  //for local
  const GOOGLE_CLIENT_ID = '117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com'
  //for product
  //const GOOGLE_CLIENT_ID = '818031211174-5j50gsf9knjqec9j0lcgo05v34irl1ni.apps.googleusercontent.com'
  const getToken = async (authCode) => {
  const result = await axios.post('https://oauth2.googleapis.com', {
  client_id:'117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com',
  client_secret:'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&code=4/0AX4XfWgHDADYsVvMPWaB2Jwuc-cjF5TzyhuSWy66nv2z84NJ_rQj5WehsPBc-_1PiuyT0g',
  code:{authCode},
  grant_type:'authorization_code',
  redirect_uri:'https://localhost:3000'
})
  let data = result;
    console.log(data);
  }
  const googleAuth = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID, // Your clientID from Google.
    isSignedIn: true,
    scope:'https://www.googleapis.com/auth/drive',
    responseType:'code',
    accessType:'offline',
    onSuccess:response => console.log(response.code),
    // render={renderProps => (
    //   <button onClick={renderProps.onClick} >This is my custom Google button</button>
    // )}
    buttonText:"Login",
    cookiePolicy:'single_host_origin',
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)