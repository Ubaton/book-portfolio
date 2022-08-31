import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-8 text-white bg-brown-500 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-6'>
          <h1 className='font-vng text-[20px] md:text-4xl sm:text-3xl text-2xl'>Let me know your feed back about the books</h1>
          <p>Sign up to my newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='rounded-full px-4 py-3' type="email" placeholder='Enter Email' />
            <button className=' hover:bg-brown-600 drop-shadow-md bg-lightbrown-600 text-black rounded-full font-semibold w-[200px ml-4 my-6 px-6 py-3'>Notify Me</button>
          </div>
          <p> We care about the protection of your data. Read our <span className=' text-brown-900 cursor-pointer'>Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
