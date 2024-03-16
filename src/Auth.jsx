import { useState } from "react";
const Auth = () => {
    const [accessToken, setAccessToken] = useState("")
    const handleLogin = () => {
        const CLIENT_ID = "919505909686-f5oijgdjjn0rv4g97gfdvj395j9lhtm0.apps.googleusercontent.com";
        const REDIRECT_URI = "http://localhost:3000"
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly"
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;

      window.location.href = AUTH_URL;
    }
    return (
      <>
      <div>
        {accessToken ? (
          <div>
            <h1>Acess Token</h1>
            <p>Access Token: {accessToken}</p>
            </div>
        ):(
          <>
          <button onClick={handleLogin}>Login With Google</button>
          </>
        )
      
      }
      </div>
      </>
    )

}
export default Auth;