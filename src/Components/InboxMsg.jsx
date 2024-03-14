import Menu from '../icons/check_box_outline_blank_black_24dp.svg';
import Menubtn from '../icons/arrow_drop_down_black_24dp.svg';
import Refresh from '../icons/refresh_black_24dp.svg';
import More from '..//icons/more_vert_black_20dp.png';
import Newer from '../icons/chevron_left_black_24dp.svg';
import Older from '../icons/chevron_right_black_24dp.svg';
import Inputtools from '../icons/keyboard_black_24dp.svg';
import SelectInput from '../icons/arrow_drop_down_black_24dp.svg';
import Select from '../icons/check_box_outline_blank_black_24dp.svg';
import Drag from '../icons/drag_indicator_black_24dp.svg';
import NotStarred from '../icons/star_border_black_24dp.svg';
import Archive from '../icons/archive_black_24dp.svg';
import Delete from '../icons/delete_black_24dp.svg';
import MarkAs from '../icons/mark_as_unread_black_24dp.svg';
import SnooxeBtn from '../icons/access_time_filled_black_24dp.svg';
import ClassSelect from '../icons/check_box_outline_blank_black_24dp.svg';
import ClassDrag from '../icons/drag_indicator_black_24dp.svg';
import ClassStarred from '../icons/star_border_black_24dp.svg';
import ClassArchive from '../icons/archive_black_24dp.svg';
import DeleteBtn from '../icons/delete_black_24dp.svg';
import MarkRead from '../icons/mark_as_unread_black_24dp.svg';
import SnoozeBtn from '../icons/access_time_filled_black_24dp.svg';
import SelectedBtn from '../icons/check_box_outline_blank_black_24dp.svg';
import DragBtn from '../icons/drag_indicator_black_24dp.svg';
import Astarred from '../icons/star_border_black_24dp.svg';
import BtnArchie from '../icons/archive_black_24dp.svg';
import BtnDelet from '../icons/delete_black_24dp.svg';
import BtnUnread from '../icons/mark_as_unread_black_24dp.svg';
import Snooje from '../icons/access_time_filled_black_24dp.svg';
import Googlle from '../icons/open_in_new_black_24dp.svg';

function Inbox() {
  return (
    <section class="inbox">


      <div class="inbox-menu">

        <div class="inbox-menu-group">

          <div class="inbox-btn-group">
            <button class="btn-alt">
              <img src={Menu} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
            </button>

            <button class="btn-sm btn-alt">
              <img src={Menubtn} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
            </button>
          </div>

          <button class="btn">
            <img src={Refresh} alt="Refresh" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover" />
          </button>

          <button class="btn">
            <img src={More} alt="More" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover" />
          </button>

        </div>

        <div class="inbox-menu-group">

          <button class="btn-lg btn-alt" >
            <div class="inbox-menu-pagination">
              1-50 of 262
            </div>
          </button>
         
          <div class="inbox-menu-pagination-btn">
            <button class="btn btn-nofill btn-pagination">
              <img src={Newer} alt="Newer" class="btn-icon-sm btn-icon-alt" />
            </button>

            <button class="btn btn-pagination">
              <img src={Older} alt="Older" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
            </button>
          </div>

          <div class="inbox-btn-group" >
            <button class="btn-alt">
              <img src={Inputtools} alt="Input tools on/off" class="btn-icon-sm btn-icon-alt" />
            </button>

            <button class="btn-sm btn-alt">
              <img src={SelectInput}alt="Select input tool" class="btn-icon-sm btn-icon-alt" />
            </button>
          </div>

        </div>

      </div>

      <div class="inbox-container">

        <div class="inbox-category">

          <div id="ctg-primary" class="inbox-category-item active">
            <svg class="inbox-category-icon btn-icon btn-icon-sm btn-icon-alt active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" /></svg>
            <span class="inbox-category-title">Primary</span>
          </div>

          <div class="inbox-category-item">
            <svg class="inbox-category-icon btn-icon btn-icon-alt btn-icon-sm" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
            <span class="inbox-category-title">Social</span>
          </div>

          <div class="inbox-category-item">
            <svg class="inbox-category-icon btn-icon btn-icon-alt btn-icon-sm" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" /></svg>
            <span class="inbox-category-title">Promotions</span>
          </div>

        </div>



        <div class="content">
          <div class="mail">

            <div class="inbox-message-item">

              <div class="checkbox">
                <button class="btn">
                  <img src={Select} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                </button>
              </div>

              <div class="message-group-hidden">
                <button class="btn-alt btn-nofill drag-indicator" >
                  <img src={Drag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                </button>
              </div>

              <button class="btn star">
                <img src={NotStarred} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
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
                    <img src={Archive}alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={Delete}alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={MarkAs} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={SnooxeBtn} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>
                </div>
              </div>

            </div>

            <div class="inbox-message-item  message-default-unread">

              <div class="checkbox">
                <button class="btn">
                  <img src={ClassSelect} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                </button>
              </div>

              <div class="message-group-hidden">
                <button class="btn-alt btn-nofill drag-indicator" >
                  <img src={ClassDrag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                </button>
              </div>

              <div >
                <button class="btn star">
                  <img src={ClassStarred}alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
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
                    <img src={ClassArchive}alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={DeleteBtn}alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={MarkRead} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={SnoozeBtn} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>
                </div>
              </div>

            </div>

            <div class="inbox-message-item  message-default-unread">

              <div class="checkbox">
                <button class="btn">
                  <img src={SelectedBtn} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                </button>
              </div>

              <div class="message-group-hidden">
                <button class="btn-alt btn-nofill drag-indicator" >
                  <img src={DragBtn} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                </button>
              </div>

              <div >
                <button class="btn star">
                  <img src={Astarred} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                </button>
              </div>

              <div class="message-default" >

                <div class="message-sender message-content" >
                  <span >Spotify</span>
                </div>

                <div class="message-subject message-content">
                  <span>🎉 💰 New Job who this? </span>
                </div>

                <div class="message-seperator message-content"> - </div>

                <div class="message-body message-content">
                  <span> Hello, Habib! We are glad to break the news to you, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                </div>

                <div class="gap message-content" > &nbsp; </div>

                <div class="message-date center-text" >
                  <span>2:01 PM</span>
                </div>

              </div>

              <div class="message-group-hidden" >
                <div class="inbox-message-item-options">
                  <button class="btn">
                    <img src={BtnArchie} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={BtnDelet}alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={BtnUnread}alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button class="btn">
                    <img src={Snooje} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>
                </div>
              </div>

            </div>

          </div>



          <footer class="activity">
            <div class="footer-container">

              <div class="footer-item">
                <span class="progressbar" ></span>
                <a href="#" class="footer-link footer-text-sm">


                  <div class="footer-group">
                    <span> 0 GB of 15 GB used</span>
                    <span>
                      <img src={Googlle}alt="Google drive storage" class="btn-icon-alt btn-icon-sm" />
                    </span>
                  </div>

                </a>
              </div>

              <div class="footer-item">
                <a href="#`" class="footer-link footer-text-sm">Terms</a>
                ·
                <a href="#" class="footer-link footer-text-sm">Privacy</a>
                ·
                <a href="#" class="footer-link footer-text-sm">Program Policies</a>
              </div>

              <div class="footer-item">
                <span class="footer-text-sm" >Last activity: 37 minutes ago</span>

                <div class="footer-group">
                  <a href="#" class="footer-link footer-text-sm">Details</a>
                </div>
              </div>

            </div>
          </footer>

        </div>

      </div>

    </section>
  )
};
export default Inbox;