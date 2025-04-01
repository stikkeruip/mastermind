"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

interface CounterProps {
  end: number
  label: string
  duration?: number
  delay?: number
}

function Counter({ end, label, duration = 2, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const countUp = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(countUp)
        }
      }

      const timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(countUp)
      }, delay * 1000)

      return () => {
        clearTimeout(timeoutId)
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration, delay])

  return (
    <div ref={nodeRef} className="text-center">
      <div className="mb-2 font-serif text-4xl font-light text-ocean-blue md:text-5xl lg:text-6xl">{count}+</div>
      <p className="text-sm font-light text-muted-foreground md:text-base">{label}</p>
    </div>
  )
}

interface ScrollCounterProps {
  stats: {
    value: number
    label: string
  }[]
  title?: string
  subtitle?: string
}

export default function ScrollCounter({ stats, title, subtitle }: ScrollCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-soft-ivory py-24 md:py-32">
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

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Counter key={index} end={stat.value} label={stat.label} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}

