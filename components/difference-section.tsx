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
    <section className="bg-white py-24 md:py-32 relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/images/luxury-pattern.svg')] bg-repeat opacity-[0.02]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-2 flex justify-center">
            <div className="h-px w-16 bg-gold/50"></div>
          </div>
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
            The Difference
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light italic text-muted-foreground">"Just Do It Differently"</p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Use flex with consistent width cards instead of grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {differencePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square w-full overflow-hidden rounded-lg border-2 border-gold/20 bg-ocean-blue/5 shadow-md transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_25px_rgba(198,165,107,0.25)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/images/luxury-pattern.svg')] bg-repeat opacity-5"></div>

                {/* Gold accent line */}
                <div className="absolute left-0 top-0 h-1.5 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></div>
                
                {/* Decorative corner accent */}
                <div className="absolute right-4 top-4 h-4 w-4 rotate-45 border-t-2 border-r-2 border-gold/20 transition-all duration-500 group-hover:border-gold/70"></div>
                <div className="absolute bottom-4 left-4 h-4 w-4 rotate-45 border-b-2 border-l-2 border-gold/20 transition-all duration-500 group-hover:border-gold/70"></div>

                {/* Content container */}
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  {/* Title - visible only when not hovering */}
                  <h3 className="mb-4 font-serif text-xl font-light text-ocean-blue transition-all duration-500 group-hover:opacity-0 md:text-2xl">
                    <span className="relative">
                      {point.title}
                      <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gold/70 transition-all duration-500 group-hover:w-0 md:group-hover:w-0"></span>
                    </span>
                  </h3>

                  {/* Description - visible on hover */}
                  <p className="absolute px-4 text-base font-light text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 md:text-lg">
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
