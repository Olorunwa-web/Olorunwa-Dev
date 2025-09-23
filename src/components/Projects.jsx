import React from 'react'
import { projects } from '../lib/db'
// import popup from '../assets/pop-out-svgrepo-com.svg'
import Icon from '../components/Icon';



const Projects = () => {

  
  return (
    <>
      <section className='mt-7 '>
        <section className='mx-auto w-full max-w-screen-3xl md:px-18 px-4'>
            <h1 className='text-white font-semibold text-3xl font-jakarta'>Work</h1>
            <p className='w-full tracking-wide italic mt-2 text-white font-normal leading-6 text-sm font-jakarta'>Check out some of my recent work-cool products I've been part of, built using the latest tech and libraries to create something awesome!</p>
            <section className='mt-12 lg:mt-16 w-full flex flex-col justify-between flex-wrap md:flex-row gap-y-15'>
              {projects.map((project)=> {
                return (
                  <div key={project.id} className={`flex flex-col gap-10 ${project.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    <div className={` ${project.id % 2 === 0 ? "w-full lg:basis-2/3": "w-full lg:basis-2/3 "}  `}>
                      <video className='w-full h-ful' src= {project.image} autoPlay preload = 'none' loop muted playsInline ></video>
                    </div>
                    <div className={` ${project.id % 2 === 0 ? "w-full lg:basis-1/2 lg:px-3": "w-full lg:basis-1/2 lg:px-3 "} flex flex-col gap-3`}>
                      <h1 className='text-white font-bold text-lg mt- lg:mt-0 font-jakarta'>{project.name}</h1>
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
                            <span className = 'w-full tracking-wide italic  text-[#909090] font-normal leading-6 text-sm font-jakarta'>{statement}</span>
                          </div>
                         ))}
                      </div>
                      {/* <div className='mt-4'>
                        <a href={project.liveLink} target='_blank' rel='noreferrer' className='text-sm text-[#1BF273] font-jakarta underline'>View Project</a>
                      </div> */}
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