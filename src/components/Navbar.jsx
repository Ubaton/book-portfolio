import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
  return (
<>
    <div className='bg-brown-500 mx-10 rounded-full drop-shadow-sm'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='text-4xl font-rs cursor-pointer '>Boitumelo.</h1>
      <ul className='hidden md:flex justify-center font-vng text-[35px]'>
        <li className='p-4 cursor-pointer hover:text-brown-900'><a href="Home">Home</a></li>
        <li className='p-4 cursor-pointer hover:text-brown-900'><a href="About">About</a></li>
        <li className='p-4 cursor-pointer hover:text-brown-900'><a href="Books">Books</a></li>
      </ul>
     
      <div className='hidden md:flex justify-end z-10 w-44 rounded'>
        <button  className="bg-lightbrown-500 hover:bg-brown-600 text-black py-1 px-5 rounded-full drop-shadow-md font-medium text-sm text-center inline-flex items-center transition-all">
            Login
        </button>
      </div>
      
      <div onClick={handleNav} className='block md:hidden'>
         {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>

      <div className={nav ? 'bg-brown-500 h-120 py-4 rounded-md fixed left-0 top-[2px] mt-24 w-[50%] text-[25px] ease-in-out duration-500' : 'fixed left-[-100%] top-[-10%]'}>
      
        <ul className='pt-18 p-4 font-vng'>
          <li className='p-4 border-b border-lightbrown-500 cursor-pointer hover:text-brown-900'><a href="#Home">Home</a></li>
          <li className='p-4 border-b border-lightbrown-500 cursor-pointer hover:text-brown-900'><a href="#About">About</a></li>
          <li className='p-4 border-b border-lightbrown-500 cursor-pointer hover:text-brown-900'><a href="#Books">Books</a></li> 
        </ul>

        <div className='flex justify-center cursor-pointer'>
          <button className="bg-lightbrown-500 text-[18px] cursor-pointer hover:bg-brown-500 text-black py-1 px-[15px] rounded-full drop-shadow-lg transition-all">
            Login
          </button>
        </div>

      </div>
    </div>

    </div>

</>

  )
}

export default Navbar;
