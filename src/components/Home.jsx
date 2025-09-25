import React from 'react'
import roundedImage from '../assets/object.png';
import wavingIcon from '../assets/waving-hand-svgrepo-com.svg'
import { motion as Motion } from 'framer-motion';



const Home = () => {

    const work = {avail:'Available For Work', ready:'or Ready for Projects!'}
    const details = {name: "I'm Olorunwa", description: "I craft seamless and responsive" , description2: "that transform ideas into engaging digital experiences"}

    const defaultAnimation = {
      hidden: { opacity: 0, y: 90 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.4  }},
    }

  return (
    <>
      <Motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      className='relative mx-auto mt-11 lg:mt-17 w-full max-w-screen-xl md:px-20 px-4'>
        <section className='w-full flex flex-col lg:flex-row justify-between items-center gap-10'>
            <Motion.div   className='basis-2/3 w-full flex flex-col gap-9'>
                <div className='flex flex-col gap-4'>
                    <Motion.span  variants={defaultAnimation} initial = "hidden" animate = "visible" className='text-white font-jakarta flex items-center font-light text-2xl md:text-3xl'>Hi<img src={wavingIcon} alt="" className='w-7 md:w-9' />, {details.name} </Motion.span>
                    <div >
                       <span className='text-white font-jakarta font-bold leading-9 md:leading-11 text-3xl md:text-4xl'>{details.description} <span className='bg-[linear-gradient(20deg,#2E86D0_0%,#1BF273_35%,#2CE1C6_68%,#2E86D0_100%)] bg-clip-text text-transparent'> user interfaces </span>{details.description2}</span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-5'>
                  <Motion.button drag whileDrag={{ zIndex: 99 }} className=' border-1 py-2 px-4 flex items-center gap-3 border-[#878787] px-3 rounded-full '>
                    <span className='w-[8px] h-[8px] animate-ping bg-[#1BF291] rounded-full'></span>
                    <span className='text-white text-sm font-jakarta '>{work.avail} <span className='text-[#878787]'>{work.ready}</span></span>
                 </Motion.button>
                 <div>
                  <a href="mailto:olorunwamoliki@gmail.com" className='flex items-center gap-2 bg-[#2CE1C6] p-2 rounded-full text-black text-base font-medium font-jakarta'>Contact me <div className='w-2 h-2 bg-black mt-[2px] rounded-full'></div></a>
                 </div>
                </div>
            </Motion.div>
            <div className='basis-1/2 w-full'>
               <div className='w-full flex lg:justify-end'>
                  <img src= {roundedImage} alt="" className='w-full' />
               </div>
            </div>
        </section>
      </Motion.section>
    </>
  )
}

export default Home