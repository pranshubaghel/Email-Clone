
import useCustom from "../useCustom";
// import Select from '../src/icons/check_box_outline_blank_black_24dp.svg';
// import Drag from '../icons/drag_indicator_black_24dp.svg';
// import NotStarred from '../icons/star_border_black_24dp.svg';
// import Archive from '../icons/archive_black_24dp.svg';
// import delete_black_24dp from '../icons/delete_black_24dp.svg';
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
  const data = useCustom("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:inbox")
  const convertToAMPM = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });
  };
  const deleteMail = async (messageId) =>{
    try {
    let token = localStorage.getItem("Token")
    console.log(token)
      const response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
  });
    
if(response.ok) {
  console.log("email deleted succesfully");
} else {
    console.error("error deleting mails", response);
}
    }
catch(error) {
  console.log("error deleting mails", error);
}
 
}
      return (
        <>
{console.log("Data is ",data)}
<div class="mail">
              {data && data.map((value)=>(<>
                <div class="inbox-message-item">

<div class="checkbox" style={{ marginRight: "-12px" }} >
  <button class="btn">
    {/* <img src={check_box_outline_blank_black_24dp} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" /> */}
  </button>
</div>

<div class="message-group-hidden">
  <button class="btn-alt btn-nofill drag-indicator" >
    {/* <img src={drag_indicator_black_24dp} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" /> */}
  </button>
</div>

<button class="btn star" style={{ margin: "0" }}>
  {/* <img src={Select} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/> */}
</button>

<div class="message-default" >
  {console.log("value is = ",value)}
  <div class="message-sender message-content unread" >
    <span >{value.payload.headers.find(item=>item.name == "From").value}</span>
  </div>

  <div class="message-subject message-content unread">
    <span>{value.payload.headers.find(item=>item.name == "Subject").value}</span>
  </div>

  <div class="message-seperator message-content"> - </div>

  <div class="message-body message-content">
    <span> {value.snippet}</span>
  </div>
  
  <div class="gap message-content" > &nbsp; </div>

  <div class="message-date center-text unread" >
    <span>{convertToAMPM (value.payload.headers.find(item=>item.name == "Date").value)}</span>
  </div>

</div>

<div class="message-group-hidden" >
  <div class="inbox-message-item-options">
    <button class="btn">
      {/* <img src={archive_black_24dp} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn" onClick={()=>deleteMail(value.id)}>
      {/* <img src={delete_black_24dp} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={mark_as_unread_black_24dp} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>

    <button class="btn">
      {/* <img src={access_time_filled_black_24dp} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" /> */}
    </button>
  </div>
</div>
</div>        
              </>))}
              

          </div>
        </>
    )
}
      
export default Inbox;
