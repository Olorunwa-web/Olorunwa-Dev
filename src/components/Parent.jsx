import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar  from '../layout/Navbar';
import AboutMe from '../components/AboutMe';
import Project from '../components/Projects';
import { motion as Motion } from 'framer-motion';
import Animation from '../components/Animation';
import Footer from '../components/Footer';


const Parent = () => {



  return (
    <>
    <Motion.section className='relative'>
        <Navbar/>
        <Outlet/>
        <AboutMe/>
        <Project/>
        <Animation/>
        <Footer/>
    </Motion.section>
    </>
  )
}

export default Parent