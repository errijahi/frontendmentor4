import React from 'react'
import  iconerror from '../images/icon-error.svg';
import '../css/message.css';

export default function Message() {
    return (
        <div>
            <img className="iconerror" src={iconerror} alt="iconerror"/>
            <p className="errormessage">Please provide a valid email</p>
        </div>
    )
}
