import React from 'react'
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Planted from './Pages/Planted';
import Pond from './Pages/Pond';
import Decorative from './Pages/Decorative';
import Marine from './Pages/Marine';
import { Routes,Route} from 'react-router-dom';
import InnerDisplay from './Pages/InnerDisplay/InnerDisplay';
import All from './Pages/All';
import Form from './Components/Header/Form';
import { AuthProvider } from './contexts/authContext';
import Register from './Components/Header/Register';
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
        <Route path='/all' element={<All/>}></Route>

        <Route path=':productID' element={<InnerDisplay />} />

        <Route path='/product/:productID' element={<InnerDisplay/>}></Route>

      </Routes>
      <AuthProvider>
            <Routes>
        <Route path='/login' element={<Form/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
              
            </Routes>
        </AuthProvider>
    </div>
  )
}

export default App