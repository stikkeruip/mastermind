"use client"

import { motion } from "framer-motion"

export default function NutritionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] overflow-hidden rounded-lg md:h-auto"
            >
              <img src="/images/gourmet-nutrition.jpg" alt="Gourmet nutrition" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
                Tailored Nutrition
              </h2>
              <h3 className="mb-6 text-xl font-light text-muted-foreground md:text-2xl">
                Bio-Molecular & Genetic Nutrition Plans
              </h3>
              <p className="font-light leading-relaxed text-muted-foreground">
                Designed for your DNA and brain chemistry, our nutrition programs go beyond conventional approaches. We
                analyze your unique biochemical profile to create gourmet meal plans that support recovery, enhance
                cognitive function, and restore optimal health. Our executive chefs transform these scientific insights
                into exquisite culinary experiences that nourish both body and mind.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

