import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
  return (
    <div className='bg-brown-500 mx-10 rounded-full drop-shadow-sm'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='text-4xl font-rs text-black'>Boitumelo.</h1>
      <ul className='hidden md:flex justify-center font-vng text-[35px]'>
        <li className='p-4 hover:text-brown-900'>Home</li>
        <li className='p-4 hover:text-brown-900'>About</li>
        <li className='p-4 hover:text-brown-900'>Books</li>
      </ul>
     
      <div className='hidden md:flex justify-end'>
      <button className="bg-lightbrown-500 hover:bg-brown-600 text-black py-1 px-5 rounded-full drop-shadow-md">
        Login
      </button>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
         {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>

      <div className={nav ? 'fixed left-0 top-0 mt-24 w-[60%] border-r text-[25px] border-r-brown-500 h-full bg-brown-500 ease-in-out duration-500' : 'fixed left-[-100%] top-[10%]'}>
      {/* <h1 className='text-4xl font-rs py-3 m-4'>Boitumelo.</h1> */}
        <ul className='pt-18 p-4 font-vng'>
        <li className='p-4 border-b border-lightbrown-500'>Home</li>
        <li className='p-4 border-b border-lightbrown-500'>About</li>
        <li className='p-4 border-b border-lightbrown-500'>Books</li> 
        </ul>

        <div className='flex justify-center'>
          <button className="bg-lightbrown-500 text-[18px] hover:bg-brown-500 text-black py-[5px] px-[20px] rounded-full drop-shadow-lg">
            Login
          </button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar
