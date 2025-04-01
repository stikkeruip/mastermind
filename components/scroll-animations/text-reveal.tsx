"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const words = text.split(" ")

  const opacityValues = words.map((word, i) => {
    const start = i / words.length
    const end = start + (1 / words.length) * 0.5
    return useTransform(scrollYProgress, [start, end], [0, 1])
  })

  const yValues = words.map((word, i) => {
    const start = i / words.length
    const end = start + (1 / words.length) * 0.5
    return useTransform(scrollYProgress, [start, end], [40, 0])
  })

  return (
    <div ref={ref} className={`py-24 md:py-32 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="mx-auto max-w-4xl overflow-hidden font-serif text-3xl font-light leading-relaxed tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
          {words.map((word, i) => {
            return (
              <motion.span key={i} style={{ opacity: opacityValues[i], y: yValues[i] }} className="mr-2 inline-block">
                {word}
              </motion.span>
            )
          })}
        </h2>
      </div>
    </div>
  )
}

