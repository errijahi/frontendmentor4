import React from 'react'
import image from '../images/icon-error.svg';
import '../css/form.css';

export default function Message() {
    return (
        <div>
            <img className="error-image" src={image} alt="image-error"/>
        </div>
    )
}
