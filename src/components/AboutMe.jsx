import React from 'react'
import Marquee from '../lib/Marquee';
import { motion as Motion } from 'framer-motion';
import  arrowright from '../assets/arrowright.svg';
import Swipes from '../components/Swipes';



const AboutMe = () => {

    const describe = {words : "<ToolKit/>"}
    const work = {avail:'Available For Work', ready:'or Ready for Projects!'}


  return (
    <>
      <section id='aboutme' className = 'mt-17 pb-10 md:mt-23 '>
        <Motion.section
            className = 'mx-auto w-full max-w-screen-xl md:px-10 px-5'>
            <h1 className='text-white font-semibold text-center text-3xl font-jakarta'>Behind the <span className='bg-[linear-gradient(20deg,#2E86D0_0%,#1BF273_35%,#2CE1C6_68%,#2E86D0_100%)] bg-clip-text text-transparent'>Code</span></h1>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-10 mt-7 md:mt-13'>
              <div className='w-full lg:basis-1/2'>
                 <p className='w-full tracking-wide text-[#969696] font-medium leading-6 text-sm font-jakarta'>I'm a Front-end Developer based in Lagos, Nigeria, with almost 2 years of experience. My journey started at Tech Studio Academy, where I gained a strong foundation in modern web technologies and had chance to build some cool projects that taught me a ton. I began with HTML, CSS, Javascript and then swithed to React where I had the opportunity to work on projects from scratch that really shaped my skills in JS and UI development.</p>
                 <div className='mt-5  w-full '>
                    <p className='w-full  tracking-wide   mt-6 text-[#969696] font-medium leading-6 text-sm font-jakarta'>I've always been passionate about working on projects that push me to grow, learn new things, and collaborate with great people. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Well-organised person, problem solver, pay high attention to detail, Fan of Music, Outdoor activities.</p>
                 </div>
                 <div className='mt-7 flex flex-col sm:items-center sm:flex-row gap-4 sm:gap-6'>
                  <div>
                  <button className='bg-[#2B2B2B] py-3 px-5 flex items-center gap-4 rounded-full '>
                    <span className='w-[7px] h-[7px] animate-ping bg-[#2E86D0] rounded-full'></span>
                    <span className='text-white text-sm font-jakarta '>{work.avail}</span>
                  </button>
                  </div>
                  <div>
                  <button className = 'bg-[#2B2B2B] py-2 ps-2 pr-4 flex items-center gap-3 rounded-full '>
                    <div className = 'bg-[#2E86D0] w-8 h-8 flex justify-center items-center rounded-full'>
                      <img src={arrowright} alt="" className='w-5' />
                    </div>
                    <span className='text-white text-sm font-jakarta'>View Resume</span>
                  </button>
                  </div>
                 </div>
              </div>
              <div className='w-full lg:w-1/2'>
                  <Swipes/>
                {/* <img src={unspalsh} alt=""  className='w-ful rounded-xl aspect-3/2 object-cover h-full'/> */}
              </div>
            </div>
            <div className='mt-18 md:mt-24' >
               <p className='text-base text-center font-normal font-jakarta text-[#909090]'>My Skill</p>
               <h1 className='my-3 text-white font-semibold text-center text-3xl font-jakarta'>Engineering <span className=' bg-[linear-gradient(20deg,#2E86D0_0%,#1BF273_35%,#2CE1C6_68%,#2E86D0_100%)] bg-clip-text text-transparent'>{describe.words}</span> </h1>
            </div>
        </Motion.section>
        <section className='py-7 w-full overflow-x-hidden '>
            <Marquee/>
        </section>
      </section>
    </>
  )
}

export default AboutMe