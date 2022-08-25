import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaYoutubeSquare,FaWhatsappSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-brown-700'>
        <div>
            <h1 className='text-1xl font-rs'>Boitumelo.</h1>
            <p className='py-4'>Lorem Ipsum is simply 
            dummy text of the 
            printing and typesetting 
            industry.</p>
            <div className='flex md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaYoutubeSquare size={30}/>
                <FaWhatsappSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-vng text-[30px] text-brown-900'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Indights</li>
                    <li className='py-2 text-sm'>Books</li>
                </ul>
            </div>
            <div>
                <h6 className='font-vng text-[30px] text-brown-900'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Indights</li>
                    <li className='py-2 text-sm'>Books</li>
                </ul>
            </div>
            <div>
                <h6 className='font-vng text-[30px] text-brown-900'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Indights</li>
                    <li className='py-2 text-sm'>Books</li>
                </ul>
            </div>
        </div>
        

    </div>
  )
}

export default Footer