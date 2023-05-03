import React from 'react';
import './Formulaire.css';

const Formulaire = () => {
  return (
    <div className='Fourma'>
    <h1 className='title'><span>Registration</span>Form</h1>
    <input id="fname" type="text" placeholder="First name" required / >
    <input id="email" type="email" placeholder="Email Address" required/>
    <input id="email" type="email" placeholder="Email Address" required/>
    <input id="email" type="email" placeholder="Email Address" required/>
    </div>
  );
}

export default Formulaire;
