import './App.css'
import { BrowserRouter , Routes, Route  } from 'react-router-dom' 
import Parent from './components/Parent';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Scroll from './lib/UseScroll';


function App() {

  return (
    <>
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
