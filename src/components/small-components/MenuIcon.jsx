import React, { useContext } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { ToggleContext } from '../../context/Context'

const MenuButton = () => {
  const { toggle, setToggle } = useContext(ToggleContext)
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <motion.button
        initial={false}
        onClick={() => {
          setToggle(toggle => !toggle)
        }}
        className="relative h-10 w-10 hover:scale-105"
        animate={toggle ? 'open' : 'closed'}>
        <motion.span
          style={{ top: '35%', left: '50%', x: '-50%', y: '-50%' }}
          className="absolute h-[3px] w-6 bg-primary rounded"
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '35%'],
            },
          }}
        />
        <motion.span
          style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
          className="absolute  h-[3px] w-6 bg-primary rounded"
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
            },
          }}
        />
        <motion.span
          style={{ bottom: '35%', left: '50%', x: '-50%', y: '50%' }}
          className="absolute  h-[3px] w-6 bg-primary rounded"
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
              bottom: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
              bottom: ['50%', '50%', '35%'],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}

export default MenuButton
