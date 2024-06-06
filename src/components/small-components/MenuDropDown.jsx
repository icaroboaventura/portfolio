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
                stiffness: 100,
                damping: 24,
                type: 'spring',
              },
            },
            exit: {
              scaleY: 0,
              damping: 24,
            },
          }}
          className="sm:hidden border-t-2 border-t-primary w-full top-0 origin-top absolute rounded-b-3xl overflow-hidden flex-col list-none justify-center items-center bg-white">
          <div>
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`${
                  activeSection === link.name ?
                    'text-white bg-primary'
                  : 'text-primary'
                } cursor-pointer w-full text-center p-1 hover:scale-105`}
                onClick={() => {
                  scrollToSection(link.name)
                  setToggle(!toggle)
                }}>
                <Link to={'/'}>{link.name}</Link>
              </li>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuDropDown
