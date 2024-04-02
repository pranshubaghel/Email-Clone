import React, { useState } from 'react';
import Modal from 'react-modal';
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
  
function Demo() {
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
    const [to,setTo]= useState('');
    const [subject, setSubject] = useState('');
    const [body , setBody] = useState('');

    const handleSendEmail = async () =>{
        const emailData = {
            to : to,
            subject: subject,
            body : body
        };
        let localstorage =''
        let token = localstorage.getItem("Token")
        try {
            const response = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages.send',{
                method: 'POST',
                headers:{
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                raw: btoa(`To: ${emailData.to}\nSubject:}\n\n${emailData.body}`)
                })
            });
            const data = await response.json();
            console.log('Email sent:', data);
            setTo('');
            setSubject('')
            setBody('');
        }
        catch(error){
          console.log('error sending emails',error)
        }
    }

  return (
    <div>
     <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div className='compose-container'>
        <div className='compose-header'>
        <h2>New Message</h2>
        <button onClick={handleSendEmail}>Send</button>
        </div>
        <div className='compose-form'>
            <input
            type = "text"
            placeholder = "To"
            value = {to}
            onchange={(e) => setTo(e.target.value)}
            />
          <input
            type = "text"
            placeholder = "Subject"
            value = {subject}
            onchange={(e) => setSubject(e.target.value)}
            />
            <textarea
            placeholder = "Message"
            value = {body}
            onChange = {(e) => setBody(e.target.value)}
            ></textarea>
          
        </div>
      </div>
      </Modal>
    </div>
    </div>
  )
}

export default Demo;