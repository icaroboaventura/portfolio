import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import TitleThreeCanvas from '../small-components/TitleThree'

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative w-full h-svh flex flex-col justify-between items-center">
      <div className="w-[16.75rem] sm:self-start pt-20 pl-10">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <p className="text-primary font-opensans-bold  sm:text-start text-center">
            Hey there, <span className=" text-secondary">I'm Icaro</span>
          </p>
          <p className="text-2xl">👋🏽</p>
        </div>
        <p className="sm:text-start text-center">
          I love adding 3D to my web apps and exploring the merge of
          technology and creativity.
        </p>
      </div>
      <motion.div
        className="w-full absolute left-1/2 -translate-x-1/2 bottom-1/2 -translate-y-1/2 overflow-hidden"
        initial={false}>
        <motion.div className="relative " variants={{}}>
          <motion.div className="" variants={{}}>
            <Suspense fallback={null}>
              <TitleThreeCanvas />
            </Suspense>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="relative">
        <img
          className="w-[46.875rem]"
          src="/src/assets/images/hero-bg.png"
          alt="me"
        />
      </div>
    </section>
  )
}

export default Hero
