import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import { validateEmail } from '../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xzhxq34', 'template_otl845p', form.current, 'S0FmQ5uTOn6TyOpDY')
        .then((result) => {
            console.log(result.text);
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        });
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
            }
            }
        }  
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    

    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input type='text' defaultValue={name} onBlur={handleChange} name="name" placeholder="Name" required />
                <input type='email' defaultValue={email} onBlur={handleChange} name="email" placeholder="Email" required />
                <textarea name="message" defaultValue={message} onBlur={handleChange} placeholder='Message Here' />
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                <input type='submit' value='send' />
                
            </form>     
            <div>
                {/* <a href = "https://github.com/Wizzle13/gym-ecommerce" target = "_blank">Github</a> */}
            </div>       
        </div>
    )
}

export default Contact;
