import AppContainer from "./AppContainer";
import Header from "./Header";
import Inbox from "./Inbox";
import LeftSideBar from "./LeftSideBar";

function Main (){
    return (
        
<div class="body-wrapper">
<LeftSideBar/>
<Header/>
<Inbox/>
<AppContainer/>

</div>
    )
};
export default Main;