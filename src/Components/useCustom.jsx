
import { useEffect, useState } from "react";
function useCustom(apiUrl) {
    const [data,setData] = useState([])

    useEffect(() => {   
      const url = window.location.href
      const token = url.match(/access_token=([^&]+)/)
      if (token) {
        localStorage.setItem("Token",token && token[1])
      }
      getEmailData()
    }, [])
    
    const getEmailData = () => {
      let token = localStorage.getItem("Token")
      console.log("hello", token)
      let url = apiUrl
      const options = {
          method : 'GET',
          headers : {
              'Authorization' : `Bearer ${token}`,
              'Content-Type':'application/json'
          }
      }
      fetch(url,options)
      .then(response => response.json())
      .then(json=>fetchMail(json.messages))
      .catch(error=>console.log('Error in fetching mails',error))
  }
  
  const fetchMail = async (id) => {
  console.log("message id is" ,id)
  // let id = '18e60656483cce7e'
  let token = localStorage.getItem("Token")
  const options = {
      method : 'GET',
      headers : {
          'Authorization' : `Bearer ${token}`,
          'Content-Type':'application/json'
      }
  }
  let maildata = [];
    for(let message_id of id.slice(0,10)){
     let url =  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message_id.id}`
    const response = await fetch(url,options)
    const message_data = await response.json();
    maildata.push(message_data)
    console.log("message data is ==",maildata )
  
  }
  
  console.log("emails data is==", maildata);
  setData(maildata)
  }
    return data 
}

export default useCustom