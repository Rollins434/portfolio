import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const HeroSection = () => {
  let image = 'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    // <div name='home' className=' w-full h-screen  container max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3'>
    //     <div>
    //     <p className='text-[#8892b0] py-4 max-w-[600px] font-normal'>
    //       I’m a full-stack developer specializing in building (and occasionally
    //       designing) exceptional digital experiences. Currently, I’m focused on
    //       building responsive full-stack web applications.
    //     </p>
    //     </div>
    //     <div>
    //     <p className='text-[#8892b0] py-4 max-w-[600px]'>
    //       I’m a full-stack developer specializing in building (and occasionally
    //       designing) exceptional digital experiences. Currently, I’m focused on
    //       building responsive full-stack web applications.
    //     </p>
    //     </div>
    // </div>
    // <div name='home' className='w-full h-screen py-[100px] content-div ' style ={{ backgroundImage: `url(${image})` }}>
    <div name='home' className='w-full h-screen ]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
       Rupendra Aathiya
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
     
      </div>
    </div>
  )
}

export default HeroSection