"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HorizontalScrollProps {
  sections: {
    title: string
    description: string
    image: string
  }[]
}

export default function HorizontalScroll({ sections }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(sections.length - 1) * 100}%`])

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-full">
          {sections.map((section, index) => (
            <div key={index} className="relative flex h-full w-screen flex-shrink-0 items-center justify-center">
              <div className="absolute inset-0 z-0">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="relative z-10 max-w-2xl p-8 text-center text-white">
                <h2 className="mb-4 font-serif text-4xl font-light tracking-wide md:text-5xl">{section.title}</h2>
                <p className="text-lg font-light md:text-xl">{section.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

