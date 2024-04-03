
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GmailHeader from './Components/GmailHeader';
import LeftsideBar from './Components/LeftSideBar';
import AppContainer from './Components/AppContainer';
import Inbox from './Components/Sub-components/Inbox';
import Sent from './Components/Sub-components/Sent';
import GmailBody from './Components/GmailBody';
import Demo from './Components/Sub-components/Demo';



function App() {

  return (
    <>
      <div className="body-wrapper" >
        <Demo/>
         <GmailHeader />
        <LeftsideBar />
        <AppContainer/>
        <Routes>
        <Route path="/" element={<GmailBody params = "" />} />
        <Route path="/Inbox" element={<GmailBody params ="Inbox" />} />
        <Route path="/Sent" element={<GmailBody params = "Sent"/>} />
        <Route path="/Drafts" element={<GmailBody params = "Drafts"/>} />

        
        </Routes> 
        
         <AppContainer/>


      </div>

    </>
  );
}

export default App;
