"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface RevealSectionProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  delay?: number
  className?: string
}

export default function RevealSection({ children, title, subtitle, delay = 0.2, className = "" }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + delay,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <section ref={ref} className={`py-24 md:py-32 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            variants={variants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-4 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              variants={variants}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-12 text-lg font-light text-muted-foreground md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div variants={variants} custom={2} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

