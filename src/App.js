import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import InboxMsg from './Components/InboxMsg';
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
        <InboxMsg />
        <LeftSideBar />
        <AppContainer /> 
         <Routes>
        <Route path="/Inbox" element={<Inbox/>} />
        <Route path="/Starred" element={<Starred/>} />
        <Route path="/Snoozed" element={<Snoozed/>} />
        <Route path="/Sent" element={<Sent/>} />
        <Route path="/Drafts" element={<Drafts/>} />
        </Routes> 
        

      </div>
    </>
  );
}

export default App;
