import React from 'react'
import {useNavigate} from 'react-router-dom';

export const FormStep2 = () => {

  const navegar = useNavigate();


  const finish = e => {
    e.preventDefault();

    let personas = JSON.parse(localStorage.getItem("personas"));
    let indice = parseInt(localStorage.getItem("ultimo"));

    let ultimaPersona = personas.filter(persona => persona.id === indice);

    let id = ultimaPersona[0].id;
    let name = ultimaPersona[0].name;
    let email = ultimaPersona[0].email;
    let phone = ultimaPersona[0].phone;
    let degree = e.target.degree.value;
    let profession =e.target.profession.value;
    

    let nuevoArray = personas.filter(persona => persona.id !== indice);

    let nuevoObjeto = {
      id,
      name,
      email,
      phone,
      degree,
      profession
    };

    nuevoArray.push(nuevoObjeto);

    localStorage.setItem("personas", JSON.stringify(nuevoArray));

    navegar('/list');

  }

  return (
    <div className='formStep'>

      <h2>Laboral Info</h2>
      <p>Please provide your academic degree and profession</p>

      <form onSubmit={finish}>

        <label className='formLabel'>Academic Degree <input type='text' name="degree" placeholder='Here your academic degree...' /></label>
        <label className='formLabel'>Profession <input type='text' name="profession" placeholder='Here your profesion...' /></label>

        <input type='submit' className='finish' value="Finish" />

      </form>
      
    </div>
  )
}
