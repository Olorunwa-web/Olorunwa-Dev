import React from 'react'
import emailIcon from '../assets/email-svgrepo-com.svg'
import olorunwaLogo from '../assets/ChatGPT Image Sep 22, 2025, 06_14_29 PM.png';
const Navbar = () => {
  return (
    <>
       <nav className='sticky inset-x-0 w-full backdrop-blur-sm  z-9 top-[4px] left-0 right-0 '>
        <section className='py-2 mx-auto w-full max-w-screen-xl md:px-20 px-4'>
          <div className='flex justify-between items-center'>
            <div className=''>
              <img src= {olorunwaLogo} alt="" className='w-12' />
            </div>
            <div className='hidden flex items-center gap-2 '>
              <img src= {emailIcon} alt=""  className='w-5 h-5'/>
              <span className='text-white text-base  font-averta-demo'>olorunwamoliki@gmail.com</span>
            </div>
            <div>
              <a href="mailto:olorunwamoliki@gmail.com" className='font-jakarta font-semibold text-sm  text-white px-4 py-2 border-1 border-white rounded-full'>Let's Ta/k!</a>
            </div>
         </div>
        </section>
       </nav>
    </>
  )
}

export default Navbar