import React from 'react'
import avatar from '../images/avatar.png'

const Reviews = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-rose-500'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl border border-rose-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white]' src={avatar} alt="/"/>
                <h2 className=' text-2xl font-blod text-center py-8 font-vng text-[40px] text-white'>Username01</h2>
                <p className='text-center text-2xl text-white'>Lorem Ipsum is simply 
                dummy text of the 
                printing and typesetting 
                industry. Lorem Ipsum has
                been the industry's 
                standard dummy text 
                ever since the 1500s, 
                when an
                unknown printer took a
                galley of type and 
                scrambled it to make a 
                type specimen book</p>
                {/* //////Add a lik button////// */}
                <div>
                    
                </div>
            </div>
            <div className='w-full shadow-xl border border-rose-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white]' src={avatar} alt="/"/>
                <h2 className=' text-2xl font-blod text-center py-8 font-vng text-[40px] text-white'>Username01</h2>
                <p className='text-center text-2xl text-white'>Lorem Ipsum is simply 
                dummy text of the 
                printing and typesetting 
                industry. Lorem Ipsum has
                been the industry's 
                standard dummy text 
                ever since the 1500s, 
                when an
                unknown printer took a
                galley of type and 
                scrambled it to make a 
                type specimen book</p>
                {/* //////Add a lik button////// */}
                <div>
                    
                </div>
            </div>
            <div className='w-full shadow-xl border border-rose-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white]' src={avatar} alt="/"/>
                <h2 className=' text-2xl font-blod text-center py-8 font-vng text-[40px] text-white'>Username01</h2>
                <p className='text-center text-2xl text-white'>Lorem Ipsum is simply 
                dummy text of the 
                printing and typesetting 
                industry. Lorem Ipsum has
                been the industry's 
                standard dummy text 
                ever since the 1500s, 
                when an
                unknown printer took a
                galley of type and 
                scrambled it to make a 
                type specimen book</p>
                {/* //////Add a lik button////// */}
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews