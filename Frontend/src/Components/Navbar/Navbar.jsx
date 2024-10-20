import React from 'react';
import './Navbar.css';
import logo1 from '../Asserts1/logo1.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='all'>
      <div className="title">

      <img src={logo1} alt='Logo' />
      <h2>Next Scape</h2>
      </div>
      <ul>
       <Link to='/'><li>Home</li></Link> 
       <Link to='/pond'> <li>Pond</li></Link> 
       <Link to='/planted'> <li>Planted</li></Link> 
       <Link to='/decorative'> <li>Decorative</li></Link> 
       <Link to='/marine'> <li>Marine</li></Link> 
       
       
       
       
      </ul>
      <button className='button'>Login</button>
    </div>
  );
};

export default Navbar;
