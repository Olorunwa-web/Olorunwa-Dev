import React from 'react'
import javasciptIcon from '../assets/icon-javascript.svg';
import typescriptIcon from '../assets/icon-typescript.svg';
import reactIcon from '../assets/icon-react.svg';
import tailwindIcon from '../assets/icon-tailwindcss.svg';
import figmaIcon from '../assets/icon-figma.svg';
import sassIcon from '../assets/icon-sass.svg';
import framerIcon from '../assets/framer-svgrepo-com (1).svg';
import EmailJS from '../assets/EmailJS_idNWN6e1tz_1.svg';
import GithudIcon from '../assets/github-white-icon.svg';
import vercelIcon from '../assets/vercel-icon-svgrepo-com.svg';
import GitIcon from '../assets/git-icon-logo-svgrepo-com.svg';
import { motion as Motion } from 'framer-motion';


const Marquee = () => {


    const  UpperMarquee = [
            {
                id: 1, icon: javasciptIcon, name: 'JavaScript'
            },
            {
                id: 2, icon: typescriptIcon, name: 'TypeScript'
            },
            {
                id: 3, icon: reactIcon, name: 'ReactJS'
            },
            {
                id: 4, icon: sassIcon, name: 'Sass'
            },
            {
                id: 5, icon: tailwindIcon, name: 'Tailwind CSS'
            },
            {
                id: 6, icon: figmaIcon, name: 'Figma'
            },
            {
                id: 7, icon: framerIcon, name: 'Framer Motion'
            },
            {
                id: 8, icon: GithudIcon, name: 'GitHub'
            },
            {
                id: 9, icon: vercelIcon, name: 'Vercel'
            },
            {
                id: 10, icon: EmailJS, name: 'EmailJS'
            },
            { 
                id: 11, icon: GitIcon, name: 'Git'
            },
        ]

        const  LowerMarquee = [
            {
                id: 1, icon: typescriptIcon, name: 'TypeScript'
            },
            {
                id: 2, icon: reactIcon, name: 'ReactJS'
            },
            {
                id: 3, icon: javasciptIcon, name: 'JavaScript'
            },
            {
                id: 4, icon: EmailJS, name: 'EmailJS'
            },
            {
                id: 5, icon: figmaIcon, name: 'Figma'
            },
            {
                id: 6, icon: sassIcon, name: 'Sass'
            },
            {
                id: 7, icon: GithudIcon, name: 'GitHub'
            },
            {
                id: 8, icon: tailwindIcon, name: 'Tailwind CSS'
            },
            {
                id: 9, icon: vercelIcon, name: 'Vercel'
            },
            { 
                id: 10, icon: GitIcon, name: 'Git'
            },
            {
                id: 11, icon: framerIcon, name: 'Framer Motion'
            },
        ]

  return (
    <>
      <section className='flex flex-col gap-7'>
        <section className='flex gap-4'>
    <Motion.section
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className='flex gap-4 flex-shrink-0'>
            {UpperMarquee.map((upper) =>{
                return (
                    <div key={upper.id} className='bg-[#222222]  flex items-center p-2 gap-2 border-1 border-[#303030] rounded-lg'>
                        <img src= {upper.icon} alt="" className='w-[18px] h-[18px]' />
                        <span className='mt-[px] text-white text-sm font-normal font-jakarta'>{upper.name}</span>
                   </div>
                )
            })}
    </Motion.section>
    <Motion.section
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className='flex gap-4 flex-shrink-0'>
            {UpperMarquee.map((upper) =>{
                return (
                    <div key={upper.id} className='bg-[#222222]  flex items-center p-2 gap-2 border-1 border-[#303030] rounded-lg'>
                        <img src= {upper.icon} alt="" className='w-[18px] h-[18px]' />
                        <span className='mt-[px] text-white text-sm font-normal font-jakarta'>{upper.name}</span>
                   </div>
                )
            })}
    </Motion.section>
    <Motion.section
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className='flex flex-shrink-0 gap-4'>
            {UpperMarquee.map((upper) =>{
                return (
                    <div key={upper.id} className='bg-[#222222]  flex items-center p-2 gap-2 border-1 border-[#303030] rounded-lg'>
                        <img src= {upper.icon} alt="" className='w-[18px] h-[18px]' />
                        <span className='mt-[px] text-white text-sm font-normal font-jakarta'>{upper.name}</span>
                   </div>
                )
            })}
    </Motion.section>
        </section>
        <section className='flex gap-4'>
    <Motion.section
            initial={{ x: '-100%' }}
            animate={{ x:  0 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className='flex gap-4 flex-shrink-0'>
            {LowerMarquee.map((upper) =>{
                return (
                    <div key={upper.id} className='bg-[#222222]  flex items-center p-2 gap-2 border-1 border-[#303030] rounded-lg'>
                        <img src= {upper.icon} alt="" className='w-[18px] h-[18px]' />
                        <span className='mt-[px] text-white text-sm font-normal font-jakarta'>{upper.name}</span>
                   </div>
                )
            })}
    </Motion.section>
    <Motion.section
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className='flex gap-4 flex-shrink-0'>
            {LowerMarquee.map((upper) =>{
                return (
                    <div key={upper.id} className='bg-[#222222]  flex items-center p-2 gap-2 border-1 border-[#303030] rounded-lg'>
                        <img src= {upper.icon} alt="" className='w-[18px] h-[18px]' />
                        <span className='mt-[px] text-white text-sm font-normal font-jakarta'>{upper.name}</span>
                   </div>
                )
            })}
    </Motion.section>
    <Motion.section
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className='flex flex-shrink-0 gap-4'>
            {LowerMarquee.map((upper) =>{
                return (
                    <div key={upper.id} className='bg-[#222222]  flex items-center p-2 gap-2 border-1 border-[#303030] rounded-lg'>
                        <img src= {upper.icon} alt="" className='w-[18px] h-[18px]' />
                        <span className='mt-[px] text-white text-sm font-normal font-jakarta'>{upper.name}</span>
                   </div>
                )
            })}
    </Motion.section>
    <Motion.section
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className='flex flex-shrink-0 gap-4'>
            {LowerMarquee.map((upper) =>{
                return (
                    <div key={upper.id} className='bg-[#222222]  flex items-center p-2 gap-2 border-1 border-[#303030] rounded-lg'>
                        <img src= {upper.icon} alt="" className='w-[18px] h-[18px]' />
                        <span className='mt-[px] text-white text-sm font-normal font-jakarta'>{upper.name}</span>
                   </div>
                )
            })}
    </Motion.section>
        </section>
      </section>
    </>
  )
}

export default Marquee