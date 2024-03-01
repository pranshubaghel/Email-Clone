
import Logo from '../icons/logo_gmail_lockup_default_1x_r2.png';
import Menu from '../icons/menu_black_24dp.svg';
import Headericon from '../icons/search_black_24dp.svg';
import Appicon from '../icons/clear_black_24dp.svg';
import Search from '../icons/arrow_drop_down_black_24dp.svg';
import Info from '../icons/help_outline_black_24dp.svg';
import Setting from '../icons/settings_black_24dp.svg';
import Apps from '../icons/apps_black_24dp.svg';
import Profile from '../img/profile.jpg';

function Header (){
    return (
        <header class="header">

        <div class="header-group">
      
          <div class="icons">
            <button id="header-menu" class="btn header-menu tooltip" data-info="Main menu">
              <img src={Menu} alt="Main menu" class="btn-icon btn-icon-alt"/>
            </button>
          </div>
      
          <a href="#" class="header-logo" >
            <img src={Logo} alt="Gmail"/>
          </a>
      
        </div>
      
        <form class="header-search" action="">
      
          <div class="icons">
            <button id="js-header-search" class="btn btn-nofill tooltip"  data-info="Search">
              <img src={Headericon} alt="Search"class="btn-icon btn-icon-alt"/>
            </button>
          </div>
      
          <input type="search" class="header-search-input" placeholder="Search mail"/>
          
          <div class="icons">
            <button type="reset" class="btn" data-info="Options">
              <img src={Appicon} alt="Options" class="btn-icon btn-icon-alt"/>
            </button>
          </div>
      
          <div class="icons">
            <button id="header-search-options" class="btn tooltip" data-info="Options">
              <img src={Search} alt="Options" class="btn-icon btn-icon-alt"/>
            </button>
          </div>
      
        </form>
      
        <div class="header-group profile" >
      
            <div class="icons">
              <button id="header-info" class="btn">
                <img src={Info} alt="Support" class="btn-icon btn-icon-alt"/>
              </button>
            </div>
      
            <div class="icons">
              <button id="header-settings" class="btn" data-info="Settings">
                <img src={Setting} alt="Settings"  class="btn-icon btn-icon-alt"/>
              </button>
            </div>
      
            <div class="icons">
              <button id="header-apps" class="btn" >
                <img src={Apps} alt="Google apps" class="btn-icon btn-icon-alt"/>
              </button>
            </div>
      
            <div class="icons">
              <button id="header-profile" class="btn tooltip" >
                <img src={Profile} class="btn-icon header-profile"/>
              </button>
            </div>
        </div>
      
      </header>
    )
};
export default Header;