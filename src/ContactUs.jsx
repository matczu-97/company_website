// ContactUs.js

import React, { useState} from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';


const ContactUs = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    
    const templateParameters ={
      from_name: fullName,
      to_name:'Robert',
      from_email: email,
      from_phone: phoneNumber,
      message: `Hello ${fullName} whould like you to call him at ${phoneNumber}
      his email is ${email}`
    }

    emailjs.send(serviceId, templateID, templateParameters, publicKey)
    .then((response) => {
      console.log("Email sent",response);
      setFullName('');
      setEmail('');
      setPhoneNumber('');
    })
    .catch((error) => {
      console.log("Error in sending email",error.text);
    });

    console.log('Form submitted:', { fullName, email, phoneNumber });

  };

  return (
    <div className="contact-us" id ="contactUs">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]*"
            inputMode="tel"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
