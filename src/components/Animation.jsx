import React, {useEffect, useState} from 'react'
import animateImg from '../assets/code.gif';
import GithubIcon from '../assets/github-white-icon.svg';
import instagramicon from '../assets/instagram-2016-logo-svgrepo-com.svg';
import mediumicon from '../assets/medium-icon-svgrepo-com.svg';
import linkedinicon from '../assets/linkedin-svgrepo-com (2).svg';
import { motion as Motion } from 'framer-motion';



const Animation = () => {

    const icons = [
          {id:1, icon: linkedinicon,link :'https://www.linkedin.com/in/olorunwa-moliki-1bb8a11ab/'},
          {id:2, icon: GithubIcon,link :'https://github.com/Olorunwa-web'},
          {id:3, icon: mediumicon,link :'https://medium.com/@olorunwamoliki'},
          {id:4, icon: instagramicon,link :'https://www.instagram.com/olly.lab2?igsh=MWt5eTQydHlhdGd4Yw%3D%3D&utm_source=qr'},
        ]

    const [order, setOrder] = useState(icons);

    const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };


  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);


  return (
    <>
      <section className='mt-34 pb-10 md:mt-39'> 
        <Motion.section 
         initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.4,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        className='w-full max-w-screen-lg mx-auto px-5 md:px-20'>
            <div className='flex w-full h-full flex-col lg:flex-row justify-between gap-10'>
                <div className='basis-1/2 w-full '> 
                    <img src= {animateImg} alt="" className='w-full object-cover h-full' />
                </div>
                <div className='basis-1/2 w-full'>
                  <div className='flex flex-wrap justify-between gap-5'>
                    {order.map((socials) => {
                        return (
                            <Motion.a href={socials.link} layout key={socials.id} transition={spring} target='_blank' rel='noreferrer' className= {`flex justify-center rounded-2xl items-center border border-[#222222] w-[46%] md:w-[47%] h-30 ${socials.id === 1 ? 'bg-[#0077B7]' : socials.id === 2 ? 'bg-[#000000]' : socials.id === 3 ? 'bg-[#FFFFFF]' :  socials.id === 4 ? 'bg-[#C21975]': ""} transition-all duration-300 hover:scale-105`}>
                                <img src= {socials.icon} alt="" className='w-7 h-7' />
                            </Motion.a>
                         )
                     })}
                   </div>
                </div>
            </div>
        </Motion.section>
      </section>
    </>
  )
}

export default Animation