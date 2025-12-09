import './App.css'
import { BrowserRouter , Routes, Route  } from 'react-router-dom' 
import Parent from './components/Parent';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Scroll from './lib/UseScroll';
import  { BouncingBalls }   from './components/BouncingBalls'
import Noise from './components/Noise';
import ScrollsTop from './components/ScrollsTop';


function App() {

  return (
    <>
      <Noise
        // patternSize={250}
        // patternScaleX={1}
        // patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <ScrollsTop/>
      <Scroll/>
      <BrowserRouter>
        <Routes>
          <Route element={<Parent/>}>
           <Route index element={<Home/>}/>
           <Route path='about' element={<AboutMe/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
