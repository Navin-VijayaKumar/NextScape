import React from 'react'
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Planted from './Pages/Planted';
import Pond from './Pages/Pond';
import Decorative from './Pages/Decorative';
import Marine from './Pages/Marine';
import { Routes,Route } from 'react-router-dom';
import InnerDisplay from './Pages/InnerDisplay/InnerDisplay';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pond' element={<Pond></Pond>}></Route>
        <Route path='/planted' element={<Planted/>}></Route>
        <Route path='/decorative' element={<Decorative/>}></Route>
        <Route path='/marine' element={<Marine/>}></Route>
        <Route path=':productID' element={<InnerDisplay />} />

        <Route path='/product/:productID' element={<InnerDisplay/>}></Route>

      </Routes>
    </div>
  )
}

export default App