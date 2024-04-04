import { Link } from "react-router-dom";
import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
function LeftSideBar ({data}){
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendEmail = async () => {
    const emailData = {
      to: to,
      subject: subject,
      body: body
    };
    let token = localStorage.getItem("Token")
    try {
      const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          raw: btoa(`To: ${emailData.to}\nSubject: ${emailData.subject}\n\n${emailData.body}`)
        })
      });
      const data = await response.json();
      console.log('Email sent:', data);
      // Reset the form fields after sending email
      setTo('');
      setSubject('');
      setBody('');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

    return (
        <section class="left-sidebar">

        <div class="left-sidebar-compose">
          <button onClick={openModal} class="sidebar-btn-compose">
            <img alt="Compose a new email" class="sidebar-btn-compose-icon"/>
            <span class="sidebar-btn-compose-title">Compose</span>
          </button>
        </div>
        <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button onClick={closeModal}>close</button>
        <div className="compose-container">
      <div className="compose-header">
        <h2>New Message</h2>
        <button onClick={handleSendEmail}>Send</button>
      </div>
      <div className="compose-form">
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
    </div>
      </Modal>
    </div>
        <div class="left-siderbar-label">
          <ul class="labels category-item-list">
      
           <Link to={"/Inbox"}> <li class="category-item active">
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>
                <span class="category-item-title">Inbox</span>
              </div>
              <span class="category-item-number" >32</span>
            </li>
            </Link>
      
           <Link to={"/Starred"}><li class="category-item">
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span class="category-item-title">Starred</span>
              </div>
              <span class="category-item-number">5</span>
            </li>
            </Link>
      
            <Link to={"/Snoozed"}><li class="category-item">
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59 l3.71,3.71L15.29,16.71z"/></g></svg>
                <span class="category-item-title">Snoozed</span>
              </div>
              <span class="category-item-number"></span>
            </li>
            </Link>
      
            <Link to={"/Sent"}><li class="category-item">
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                <span class="category-item-title">Sent</span>
              </div>
              <span class="category-item-number"></span>
            </li>
            </Link>
      
            <Link to={"/Drafts"}><li class="category-item">
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/></svg>
                <span class="category-item-title">Drafts</span>
              </div>
              <span class="category-item-number"></span>
            </li>
            </Link>
      
            <ul class="category-item category-item-sub">
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                <span class="category-item-title">More</span>
              </div>
      
            </ul>
      
          </ul>
        </div>
      
        <div class="left-sidebar-connect" >
      
          <div class="connect meets" >
            <div class="drag-btn-container">
              <button class="drag-btn"></button>
            </div>
      
            <span class="category-title" >Meets</span>
      
            <div class="category-item" >
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                <span class="category-item-title" >New meeting</span>
              </div>
            </div>
            
            <div class="category-item" >
              <div>
                <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/></svg>
                <span class="category-item-title" >Join a meeting</span>
              </div>
            </div>
      
          </div>
          
          <div class="connect hangouts" >
      
            <span class="category-title" >Hangouts</span>
      
            <div class="hangouts-img" >
              <img class="category-img" src="/app/assets/icons/hangouts-common.png" alt=""/>
            </div>
      
            <div class="category-item-btn">
              <button class="sidebar-btn-lg">
                Sign in
              </button>
            </div>
      
            <div class="connect-info">
              <span>Signing in will sign you into Hangouts across Google</span>
              <a href="#" class="connect-link">
              Learn more
              </a>
            </div>
      
          </div>
      
        </div>
      
        <div class="left-sidebar-footer">
      
          <button class="btn btn-sidebar">
            <img src="app/assets/icons/person_black_24dp.svg" class="btn-icon-sidebar btn-icon-sm"/>
          </button>
      
          <button class="btn btn-sidebar active">
            <img src="app/assets/icons/hangout_black_20dp.png" class="btn-icon-sidebar btn-icon-sm active"/>
          </button>
      
        </div>
      
      </section>
    )
};
export default LeftSideBar;