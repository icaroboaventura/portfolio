import React, { useContext } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { ActiveSectionContext, ToggleContext } from '../../context/Context'
import { navLinks } from '../../constants'
import { Link } from 'react-router-dom'
import { scrollToSection } from '../../utils/function'

const MenuDropDown = () => {
  const { toggle, setToggle } = useContext(ToggleContext)
  const { activeSection, setActiveSection } = useContext(
    ActiveSectionContext,
  )

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              scaleY: 0,
            },
            animate: {
              scaleY: 1,
              transition: {
                duration: 0.3,
                stiffness: 90,
                // damping: 24,
                type: 'spring',
              },
            },
            exit: {
              scaleY: 0,
              damping: 24,
            },
          }}
          className="sm:hidden w-full top-0 origin-top absolute rounded-b overflow-hidden flex-col list-none justify-center items-center bg-white bg-opacity-95">
          <ul>
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`${
                  activeSection === link.name ?
                    ' text-white bg-secondary'
                  : 'text-primary'
                } cursor-pointer w-full text-center p-1 hover:scale-105 text-sm  font-opensans-bold`}
                onClick={() => {
                  scrollToSection(link.name)
                  setToggle(!toggle)
                }}>
                <Link to={'/'}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuDropDown
