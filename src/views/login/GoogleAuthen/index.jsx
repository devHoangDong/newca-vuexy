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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com");
    urlencoded.append("client_secret", "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");
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("redirect_uri", "https://developers.google.com/oauthplayground");
    urlencoded.append("code", authCode);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("https://oauth2.googleapis.com/token", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  const test = 'https://accounts.google.com/o/oauth2/auth?client_id=117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com&response_type=token&redirect_uri=https://developers.google.com/oauthplayground&scope=https://www.googleapis.com/auth/drive'
  const googleAuth = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID, // Your clientID from Google.
    isSignedIn: true,
    scope: 'https://www.googleapis.com/auth/drive',
    responseType: 'code',
    accessType: 'offline',
    onSuccess: response => getToken(response.code),
    // render={renderProps => (
    //   <button onClick={renderProps.onClick} >This is my custom Google button</button>
    // )}
    buttonText: "Login",
    cookiePolicy: 'single_host_origin',
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)