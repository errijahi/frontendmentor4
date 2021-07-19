import React, { useState } from 'react';
import Message from './Message';

import arrow from '../images/icon-arrow.svg';


function Evalidator() {
  const [message, setMessage] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) { 
      setMessage('');
    } else {  
      setMessage(<Message/>);
    }
  };

  return (
      
    <form>
    <div className="errormessage">
      <input
        type="text"
        placeholder="Enter your email"
        className="email-input"
        onChange={validateEmail}
      />
    <button type="submit" ><img className="arrow" src={arrow} alt="arow"/> </button>
        {message}  
    </div>
    </form>
  );
}

export default Evalidator;