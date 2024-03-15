import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import AppContainer from './Components/AppContainer';
import Starred from './Components/Sub-components/Starred';
import Snoozed from './Components/Sub-components/Snoozed';
import Sent from './Components/Sub-components/Sent';
import Drafts from './Components/Sub-components/Drafts';
import Inbox from './Components/Sub-components/Inbox';




function App() {
  return (
    <>
      
      <div class="body-wrapper" >

        <Header />
        {/* <InboxMsg /> */}
        <LeftSideBar />
        <AppContainer /> 
         <Routes>
        <Route path="/inbox" element = {<Inbox/>}/>
        <Route path="/starred" element={<Starred/>} />
        <Route path="/snoozed" element={<Snoozed/>} />
        <Route path="/sent" element={<Sent/>} />
        <Route path="/drafts" element={<Drafts/>} />
        </Routes> 
        

      </div>
    </>
  );
}

export default App;
