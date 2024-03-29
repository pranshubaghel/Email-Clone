
import useCustom from "../useCustom";
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
const Drafts = () => {
  const data = useCustom("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:Drafts")
  const convertToAMPM = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

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
    <span >{value.payload.headers.find(item=>item.name == "From").value}</span>
  </div>

  <div class="message-subject message-content unread">
    <span>{value.payload.headers.find(item=>item.name == "Subject").value}</span>
  </div>

  <div class="message-seperator message-content"> - </div>

  <div class="message-body message-content">
    <span>{value.snippet}</span>
  </div>

  <div class="gap message-content" > &nbsp; </div>

  <div class="message-date center-text unread" >
    <span>{convertToAMPM(value.payload.headers.find(item=>item.name == "Date").value)}</span>
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

</>))}         
</>
    );
};
export default Drafts;
