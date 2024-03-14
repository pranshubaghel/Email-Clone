import Calendr  from '../icons/calendar_2020q4_2x.png';
import Keep from '../icons/keep_2020q4v3_2x.png';
import Tasks from '../icons/tasks2_2x.png';
import Contact from '../icons/contacts_2x.png';
import EmptyAlt from '../icons/add_black_24dp.svg';
import AltBtn from '../icons/chevron_right_black_24dp.svg';

function AppContainer (){
    return(
        <section class="app-container" >

        <div class="app-group">
      
          <div class="app-item">
            <button class="btn">
              <img src={Calendr} alt="Calendar" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={Keep}alt="Keep" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={Tasks} alt="Tasks" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={Contact} alt="Contacts" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="btn btn-nofill" >
            <div class="hrt-rule btn-icon-sm"></div>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={EmptyAlt}alt="" class="btn-icon btn-icon-sm btn-icon-disabled"/>
            </button>
          </div>
      
        </div>
      
        
        <button class="btn">
          <img src={AltBtn}alt="" class="btn-icon btn-icon-sm btn-icon-alt"/>
        </button>
      
      </section>
    )
};
export default AppContainer;