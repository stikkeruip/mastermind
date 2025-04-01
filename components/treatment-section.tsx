"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const treatments = [
  {
    id: "substance",
    name: "Substance Addictions",
    description: "Comprehensive treatment for alcohol, prescription medications, and other substance dependencies.",
    image: "/images/treatment-substance.jpg",
  },
  {
    id: "depression",
    name: "Depression & Anxiety",
    description: "Innovative approaches to mood disorders that address root causes and provide lasting relief.",
    image: "/images/treatment-depression.jpg",
  },
  {
    id: "burnout",
    name: "Burnout & Executive Stress",
    description: "Specialized programs for high-performing individuals facing career-related stress and exhaustion.",
    image: "/images/treatment-burnout.jpg",
  },
  {
    id: "trauma",
    name: "PTSD & Trauma",
    description: "Evidence-based therapies that help process and integrate traumatic experiences.",
    image: "/images/treatment-trauma.jpg",
  },
  {
    id: "codependency",
    name: "Co-dependency",
    description: "Support for establishing healthy boundaries and relationship patterns.",
    image: "/images/treatment-codependency.jpg",
  },
  {
    id: "eating",
    name: "Eating Disorders",
    description: "Holistic treatment addressing the psychological and physiological aspects of disordered eating.",
    image: "/images/treatment-eating.jpg",
  },
]

export default function TreatmentSection() {
  const [activeTab, setActiveTab] = useState("substance")

  return (
    <section className="bg-white py-24 md:py-32">
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
            Comprehensive care for a range of challenges
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="substance" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mx-auto mb-8 grid max-w-3xl grid-cols-2 gap-2 bg-transparent md:grid-cols-3 lg:grid-cols-6">
              {treatments.map((treatment) => (
                <TabsTrigger
                  key={treatment.id}
                  value={treatment.id}
                  className="rounded-full border border-muted bg-white px-4 py-2 text-sm font-light data-[state=active]:border-ocean-blue data-[state=active]:bg-ocean-blue data-[state=active]:text-white"
                >
                  {treatment.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {treatments.map((treatment) => (
              <TabsContent key={treatment.id} value={treatment.id} className="mt-0">
                <div className="overflow-hidden rounded-lg">
                  <div className="grid md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto">
                      <img
                        src={treatment.image || "/placeholder.svg"}
                        alt={treatment.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center bg-white p-8 md:p-12">
                      <h3 className="mb-4 font-serif text-2xl font-light text-ocean-blue">{treatment.name}</h3>
                      <p className="mb-6 font-light leading-relaxed text-muted-foreground">{treatment.description}</p>
                      <p className="font-light leading-relaxed text-muted-foreground">
                        Our approach combines evidence-based clinical therapies with innovative treatments tailored to
                        your specific needs. We address both the symptoms and underlying causes, creating a
                        comprehensive healing experience that supports lasting recovery.
                      </p>
                      <button className="mt-8 self-start border-b border-ocean-blue pb-1 text-sm font-light text-ocean-blue transition-colors hover:border-gold hover:text-gold">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

