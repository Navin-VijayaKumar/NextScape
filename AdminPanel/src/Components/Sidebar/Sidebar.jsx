import React from 'react'
import './Sidebar.css'
import c12 from '../AssertsAdmin/c12.png'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <div className="admin-slider">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}></Link>
        <div className="admin-slider-cart">
            <img src={c12}></img>
            <p>Add Product</p>
        </div>
    </div>
    </>
  )
}

export default Sidebar