"use client"

import { motion } from "framer-motion"

export default function PersonalSection() {
  return (
    <section className="bg-ocean-blue/5 py-24 md:py-32">
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
                Up Close and Personal
              </h2>
              <p className="mb-8 text-xl font-light text-muted-foreground md:text-2xl">
                One client at a time. Whether alone, as a couple, or with your family — our focus is 100% you.
              </p>
              <p className="font-light leading-relaxed text-muted-foreground">
                Our approach is deeply personal and intensely focused. We believe that true healing happens when you
                receive undivided attention from a team dedicated solely to your wellbeing. This exclusive model allows
                us to craft a recovery experience that adapts to your unique needs, preferences, and lifestyle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-auto overflow-hidden rounded-lg"
            >
              {/* Wistia iframe with color matching section background */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/q5fhqkc98w?videoFoam=true&playerColor=00344A&volume=0.25"
                  title="Mastermind Video"
                  allow="autoplay; fullscreen"
                  allowtransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="absolute h-full w-full left-0 top-0"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

