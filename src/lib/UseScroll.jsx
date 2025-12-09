import React from 'react'
import { motion as Motion, useScroll } from 'framer-motion';

const UseScroll = () => {
        const { scrollYProgress } = useScroll()

  return (
    <>
      <Motion.section
       style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#2E86D0",
          zIndex: 99
     }}
      >
      </Motion.section>
    </>
  )
}

export default UseScroll