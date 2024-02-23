import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const List = () => {

  const [listado, setListado] = useState([]);

  useEffect(() => {
    conseguirStorage();
  }, [])

  const navegar = useNavigate();

  const conseguirStorage = () => {
    let personas = JSON.parse(localStorage.getItem("personas"));
    setListado(personas);
  }

  return (
    <div className='list'>

      <h1>List</h1>

      {listado !==null && <button className="submit listSubmit" onClick={() => navegar("/step1")}>
        Registrarse
    </button>}

        {listado !==null ? listado.map(persona => {
          
          return(
            <article key={persona.id} className='article'>
              <label>Nombre: {persona.name}</label><br/>
              <label>Emal: {persona.email}</label><br/>
              <label>Teléfono: {persona.phone}</label><br/>
              <label>Grado de instrucción: {persona.degree}</label><br/>
              <label>Ámbito Laboral: {persona.profession}</label><br/>
            </article>
          );
          
        })
        : <><h2>Not Persons registered yet</h2>
          <button className='submit' onClick={() => navegar("/step1")}>Register Now!</button></>
      }

      {/*<button className="submit" onClick={() => navegar("/step1")}>
        Registrarse
    </button>*/}
        

    </div>
  )
}
