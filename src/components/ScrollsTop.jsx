import React  from 'react'
import  arrowright from '../assets/arrowright.svg';


const ScrollsTop = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <>
        <button onClick={scrollToTop} className="fixed bottom-4 right-4  md:bottom-7 z-999 md:right-7 p-2 rounded-full bg-[#2E86D0] text-white shadow-lg hover:bg-[#1B4F72] transition-colors duration-300">
          <img src={arrowright} alt="Scroll to top" className="md:w-7 md:h-7 w-6 rotate-[-50deg]" />
        </button>
    </>
  )
}

export default ScrollsTop