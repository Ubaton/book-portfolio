import React from 'react'
import avatar from '../images/avatar.png'

const Reviews = () => {
  return (
    <div className='w-full py-[1rem] px-4 bg-rose-500'>
        <div className='text-white text-[70px] font-vng justify-center flex py-5'>
            Reviews
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='hover:cursor-pointer w-full shadow-xl border border-rose-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 transition-all'>
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
            <div className='hover:cursor-pointer w-full shadow-xl border border-rose-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 transition-all'>
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
            <div className='hover:cursor-pointer w-full shadow-xl border border-rose-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 transition-all'>
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
            <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-brown-400">Your Book Review</label>
            <textarea id="message" rows="2" className="block p-2.5 w-full text-sm text-brown-900 bg-lightwhite-00 rounded-lg border
            border-lightbrown-300 focus:ring-brown-500 focus:border-brown-500 dark:bg-brown-700 dark:border-brown-600
            dark:placeholder-brown-400 dark:text-white dark:focus:ring-brown-500 dark:focus:border-brown-500"
            placeholder="Leave a comment..."></textarea>
    </div>
  )
}

export default Reviews