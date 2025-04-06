import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col items-center mx-54  gap-12 '>
    <h1 className='text-[48px] font-extrabold text-center mt-16 '>
      <span className=' text-blue-950'>Discover Your Next Adventure with AI !</span> Personalised Itineraries at Tour Fingertips</h1>
    <p className=' text-red-700 font-light text-4xl text-center'>Tour personal trip planner and travel curator,creating custom iteneraries to your interests and budget.</p>
    <Link to={'/create-trip'}>
    <button className='mt-6 text-white border-1 bg-blue-950 text-xl py-3 px-3 rounded-md'>Get Started, It's Free</button>
    </Link>
    <img  className=" flex justify-center w-[800px]"src="landing (1).png" alt="" />
    </div>
    
    </>
  )
}

export default Hero