import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../constants'
import MenuIcon from './MenuIcon'
import { ActiveSectionContext, ToggleContext } from '../../context/Context'
import MenuDropDown from './MenuDropDown'
import { scrollToSection } from '../../utils/function'

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
          className="font-arvo-bold text-secondary text-xs"
          to="/"
          onClick={() => {
            scrollToSection('Home')
          }}>
          Icaro <span className="text-primary">Boaventura</span>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-1 rounded">
          {navLinks.map((link, i) => (
            <li
              className={`${
                activeSection === link.name ?
                  ' text-tertiary bg-primary'
                : 'text-primary '
              }  cursor-pointer w-20 text-center  p-1 rounded `}
              key={i}
              onClick={() => {
                scrollToSection(link.name)
              }}>
              <Link to={'/'}>{link.name}</Link>
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
