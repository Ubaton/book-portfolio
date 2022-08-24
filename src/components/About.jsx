import React from 'react'
import boity from '../images/boity.jpg'

const About = () => {
  return (
    <div className=' w-full bg-rose-500 py-1 px-5'>
        <div className='max-w-[1240px] max-auto grid md:grid-cols-2'>
            <img className='mx-auto my-4 rounded-lg' src={boity} alt='/' />
            <div>
                <h1 className='font-vng text-[70px] px-5 text-white'>About</h1>
                <p className='py-5 px-5 text-[30px] text-white'>
                    What is Lorem Ipsum?

                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text 
                    ever since the 1500s, when an
                    unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 
                    1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages,
                    and more recently with desktop
                    publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default About
