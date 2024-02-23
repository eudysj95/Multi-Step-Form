import React from 'react';
import {useNavigate} from 'react-router-dom';

export const FormStep1 = () => {

  const navegar = useNavigate();

  const next = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;


    let persona = {
      id: new Date().getTime(),
      name,
      email,
      phone
    }

    localStorage.setItem("ultimo", parseInt(persona.id));
    guardarStorage(persona);
    

    navegar("/step2");

  }

  const guardarStorage = persona => {

    let elementos = JSON.parse(localStorage.getItem("personas"));

    if(Array.isArray(elementos)){
    elementos.push(persona);
    }else{
      elementos = [persona];
    }

    localStorage.setItem("personas", JSON.stringify(elementos));

    return elementos;
  }


  return (
    <div className='formStep'>

      <h2>Personal Info</h2>
      <p>Please provide your name, email address and phone number</p>

      <form onSubmit={next}>

        <label className='formLabel'>Name <input type='text' name="name" placeholder='Here your name...' /></label>
        <label className='formLabel'>Email address <input type='email' name="email" placeholder='Here your email...' /></label>
        <label className='formLabel'>Phone Number <input type='number' name="phone" placeholder='Here your phone...' /></label>

        <input type='submit' className='submit' value="Next" />

      </form>
      
    </div>
  )
}
