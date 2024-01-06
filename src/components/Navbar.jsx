import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux"

const Navbar = () => {

    const {cart} = useSelector((state) => state);

  return (
    <div>

        <div className=' w-full fixed flex  justify-between item-center top-0 mb-40 bg-slate-800  '>
    
            <NavLink to="/">
                <div className='ml-[200px] '  >
                     <img src="./logo.png" className='h-16' />
                 </div>
             </NavLink>
    
            <div className='flex items-center font-medium
             text-slate-100  space-x-6 mr-[200px]'  >
                <NavLink to="/">
                     <p>Home</p>
                </NavLink>
    
                <NavLink to="/cart">

                    <div className='relative' >

                        <FaShoppingCart   className='text-2xl'/>

                        {
                            cart.length > 0 &&

                                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white' >
                                    {cart.length}</span>
                        }
                    </div>
    
                </NavLink>
    
           
            </div>
    
    
          
        </div>
    </div>
  )
}

export default Navbar

// h-16 mx-auto max-w-6xl
