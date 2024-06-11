import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/small-components/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { useState } from 'react'
import { ActiveSectionContext, ToggleContext } from './context/Context'

function App() {
  const [toggle, setToggle] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <ActiveSectionContext.Provider
        value={{ activeSection, setActiveSection }}>
        <BrowserRouter>
          <div className="relative font-opensans-regular">
            <Navbar />
            <Hero />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </BrowserRouter>
      </ActiveSectionContext.Provider>
    </ToggleContext.Provider>
  )
}

export default App
