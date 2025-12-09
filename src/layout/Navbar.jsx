import React, { useState, useEffect } from 'react'
import emailIcon from '../assets/email-svgrepo-com.svg'
import olorunwaLogo from '../assets/blackOM.png';
import bluearrow from '../assets/Vector.svg';
import { nav, navmobile } from '../lib/db'
import { NavLink } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';


const constantvariant = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1
        },
    }
}
const Navbar = () => {

  const [active, setActive] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

 
  const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActive(false);
  }
};

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "aboutme", "projects"];
      let current = "home"; // default if top of page

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
       <nav className={`fixed md:py-[7px] py-2 mx-3 ${active ? 'rounded-2xl bg-[#1A1A1A]' : 'bg-[#1A1A1A]/50 backdrop-blur-md rounded-full'} inset-x-0 left-0 right-0 sm:mx-auto max-w-screen-sm px-3  md:px-[7px] sm:px-4 z-9 top-[17px]`}>
        <section className=''>
          <div className='flex justify-between items-center'>
            <div className='flex justify-center p-1 bg-white rounded-full items-center w-9 h-9 '>
              <img src= {olorunwaLogo} alt="" className=' rounded-full' />
            </div>
            <div className='hidden flex items-center gap-2 '>
              <img src= {emailIcon} alt=""  className='w-5 h-5'/>
              <span className='text-white text-base  font-averta-demo'>olorunwamoliki@gmail.com</span>
            </div>
            <div className='hidden sm:block'>
              <div className='flex gap-6 itens-center'>
                {nav.map((navs) => (
                  <button key={navs.id} onClick={() => scrollTo(navs.path)} className={`hover:text-[#2E86D0] font-lexend text-sm transition-colors  font-normal ${activeSection === navs.path ? 'text-[#2E86D0]' : 'text-white'}`}>
                    {navs.header}
                  </button>
                ))}
              </div>
             </div>
            <div className='hidden group justify-center gap-2 items-center sm:flex px-4 py-2 md:py-2 bg-white rounded-full'>
              <a href="mailto:olorunwamoliki@gmail.com" className='font-jakarta font-semibold text-sm  text-black '>Let's Ta/k!</a>
              <div className=''>
                <Motion.img src= {bluearrow}  variants = {constantvariant} initial = 'hidden' animate = 'show' alt="" className='w-[10px] transition-transform duration-300 group-hover:rotate-45 group-hover:opacity-80' />
              </div> 
            </div>
            <div className='sm:hidden'>
              <div
                 className={`hamburger is-lg ${active ? "is-active" : ""}`}
                 onClick={() => setActive(!active)}>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
              </div>
            </div>
         </div>
            {active && (
              <div className='w-full sm:hidden rounded-2xl mt-10 mb-6 px-5 py-4 bg-[#2A2A2A] flex flex-col '>
               <div className=' flex flex-col mt-2 gap-5 z-10'>
                {navmobile.map((navss) => (
                  <button key={navss.id}  onClick={() => scrollTo(navss.path)} className={` font-lexend text-xl font-normal ${activeSection === navss.path ? 'text-[#2E86D0]' : 'text-white'}`}>
                    {navss.header}
                  </button>
                ))}
               </div>
               <div className='w-full h-[0.2px] my-6 rounded-full  bg-[#969696]/30 '></div>
                 <div className='my-2 justify-center gap-2 items-center flex px-4 py-3 md:py-2 bg-white rounded-full'>
                   <a href="mailto:olorunwamoliki@gmail.com" className='font-jakarta font-semibold text-base text-black '>Let's Ta/k!</a>
                   <div className=''>
                     <Motion.img src= {bluearrow} variants = {constantvariant} initial = 'hidden' animate = 'show' alt="" className='w-[10px] transition-transform duration-300 group-hover:rotate-45 group-hover:opacity-80' />
                   </div> 
                 </div>
              </div>
            )}
        </section>
       </nav>
    </>
  )
}

export default Navbar