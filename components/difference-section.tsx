"use client"

import { motion } from "framer-motion"

const differencePoints = [
  {
    title: "Real-Life Immersion, Not Isolation",
    description:
      "Most recovery programs remove you from your triggers by isolating you in sterile environments. We bring healing into the environments that reflect the life you want to live. Recovery in a luxury hotel or villa isn't indulgence — it's integration.",
  },
  {
    title: "One Client at a Time",
    description:
      "Unlike programs that shuffle multiple clients through a one-size-fits-all plan, we focus entirely on you — as an individual, as a couple, or as a family.",
  },
  {
    title: "Global Freedom of Location",
    description:
      "Choose your destination — Maldives, Tuscany, St. Barts, Aspen — we design your program around where you feel safe, inspired, and at peace.",
  },
  {
    title: "An Elite, Integrated Team",
    description:
      "You don't just get a therapist — you get a team: psychiatric experts, wellness specialists, neurofeedback practitioners, nutritionists — all focused on your healing.",
  },
  {
    title: "Luxury as a Healing Tool",
    description:
      "Luxury isn't an escape — it's an accelerator. Comfort, beauty, and privacy allow your nervous system to reset, your mind to open, and your body to heal faster.",
  },
]

export default function DifferenceSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
            The Difference
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light italic text-muted-foreground">"Just Do It Differently"</p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differencePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-lg border border-muted bg-white shadow-sm transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_25px_rgba(198,165,107,0.15)]"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/images/luxury-pattern.svg')] bg-repeat opacity-5"></div>

                {/* Gold accent line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></div>

                {/* Content container */}
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  {/* Title - always visible */}
                  <h3 className="mb-4 font-serif text-xl font-light text-ocean-blue transition-all duration-500 group-hover:translate-y-[-30px] md:text-2xl">
                    {point.title}
                  </h3>

                  {/* Description - visible on hover */}
                  <p className="absolute px-4 text-sm font-light text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-lg font-light italic text-muted-foreground">
            Why at Resorts? Because recovery should prepare you for real life — not remove you from it.
          </p>
        </div>
      </div>
    </section>
  )
}

