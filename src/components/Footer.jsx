import React from 'react'
import gitbubIcon from '../assets/github-icon-1-logo-svgrepo-com.svg';
import linkedinIcon from '../assets/linkedin-svgrepo-com (1).svg';
import instagramIcon from '../assets/instagram-svgrepo-com.svg';

const Footer = () => {

    const icons = [
      {id:1, icon: gitbubIcon,link :'https://github.com/Olorunwa-web'},
      {id:2, icon: linkedinIcon,link :'https://www.linkedin.com/in/olorunwa-moliki-1bb8a11ab/'},
      {id:3, icon: instagramIcon,link :'https://www.instagram.com/olly.lab2?igsh=MWt5eTQydHlhdGd4Yw%3D%3D&utm_source=qr'},
    ]

  return (
    <>
      <section className='mt-20 border-t-1 border-[#555555] py-5'>
        <section className='w-full max-w-screen-xl mx-auto px-4 md:px-20'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <span className='text-white text-sm font-normal font-jakarta'>Designing codes. Building things. Learning always.</span>
                    <div>
                        <div className='flex gap-3'>
                           {icons.map((socials) => (
                             <a href={socials.link} key={socials.id} target='_blank' rel='noreferrer' className='w-8 h-8 bg-[#222222] flex justify-center items-center rounded-full  transition-all duration-300'>
                               <img src={socials.icon} alt="" className='w-4 h-4'/>
                             </a>
                           ))}
                       </div>
                    </div>
                    <span className='text-white text-sm font-normal font-jakarta'>&copy; 2025 Olorunwa Moliki. All rights reserved.</span>
                </div>
            </div>
        </section>
      </section>
    </>
  )
}

export default Footer