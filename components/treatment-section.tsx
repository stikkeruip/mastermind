"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Pill, Brain, Heart } from "lucide-react"

// Define treatment categories and items
const treatmentCategories = [
  {
    id: "addictions",
    name: "Addictions",
    icon: Pill,
    color: "bg-muted-gold/10 text-muted-gold",
    items: [
      "Dual Diagnosis",
      "Alcoholism",
      "Drug addictions (illicit and prescribed drugs)",
      "Compulsive eating",
      "Gambling",
      "Sex compulsivity",
      "Internet porn compulsivity",
      "Gaming addiction",
      "Love compulsivity"
    ]
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: Brain,
    color: "bg-sage-green/10 text-sage-green",
    items: [
      "Depression (including postnatal)",
      "Bipolar",
      "ADHD",
      "Anxiety and Stress",
      "Burnout",
      "Co-dependency",
      "Chronic pain",
      "Trauma / PTSD",
      "Self-harm",
      "Eating disorders",
      "Body dysmorphia",
      "Work-Life challenges"
    ]
  },
  {
    id: "general",
    name: "General",
    icon: Heart,
    color: "bg-warm-beige/10 text-ocean-blue",
    items: [
      "Relationship/Marital issues",
      "Family issues",
      "Sex and Sexuality issues",
      "Personal growth"
    ]
  }
]

export default function TreatmentSection() {
  return (
    <section className="bg-ocean-blue/5 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
            What We Treat
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            A holistic approach to healing, tailored to your unique journey
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {treatmentCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="rounded-lg border border-muted bg-white/80 shadow-sm backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-t-lg p-6">
                    <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full ${category.color.split(" ")[0]}`}></div>
                    
                    <div className="relative z-10 flex items-start">
                      <div>
                        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${category.color}`}>
                          <category.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 font-serif text-2xl font-light tracking-wide text-ocean-blue">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-b-lg border-t border-muted/50 bg-white/50 p-6">
                    <ul className="grid gap-3">
                      {category.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 * i }}
                          className="font-light text-muted-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`h-1.5 w-1.5 rounded-full ${category.color.split(" ")[1]}`}></div>
                            <span>{item}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="mx-auto max-w-2xl font-light italic text-muted-foreground">
              "Our approach is deeply personalized. We recognize that each individual's journey is unique, and we tailor our treatments accordingly, combining time-tested methodologies with innovative techniques."
            </p>
            <div className="mt-8 flex items-center justify-center">
              <button className="group relative overflow-hidden rounded-full border border-ocean-blue px-6 py-3 text-sm font-light text-ocean-blue transition-all duration-300 hover:border-transparent hover:text-white">
                <span className="relative z-10">Schedule a confidential consultation</span>
                <span className="absolute bottom-0 left-0 h-0 w-full bg-ocean-blue transition-all duration-300 group-hover:h-full"></span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
