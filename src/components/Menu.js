import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className='menu'>

        <div className='containerMenu'>
            <NavLink to="/list" className='logo'>1</NavLink>
            <div className='cajita'>Home</div>
        </div>

        <div className='containerMenu'>
        <NavLink to="step1" className='logo'>2</NavLink>
            <div className='cajita'>Step1</div>
        </div>

        <div className='containerMenu'>
        <NavLink to="step2" className='logo'>3</NavLink>
            <div className='cajita'>Step2</div>
        </div>

    </div>
  )
}
