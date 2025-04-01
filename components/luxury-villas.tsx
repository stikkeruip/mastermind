"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const villas = [
  {
    location: "St. Barts",
    image: "/images/villa-st-barts.jpg",
    description: "Exclusive beachfront property with panoramic Caribbean views",
  },
  {
    location: "Provence",
    image: "/images/villa-provence.jpg",
    description: "Historic estate nestled among lavender fields and vineyards",
  },
  {
    location: "Tuscany",
    image: "/images/villa-tuscany.jpg",
    description: "Renaissance villa surrounded by olive groves and cypress trees",
  },
  {
    location: "Sardinia",
    image: "/images/villa-sardinia.jpg",
    description: "Secluded coastal retreat with private access to crystal waters",
  },
  {
    location: "Cannes",
    image: "/images/villa-cannes.jpg",
    description: "Elegant French Riviera mansion with Mediterranean gardens",
  },
]

export default function LuxuryVillas() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === villas.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? villas.length - 1 : prevIndex - 1))
  }

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
            Luxury Villas
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">Le Marquis Concierge</p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {villas.map((villa) => (
                  <div key={villa.location} className="w-full flex-shrink-0 px-4">
                    <div className="overflow-hidden rounded-lg">
                      <div className="relative aspect-[16/9]">
                        <img
                          src={villa.image || "/placeholder.svg"}
                          alt={`Villa in ${villa.location}`}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-8 text-white">
                          <h3 className="mb-2 font-serif text-3xl font-light">{villa.location}</h3>
                          <p className="max-w-md text-lg font-light text-white/80">{villa.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {villas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  currentIndex === index ? "bg-ocean-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

