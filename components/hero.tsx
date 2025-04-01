"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="/videos/luxury-retreat.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <img src="/images/nav-bar-logo.svg" alt="MASTERMIND2.0" className="h-20 w-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-4 font-serif text-6xl font-light tracking-wider md:text-7xl lg:text-8xl"
        >
          Reclaim You
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mb-2 text-xl font-light tracking-wide md:text-2xl"
        >
          Luxury Addictions & Mental Health Retreats
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="mb-8 max-w-md text-sm font-light tracking-wider text-white/90 md:text-base"
        >
          Taking Care of Mind, Body, and Soul
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Button className="group relative border border-gold bg-transparent px-8 py-6 text-sm font-light tracking-widest text-white transition-all hover:bg-gold/10">
            START YOUR JOURNEY
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.7 } : {}}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs tracking-widest">SCROLL</span>
          <div className="h-12 w-[1px] bg-white/30"></div>
        </div>
      </motion.div>
    </section>
  )
}

