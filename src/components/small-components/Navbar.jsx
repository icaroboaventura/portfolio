import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../constants'
import MenuIcon from './MenuIcon'
import { ActiveSectionContext, ToggleContext } from '../../context/Context'
import MenuDropDown from './MenuDropDown'
import { scrollToSection } from '../../utils/function'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { toggle, setToggle } = useContext(ToggleContext)
  const { activeSection, setActiveSection } = useContext(
    ActiveSectionContext,
  )

  const determineActiveSection = () => {
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const section = document.getElementById(navLinks[i].name)
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(navLinks[i].name)
          break
        }
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      determineActiveSection()
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`w-full  flex flex-col fixed top-0 z-20 bg-white ${scrolled ? 'scrolled' : ''}`}>
      <div
        className={`w-ful h-12 px-4 flex justify-between items-center bg-white ${scrolled ? 'scrolled' : ''}`}>
        <Link
          className=" font-opensans-bold-italic text-secondary text-xs"
          to="/"
          onClick={() => {
            scrollToSection('Home')
          }}>
          ICARO <span className="text-primary">BOAVENTURA</span>
        </Link>

        <ul className="hidden sm:flex flex-row gap-0 ">
          {navLinks.map(link => (
            <li
              key={link.name}
              onClick={() => setActiveSection(link.name)}
              className={`${
                activeSection === link.name ?
                  ' text-secondary'
                : 'text-primary hover:scale-105'
              }  transition-colors px-2.5 py-0.5 text-sm relative font-opensans-bold`}>
              <span className="relative text-center z-10 cursor-pointer">
                {link.name}
              </span>
              {activeSection === link.name ?
                <motion.span
                  layoutId="pill-tab"
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="absolute w-1 inset-0 z-0 bg-secondary "></motion.span>
              : ''}
            </li>
          ))}
        </ul>
        <div
          className="sm:hidden flex gap-1 items-center cursor-pointer "
          onClick={() => setToggle(!toggle)}>
          <MenuIcon />
        </div>
      </div>
      <div className="relative">
        <MenuDropDown />
      </div>
    </nav>
  )
}

export default Navbar
