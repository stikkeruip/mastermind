"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const locations = [
  {
    name: "Maldives",
    image: "/images/maldives.jpg",
    description: "Pristine beaches and overwater villas for ultimate serenity",
  },
  {
    name: "Bali",
    image: "/images/bali.jpg",
    description: "Spiritual healing in lush tropical surroundings",
  },
  {
    name: "Amalfi Coast",
    image: "/images/amalfi.jpg",
    description: "Mediterranean elegance with breathtaking coastal views",
  },
  {
    name: "Lake Como",
    image: "/images/lake-como.jpg",
    description: "Historic luxury in a tranquil Italian lake setting",
  },
  {
    name: "Greece",
    image: "/images/greece.jpg",
    description: "Aegean beauty with world-class wellness facilities",
  },
  {
    name: "Aspen",
    image: "/images/aspen.jpg",
    description: "Mountain retreat for reflection and rejuvenation",
  },
]

export default function DifferenceSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1))
  }

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
            The Difference
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light italic text-muted-foreground">"Just Do It Differently"</p>
        </div>

        {/* Desktop Carousel */}
        <div className="relative mx-auto hidden max-w-6xl md:block">
          <div className="grid grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-80 overflow-hidden rounded-lg"
              >
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="mb-2 font-serif text-2xl font-light">{location.name}</h3>
                  <p className="max-w-xs text-sm font-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {location.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="relative mx-auto md:hidden">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {locations.map((location) => (
                <div key={location.name} className="relative h-80 w-full flex-shrink-0">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="mb-2 font-serif text-2xl font-light">{location.name}</h3>
                    <p className="max-w-xs text-sm font-light">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-ocean-blue" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
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

