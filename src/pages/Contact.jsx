import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/Contact.css'

const Contact = () => {
    const [sentMessageSuccess, setSentMessageSuccess] = useState(false);
    const form = useRef(null);


    const timeoutToResetMessageSuccess = () => {
        setSentMessageSuccess(true);
        setTimeout(() => {
            setSentMessageSuccess(false);
        }, 2000)
    };


    const handleInputChangeDesign = (e) => {
        const elem = e.target
        if (e.currentTarget.value.trim().length === 0) {
            elem.classList.remove('filled');
        } else elem.classList.add('filled');
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_u02o7fv', 'template_r6ckghy', form.current, 'xbuXSogMW29neZZQc')
            .then((result) => {
                document.querySelector('#user_name').value = '';
                document.querySelector('#user_name').classList.remove('filled');
                document.querySelector('#user_email').value = '';
                document.querySelector('#user_email').classList.remove('filled');
                document.querySelector('#message').value = '';
                document.querySelector('#message').classList.remove('filled');
                timeoutToResetMessageSuccess();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact'>
            <h1 className="section-title">
                Contact Me
            </h1>

            <div className='form-container'>
                <form id='contact-form' ref={form} onSubmit={sendEmail}>
                    <div className="input-label-section">
                        <label htmlFor='user_name'>
                            Name
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </label>
                        <input type="text" name="user_name" id='user_name' onChange={(e) => handleInputChangeDesign(e)} required placeholder={'John Doe'} />
                    </div>

                    <div className="input-label-section">
                        <label htmlFor='user_email'>
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </label>
                        <input type="email" name="user_email" id='user_email' onChange={(e) => handleInputChangeDesign(e)} required placeholder={'JohnDoe@gmail.com'} />
                    </div>

                    <div className="input-label-section">
                        <label htmlFor='message'>
                            Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>

                        </label>
                        <textarea name="message" id='message' required rows={5} onChange={(e) => handleInputChangeDesign(e)} placeholder={'Enter Message...'} />
                    </div>

                    {!sentMessageSuccess ?
                        <button type="submit" value="Send" id='contactButton'>
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                        :
                        <button type="submit" value="Send" id='contactButton'>
                            Message Sent!
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>

                        </button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact