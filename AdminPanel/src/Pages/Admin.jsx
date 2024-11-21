import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../Components/AddProduct/AddProduct'
import RemoveProduct from '../Components/RemoveProduct/RemoveProduct'
const Admin = () => {
  return (
    <>
    <Sidebar></Sidebar>
    <Routes>
      <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
      <Route path='/allproducts' element={<RemoveProduct></RemoveProduct>}></Route>
    </Routes>
    </>

    
  )
}

export default Admin