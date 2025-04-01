"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const textX = useTransform(scrollYProgress, [0, 0.5], ["-5%", "0%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-r from-ocean-blue/10 to-sage-green/10 py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            style={{ opacity }}
            className="mb-4 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl"
          >
            21st Century Approach to Recovery
          </motion.h2>

          <motion.h3 style={{ opacity }} className="mb-12 text-lg font-light italic text-muted-foreground md:text-xl">
            Redefining recovery with a luxury experience tailored exclusively for you — because true healing deserves
            nothing less than the best.
          </motion.h3>

          <motion.p
            style={{ x: textX, opacity }}
            className="mx-auto max-w-2xl text-center font-light leading-relaxed text-muted-foreground"
          >
            At MASTERMIND2.0, we understand that addiction and mental health issues are complex and multi-layered. We
            respond with a comprehensive, holistic solution that is as exclusive as it is effective, blending deep
            healing with the finer things in life.
          </motion.p>
        </div>
      </div>

      {/* Luxury pattern background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="h-full w-full bg-[url('/images/luxury-pattern.svg')] bg-repeat opacity-30"></div>
      </div>
    </section>
  )
}

