import React from 'react'
import Marquee from '../lib/Marquee';
import { motion as Motion } from 'framer-motion';


const AboutMe = () => {

    const describe = {words : "<ToolKit/>"}

  return (
    <>
      <section className = 'mt-17 pb-10 md:mt-22 '>
        <Motion.section
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.4,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className = 'mx-auto w-full max-w-screen-xl md:px-20 px-4'>
            <h1 className='text-white font-semibold text-center text-3xl font-jakarta'>Behind the <span className='bg-[linear-gradient(20deg,#2E86D0_0%,#1BF273_35%,#2CE1C6_68%,#2E86D0_100%)] bg-clip-text text-transparent'>Code</span></h1>
            <p className='w-full tracking-wide italic mx-auto md:w-[90%] mt-7 text-white font-normal leading-6 text-sm font-jakarta'>I'm a Front-end Developer based in Lagos, Nigeria, with almost 2 years of experience. My journey started at Tech Studio Academy, where I gained a strong foundation in modern web technologies and had chance to build some cool projects that taught me a ton. I began with HTML, CSS, Javascript and then swithed to React where I had the opportunity to work on projects from scratch that really shaped my skills in JS and UI development.</p>
            <div className='mt-5  w-full md:w-[90%] mx-auto'>
                <p className='w-full  tracking-wide italic  mt-6 text-white font-normal leading-6 text-sm font-jakarta'>I've always been passionate about working on projects that push me to grow, learn new things, and collaborate with great people. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Well-organised person, problem solver, pay high attention to detail, Fan of Music, Outdoor activities.</p>
                <div className='mt-18 md:mt-24 ' >
                    <p className='text-base text-center font-normal font-jakarta text-[#909090]'>My Skill</p>
                    <h1 className='my-3 text-white font-semibold text-center text-3xl font-jakarta'>Engineering <span className=' bg-[linear-gradient(20deg,#2E86D0_0%,#1BF273_35%,#2CE1C6_68%,#2E86D0_100%)] bg-clip-text text-transparent'>{describe.words}</span> </h1>
                </div>
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