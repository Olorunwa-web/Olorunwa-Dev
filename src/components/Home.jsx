import React from 'react'
// import roundedImage from '../assets/object.png';
import wavingIcon from '../assets/waving-hand-svgrepo-com.svg'
import { motion as Motion } from 'framer-motion';
import RotatingText from '../components/RotatingText';




const Home = () => {

     const details = {name: "I'm Olorunwa", description: "a frontend developer based in Lagos, Nigeria. I enjoy building innovative, user-centered web experiences that are intuitive, quick, and visually appealing."}

  return (
    <>
      <Motion.section id='home' className='relative mx-auto mt-33 lg:mt-40 w-ful max-w-screen-sm border-white borde md:px-0 px-5'>
        <section className='flex flex-col gap-7'>
          <div>
            <span className='font-playfair font-normal text-[#C8C8C8] text-4xl md:text-6xl'>Frontend developer – focusing on modern UI development, creative 
              <RotatingText
              texts={['components!', 'thinking', 'coding']}
              mainClassName="px-3 sm:px-2 md:px-4 inline-flex w-auto bg-[#2E86D0] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden py-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            /> <span> design & interactive prototypes.</span></span>
          </div>
          <div className='mt-1'>
             <span className='leading-7 tracking-wide text-[#969696] font-jakarta inline-flex items-center font-medium text-lg'>Hey!<img src={wavingIcon} alt="" className='w-6 md:w-6' /> <span> {details.name}, </span>
             </span>
             <span className='leading-7 tracking-wide text-[#969696] font-jakarta font-meidum text-lg'> {details.description}</span>
          </div>
          <div className='mt-'>
            <button className='flex items-center justify-center gap-2 py-[10px] rounded-full px-5 bg-[#2B2B2B]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18"  height="18"  viewBox="0 0 24 24" fill="none" stroke="rgb(97,97,97)" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round">
                 <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span className='text-[#909090] font-light tracking-wide font-lexend text-sm'>Open to work</span>
              <span className='font-normal text-[#696969]'>|</span>
              <span className='font-medium text-sm text-[#2E86D0]'>Contact me</span>
            </button>
          </div>
        </section>
        {/* <section className='w-full flex flex-col lg:flex-row justify-between items-center xl:gap-12 gap-10'>
            <Motion.div 
             variants={defaultAnimation} initial = "hidden" animate = "visible"
            className='basis-2/3 w-full flex flex-col gap-9'>
                <div className='flex flex-col gap-4'>
                    <Motion.span   className='text-white font-jakarta flex items-center font-light text-2xl md:text-2xl'>Hi<img src={wavingIcon} alt="" className='w-7 md:w-7' />, {details.name} </Motion.span>
                    <div>
                       <span className='text-white font-jakarta font-bold leading-10 md:leading-11 text-3xl md:text-4xl'>{details.description} <span className='bg-[linear-gradient(20deg,#2E86D0_0%,#1BF273_35%,#2CE1C6_68%,#2E86D0_100%)] bg-clip-text text-transparent'> user interfaces </span>{details.description2}</span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-5'>
                  <button className=' border-1 py-2 px-4 flex items-center gap-3 border-[#878787] px-3 rounded-full '>
                    <span className='w-[8px] h-[8px] animate-ping bg-[#1BF291] rounded-full'></span>
                    <span className='text-white text-sm font-jakarta '>{work.avail} <span className='text-[#878787]'>{work.ready}</span></span>
                 </button>
                 <div>
                  <a href="mailto:olorunwamoliki@gmail.com" className='flex items-center gap-2 bg-[#2CE1C6] p-2 rounded-full text-black text-base font-medium font-jakarta'>Contact me <div className='w-2 h-2 bg-black mt-[2px] rounded-full'></div></a>
                 </div>
                </div>
            </Motion.div>
            <div className='basis-1/2 w-full'>
               <div className='w-full flex lg:justify-end'>
                  <Motion.img
                   initial = {{ opacity: 0, y: 70}}
                 animate = {{opacity: 1, y: 0}}
                 transition={{ 
                  duration: 0.8,
                  delay: 0.3,                  
                 }}
                  src= {roundedImage} alt="" className='w-full' />
               </div>
            </div>
        </section> */}
        {/* <div className='absolut'>
           <button className='border-1 py-2 px-4 flex items-center gap-4 border-[#878787] px-3 rounded-full '>
              <span className='w-[7px] h-[7px] animate-ping bg-[#1BF291] rounded-full'></span>
              <span className='text-white text-sm font-jakarta '>{work.avail}</span>
          </button>
        </div> */}
      </Motion.section>
    </>
  )
}

export default Home