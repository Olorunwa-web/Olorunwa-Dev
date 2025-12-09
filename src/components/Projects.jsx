import React from 'react'
import { projects } from '../lib/db'
// import popup from '../assets/pop-out-svgrepo-com.svg'
import Icon from '../components/Icon';
import { motion as Motion } from 'framer-motion';
import Icon2 from '../components/Icon2';
import arrowinsert from '../assets/arrowinsert.svg'

const Projects = () => {

  
  return (
    <>
      <section id='projects' className='mt-7 '>
        <section className='mx-auto w-full max-w-screen-3xl md:px-10 px-5'>
            <h1 className='text-white font-semibold text-3xl font-jakarta'>Work</h1>
            <p className='w-full tracking-wide italic mt-2 text-white font-normal leading-6 text-sm font-jakarta'>Check out some of my recent work-cool products I've been part of, built using the latest tech and libraries to create something awesome!</p>
            <section className='mt-12 lg:mt-16 w-full  flex flex-col justify-between flex-wrap md:flex-row gap-y-15 lg:gap-y-19'>
              {projects.map((project)=> {
                 const isEven = project.id % 2 === 0;

                return (
                  <div key={project.id} className={`flex bg-[#292929]/40 py-5  xl:p- rounded-xl  flex-col gap-10  ${project.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    <Motion.div  className={`relative group overflow-x-hidden ${isEven ? " w-full h-full   lg:-mr-0 lg:basis-2/3": "w-full  lg:-ml-0  lg:basis-2/3 "}`}>
                      <Motion.video 
                       initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       whileTap={{ scale: 0.7}}

                       transition={{ duration: 1.4, ease: [0, 0.71, 0.2, 1.01] }}
                       viewport={{ once: true }}
                       className={`w-full  xl:h-full px-4 sm:px-4 lg:px-0 `}  autoPlay  loop muted playsInline  preload='none'> <source src={project?.image}  type='video/mp4' /> </Motion.video>
                    </Motion.div>
                       
                    <div className={` ${isEven === 0 ? "w-full  lg:basis-1/2 p-4": "w-full lg:basis-1/2 p-4 "} flex flex-col gap-3`}>
                      <h1 className='text-[#CFCFCF] font-semibold text-lg mt-0 lg:mt-3 font-lexend'>{project.name}</h1>
                      <p className='w-full tracking-wide italic mt- text-[#909090] font-normal leading-6 text-sm font-jakarta'>{project.description}</p>
                      <div className='flex flex-wrap gap-3 mt-3'>
                        {project.technologies.map((tech, index) => (
                          <div className='bg-[#222222] flex items-center px-2 py-[5px] gap-2 border-1 border-[#303030] rounded-md' key={index}>
                            <img src={tech.icon} alt={tech.title} className= 'w-[17px] h-[17px]' />  
                            <span className='mt-[px] text-white text-xs font-normal font-jakarta'>{tech.title}</span>
                          </div>
                        ))}
                      </div>
                      <h1 className='mt-4 text-white text-base font-normal font-jakarta'>Features:</h1>
                      <div className='flex flex-col gap-3'>
                         {project.features?.map((statement, idx) =>(
                          <div key={idx} className='flex  gap-2'>
                            <div className='pt-1'>
                              <Icon/>
                            </div>
                            <span className = 'w-full tracking-wide itali  text-[#909090] font-normal leading-6 text-sm font-jakarta'>{statement}</span>
                          </div>
                         ))}
                      </div>
                      <div  className={` ${isEven ? "scale-x-[-1] " : ""} `} >
                        <a href={project.liveLink} target='_blank' rel='noreferrer' className={`mt-3 bg-[#1BF273]/40 rounded-full w-11 h-11 flex justify-center items-center ${isEven ? " hidde l:flex" : " hidde flex"} `}>
                           <img src={arrowinsert} alt="" className={`w-4 ${isEven ? "scale-x-[-1] " : " hidde flex"}`}/>
                        {/* <Icon2/> */}
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </section>
        </section>
      </section>
      
    </>
  )
}

export default Projects