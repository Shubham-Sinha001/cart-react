import React from 'react'
import Navbar from './components/Navbar'
import {Routes ,Route} from "react-router-dom"
import Home from './page/Home'
import Cart from './page/Cart'

const App = () => {
  return (
    <div>
      
        <div className='bg-slate-800  '>
          <Navbar/>
        </div>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>

    </div>
  )
};

export default App;
