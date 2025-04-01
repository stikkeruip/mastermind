"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface StickyContentProps {
  children: React.ReactNode
  image: string
  title: string
  subtitle?: string
}

export default function StickySection({ children, image, title, subtitle }: StickyContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60])

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity, y: textY }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
        >
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">{title}</h2>

          {subtitle && <p className="mb-8 max-w-2xl text-lg font-light md:text-xl">{subtitle}</p>}

          {children}
        </motion.div>
      </div>
    </section>
  )
}

