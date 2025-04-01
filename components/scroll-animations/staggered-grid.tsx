"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StaggeredGridProps {
  items: {
    icon?: React.ReactNode
    title: string
    description: string
  }[]
  columns?: 2 | 3 | 4
  title?: string
  subtitle?: string
}

export default function StaggeredGrid({ items, columns = 3, title, subtitle }: StaggeredGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-4 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl"
              >
                {title}
              </motion.h2>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto max-w-2xl text-lg font-light text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`mx-auto grid max-w-6xl gap-8 md:grid-cols-${columns}`}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-lg border border-muted bg-background p-8 transition-all duration-300 hover:border-ocean-blue/20 hover:shadow-lg"
            >
              {item.icon && (
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ocean-blue/10 text-ocean-blue transition-colors duration-300 group-hover:bg-ocean-blue group-hover:text-white">
                  {item.icon}
                </div>
              )}
              <h3 className="mb-3 font-serif text-xl font-medium text-ocean-blue">{item.title}</h3>
              <p className="font-light text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

