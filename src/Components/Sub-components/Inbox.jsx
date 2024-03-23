import React, { useState } from "react";
import { useEffect} from "react";
// import Select from '../icons/check_box_outline_blank_black_24dp.svg';
// import Drag from '../icons/drag_indicator_black_24dp.svg';
// import NotStarred from '../icons/star_border_black_24dp.svg';
// import Archive from '../icons/archive_black_24dp.svg';
// import Delete from '../icons/delete_black_24dp.svg';
// import MarkAs from '../icons/mark_as_unread_black_24dp.svg';
// import SnooxeBtn from '../icons/access_time_filled_black_24dp.svg';
// import ClassSelect from '../icons/check_box_outline_blank_black_24dp.svg';
// import ClassDrag from '../icons/drag_indicator_black_24dp.svg';
// import ClassStarred from '../icons/star_border_black_24dp.svg';
// import ClassArchive from '../icons/archive_black_24dp.svg';
// import DeleteBtn from '../icons/delete_black_24dp.svg';
// import MarkRead from '../icons/mark_as_unread_black_24dp.svg';
// import SnoozeBtn from '../icons/access_time_filled_black_24dp.svg';
// import SelectedBtn from '../icons/check_box_outline_blank _black_24dp.svg';
// import DragBtn from '../icons/drag_indicator_black_24dp.svg';
// import Astarred from '../icons/star_border_black_24dp.svg';
// import BtnArchie from '../icons/archive_black_24dp.svg';
// import BtnDelet from '../icons/delete_black_24dp.svg';
// import BtnUnread from '../icons/mark_as_unread_black_24dp.svg';
// import Snooje from '../icons/access_time_filled_black_24dp.svg';
const Inbox = () => {
  const [data,setData] = useState([])
  useEffect(() => {   
    const url = window.location.href
    const token = url.match(/access_token=([^&]+)/)
    localStorage.setItem("Token",token && token[1])
    getEmailData()
  }, [])

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
// id.slice(0,10).map((value,index)=>{
  for(let message_id of id.slice(0,10)){
  // console.log("value is ", value.id)
  // console.log("index", index)
   let url =  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message_id.id}`
  const response = await fetch(url,options)
  const message_data = await response.json();
  maildata.push(message_data)
  console.log("message data is ==",maildata )

}

console.log("emails data is==", maildata);
setData(maildata)
}
    return (
<>
{console.log("data is ==", data)}
{data && data.map((value) =>(<>
  <div class="inbox-message-item">

<div class="checkbox">
  <button class="btn">
    {/* <img src={Select} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" /> */}
  </button>
</div>

<div class="message-group-hidden">
  <button class="btn-alt btn-nofill drag-indicator" >
    {/* <img src={Drag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" /> */}
  </button>
</div>

<button class="btn star">
  {/* <img src={NotStarred} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" /> */}
</button>

<div class="message-default" >

  <div class="message-sender message-content unread" >
    <span >Cascadom</span>
  </div>

  <div class="message-subject message-content unread">
    <span>Dev Horror Stories: 👻 2000 lines of inline styles</span>
  </div>

  <div class="message-seperator message-content"> - </div>

  <div class="message-body message-content">
    <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
  </div>

  <div class="gap message-content" > &nbsp; </div>

  <div class="message-date center-text unread" >
    <span>12:09 AM</span>
  </div>

</div>

<div class="message-group-hidden">
  <div class="inbox-message-item-options">
    <button class="btn">
      {/* <img src={Archive}alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={Delete}alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={MarkAs} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={SnooxeBtn} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>
  </div>
</div>

</div>

<div class="inbox-message-item  message-default-unread">

<div class="checkbox">
  <button class="btn">
    {/* <img src={ClassSelect} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" /> */}
  </button>
</div>

<div class="message-group-hidden">
  <button class="btn-alt btn-nofill drag-indicator" >
    {/* <img src={ClassDrag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" /> */}
  </button>
</div>

<div >
  <button class="btn star">
    {/* <img src={ClassStarred}alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" /> */}
  </button>
</div>

<div class="message-default" >

  <div class="message-sender message-content" >
    <span >Mr. President</span>
  </div>

  <div class="message-subject message-content">
    <span>Thanks for Saving the World</span>
  </div>

  <div class="message-seperator message-content"> - </div>

  <div class="message-body message-content">
    <span> Party at my crib next weekend, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
  </div>

  <div class="gap message-content" > &nbsp; </div>

  <div class="message-date center-text" >
    <span>4:23 PM</span>
  </div>

</div>

<div class="message-group-hidden" >
  <div class="inbox-message-item-options">
    <button class="btn">
      {/* <img src={ClassArchive}alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={DeleteBtn}alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={MarkRead} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={SnoozeBtn} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>
  </div>
</div>

</div>

<div class="inbox-message-item  message-default-unread">

<div class="checkbox">
  <button class="btn">
    {/* <img src={SelectedBtn} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" /> */}
  </button>
</div>

<div class="message-group-hidden">
  <button class="btn-alt btn-nofill drag-indicator" >
    {/* <img src={DragBtn} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" /> */}
  </button>
</div>

<div >
  <button class="btn star">
    {/* <img src={Astarred} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" /> */}
  </button>
</div>

<div class="message-default" >

  <div class="message-sender message-content" >
    <span >{value.snippet}</span>
  </div>

  <div class="message-subject message-content">
    <span></span>
  </div>

  <div class="message-seperator message-content"> - </div>

  <div class="message-body message-content">
    <span></span>
  </div>

  <div class="gap message-content" > &nbsp; </div>

  <div class="message-date center-text" >
    <span></span>
  </div>

</div>

<div class="message-group-hidden" >
  <div class="inbox-message-item-options">
    <button class="btn">
      {/* <img src={BtnArchie} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={BtnDelet}alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={BtnUnread}alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={Snooje} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>
  </div>
</div>

</div>

</>))}         
</>
    );
};
export default Inbox;
