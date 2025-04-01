"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Sparkles, Clock, Globe, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Ultra-discreet private care",
    description: "Complete privacy and confidentiality at every step of your journey",
  },
  {
    icon: Sparkles,
    title: "Innovative & personalized therapies",
    description: "Cutting-edge treatments tailored specifically to your unique needs",
  },
  {
    icon: Clock,
    title: "QLP (Quantum Leap Program) aftercare",
    description: "Comprehensive support that continues long after your retreat ends",
  },
  {
    icon: Globe,
    title: "International flexibility",
    description: "Treatment options available at luxury destinations worldwide",
  },
  {
    icon: Headphones,
    title: "Concierge-level service",
    description: "Attentive support that anticipates your every need",
  },
]

// Define static variants outside the component to prevent recreation on render
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
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            MASTERMIND2.0 offers an unparalleled approach to recovery that combines clinical excellence with luxury and
            discretion.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-lg border-2 border-ocean-blue/10 bg-background p-8 shadow-sm transition-all duration-300 hover:border-ocean-blue/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ocean-blue/10 text-ocean-blue">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium text-ocean-blue">{feature.title}</h3>
              <p className="font-light text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}

          {/* Last two items in a centered container */}
          <div className="col-span-full mx-auto flex w-full max-w-4xl flex-col gap-8 lg:flex-row">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index + 3} // Continue the animation sequence
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex-1 rounded-lg border-2 border-ocean-blue/10 bg-background p-8 shadow-sm transition-all duration-300 hover:border-ocean-blue/30 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ocean-blue/10 text-ocean-blue">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium text-ocean-blue">{feature.title}</h3>
                <p className="font-light text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

