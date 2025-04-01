"use client"

import { motion } from "framer-motion"
import { Brain, Activity, Zap } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Emotional regulation",
    description: "Gain control over emotional responses and reduce reactivity",
  },
  {
    icon: Activity,
    title: "Reduced addictive behavior",
    description: "Retrain neural pathways associated with dependency and cravings",
  },
  {
    icon: Zap,
    title: "Enhanced cognitive function",
    description: "Improve focus, clarity, and decision-making abilities",
  },
]

export default function NeurofeedbackSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
                Neurofeedback Therapy
              </h2>
              <p className="mb-8 font-light leading-relaxed text-muted-foreground">
                Our cutting-edge neurofeedback technology allows us to visualize your brain activity in real-time,
                identifying patterns associated with addiction and mental health challenges. Through personalized
                training sessions, we help you retrain these neural pathways, creating lasting change at the source.
              </p>

              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ocean-blue/10 text-ocean-blue">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-medium text-ocean-blue">{benefit.title}</h3>
                    <p className="text-sm font-light text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[400px] overflow-hidden rounded-lg md:h-auto"
            >
              <img
                src="/images/neurofeedback.jpg"
                alt="Neurofeedback therapy session"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 w-full p-6"
              >
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full">
                      <img
                        src="/images/erik-portrait.jpg"
                        alt="Dr. Erik Larson"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <h4 className="font-serif text-lg">Dr. Erik Larson</h4>
                      <p className="text-sm font-light">Lead Neurotherapist</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

