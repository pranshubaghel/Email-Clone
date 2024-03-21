
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GmailHeader from './Components/GmailHeader';
import LeftsideBar from './Components/LeftSideBar';
import AppContainer from './Components/AppContainer';
import Inbox from './Components/Sub-components/Inbox';
import Sent from './Components/Sub-components/Sent';
import GmailBody from './Components/GmailBody';
// import Drafts from './Components/Sub-components/Drafts';
// import Snoozed from './Components/Sub-components/Snoozed';
// import Starred from './Components/Sub-components/Starred';



function App() {

  return (
    <>
      <div className="body-wrapper" >
        {/* <Ouath/> */}
        <GmailHeader />
        <LeftsideBar />
        <AppContainer/>
        <Routes>
        <Route path="/" element={<GmailBody params = "" />} />
        <Route path="/Inbox" element={<GmailBody params ="Inbox" />} />
        <Route path="/Sent" element={<GmailBody params = "Sent"/>} />
        {/* <Route path= "/Starred" element={<GmailBody params = "Starred"/>}/>
        <Route path= "/Drafts" element = {<GmailBody params = "Drafts"/>}/>
        <Route path= "/Snoozed" element = {<GmailBody params = "Snoozed"/>}/> */}
        </Routes> 
        {/* <Rightside/> */}
        <AppContainer/>



      </div>

    </>
  );
}

export default App;
