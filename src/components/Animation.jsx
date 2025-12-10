import React, {useEffect, useRef} from 'react'
import animateImg from '../assets/code.gif';
import GithubIcon from '../assets/github-white-icon.svg';
import instagramicon from '../assets/instagram-2016-logo-svgrepo-com.svg';
import mediumicon from '../assets/medium-icon-svgrepo-com.svg';
import linkedinicon from '../assets/linkedin-svgrepo-com (2).svg';
import { motion as Motion } from 'framer-motion';
import { createSwapy } from "swapy";



const Animation = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const swapy = createSwapy(containerRef.current, {
      animation: "spring",
    });

    return () => {
      swapy?.destroy?.();
    };
  }, []);



  return (
    <>
      <section className='mt-34 pb-10 md:mt-39'> 
        <section 
        className='w-full max-w-screen-xl mx-auto px-5 md:px-10'>
            <div className='flex w-full h-full flex-col lg:flex-row justify-between gap-10'>
                <div className='basis-1/2 w-full '> 
                    <img src= {animateImg} alt="" className='w-full object-cover h-full' />
                </div>
                <div className='basis-1/2 w-full'>
                  <div ref={containerRef} className='flex flex-col gap-5'>

                    {/* Medium */}
                    <div data-swapy-slot = 'a' >
                      <div data-swapy-item="a" className='grid grid-col-1 flex bg-[#FFFFFF] py-10 rounded-xl justify-center items-center'>
                        <img src={mediumicon} alt="" className='w-9 md:w-10' />
                     </div>
                    </div>

                    <div className=' grid grid-cols-2 sm:grid-cols-3 gap-5'>
                      {/* Instagram */}
                      <div data-swapy-slot = 'b' className='col-span-1 sm:col-span-2'>
                        <div data-swapy-item="b" className=' bg-[#C21975] py-10 rounded-xl flex justify-center items-center'>
                          <img src={instagramicon} alt="" className='w-9 md:w-10' />
                       </div>
                      </div>

                      {/* Linkedin */}
                      <div data-swapy-slot = 'c' className='col-span-1'>
                         <div data-swapy-item="c" className='  bg-[#0077B7] rounded-xl py-10 flex justify-center items-center'>
                         <img src= {linkedinicon} alt="" className='w-9 md:w-10' />
                        </div>
                      </div>
                    </div>
                    {/* github */}
                    <div data-swapy-slot="d" >
                      <div data-swapy-item="d" className=' grid grid-col-1 bg-[#000000] py-10 rounded-xl flex justify-center items-center'>
                        <img src={GithubIcon} alt="" className='w-9 md:w-10' />
                     </div>
                    </div>
                   </div>
                </div>
            </div>
        </section>
      </section>
    </>
  )
}

export default Animation