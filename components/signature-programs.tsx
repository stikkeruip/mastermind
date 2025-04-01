"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

const programs = [
  {
    name: "Quantum Leap Program (QLP)",
    description: "Our flagship program designed for comprehensive transformation",
    features: [
      "Intensive 4-8 week personalized therapy",
      "Advanced neurotherapy and biofeedback",
      "Genetic and biochemical testing",
      "Luxury accommodation at your chosen destination",
      "24/7 dedicated support team",
      "12-month aftercare program",
    ],
  },
  {
    name: "Standard Program",
    description: "Tailored recovery in exceptional surroundings",
    features: [
      "Personalized 2-4 week therapy program",
      "Daily wellness rituals and activities",
      "Nutritional guidance and support",
      "Premium accommodation options",
      "Discreet support team",
      "6-month aftercare support",
    ],
  },
]

// Define static variants outside the component
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
}

export default function SignaturePrograms() {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} id="programs" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
            Signature Programs
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Exclusive recovery experiences designed around your needs
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative flex-1 overflow-hidden rounded-lg border border-muted p-8"
              onMouseEnter={() => setActiveCard(index)}
            >
              <h3 className="mb-2 font-serif text-2xl font-light text-ocean-blue">{program.name}</h3>
              <p className="mb-6 text-sm font-light text-muted-foreground">{program.description}</p>

              <ul className="mt-auto space-y-3">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-ocean-blue" />
                    <span className="font-light text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 self-start border-b border-ocean-blue pb-1 text-sm font-light text-ocean-blue transition-colors hover:border-gold hover:text-gold">
                Learn More
              </button>

              {activeCard === index && <div className="absolute inset-0 -z-10 bg-ocean-blue/5"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

