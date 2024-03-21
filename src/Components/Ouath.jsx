
import { useEffect, useState } from "react";
const Ouath = () => {
    const [accessToken, setAccessToken] = useState("")
    const handleLogin = () => {
        const CLIENT_ID = "162506691682-lem8ioa7vth71pen6h55i6921i59oiff.apps.googleusercontent.com"
        const REDIRECT_URI = "http://localhost:3000"
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly"
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    };
    const getAccessToken = () => {
        const url = window.location.href
        const token = url.match(/access_token=([^&]+)/)
        localStorage.setItem("Token",token && token[1])
        console.log("Token is", localStorage.getItem("Token"))

    }
    useEffect(() => (
        getAccessToken()
    ), [])
    const getEmailData = () => {
        let token = localStorage.getItem("Token")
        console.log("hello", token)
        let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages"
        const options = {
            method : 'GET',
            headers : {
                'Authorization' : `Bearer ${token}`,
                'Content-Type':'application/json'
            }
        }
        fetch(url,options)
        .then(response => response.json())
        .then(json=>console.log("Message" ,json))
        .catch(error=>console.log('Error in fetching mails',error))
    }

const fetchMail = (id) => {
    // let id = '18e462bcf161bc72'
    let token = localStorage.getItem("Token")
    const options = {
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type':'application/json'
        }
    }
    let url =  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`
    fetch(url,options)
    .then(response => response.json())
    .then(json=>console.log(json))
    .catch(error=>console.log('Error in fetching mails',error))
}

    return (

        <div>
            {accessToken ? (
                <div>
                    <h1>Access token</h1>
                    <p>Access Token: {accessToken}</p>
                </div>) : (
                <>
                    <button onClick={handleLogin}>Login with google</button>
                    <button onClick={() => getEmailData()}> Get Emails</button>
                    <button onClick={() => fetchMail("18e60656483cce7e")}> Fetch Emails</button>


                </>

            )

            }

        </div>
    )


};
export default Ouath;
