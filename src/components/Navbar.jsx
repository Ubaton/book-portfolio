import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
  return (
    <div className=''>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='text-4xl font-rs'>Boitumelo.</h1>
      <ul className='hidden md:flex justify-center font-vng text-[35px]'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Books</li>
      </ul>
     
      <div className='hidden md:flex justify-end'>
      <button class="bg-lightbrown-500 hover:bg-brown-500 text-black py-1 px-5 rounded-full">
        Login
      </button>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
         {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>

      <div className={!nav ? 'fixed left-0 top-0 mt-24 w-[60%] border-r font-vng text-[25px] border-r-brown-500 h-full bg-brown-500 ease-in-out duration-500' : 'fixed left-[-100%] top-[10%]'}>
      {/* <h1 className='text-4xl font-rs py-3 m-4'>Boitumelo.</h1> */}
        <ul className='pt-18 p-4 '>
        <li className='p-4 border-b border-lightbrown-500'>Home</li>
        <li className='p-4 border-b border-lightbrown-500'>About</li>
        <li className='p-4 border-b border-lightbrown-500'>Books</li> 
        </ul>

        <div className='flex justify-center'>
        <button className='bg-lightbrown-500 h-10 w-10'>
            Login
        </button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar
