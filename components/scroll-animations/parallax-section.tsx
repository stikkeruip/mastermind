"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  imageUrl: string
  title: string
  subtitle: string
  reverse?: boolean
}

export default function ParallaxSection({
  children,
  imageUrl,
  title,
  subtitle,
  reverse = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const contentY = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0.8])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-soft-ivory py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className={`grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16 ${reverse ? "md:grid-flow-dense" : ""}`}>
          <motion.div
            style={{ y: contentY, opacity }}
            className={`flex flex-col justify-center ${reverse ? "md:col-start-2" : ""}`}
          >
            <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mb-8 text-xl font-light text-muted-foreground md:text-2xl">{subtitle}</p>
            {children}
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            className={`relative h-[400px] overflow-hidden rounded-lg md:h-auto ${reverse ? "md:col-start-1" : ""}`}
          >
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

