"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const destinations = [
  {
    name: "United Kingdom",
    image: "/images/uk.jpg",
    description: "Historic estates and countryside retreats for discreet recovery",
  },
  {
    name: "Germany",
    image: "/images/germany.jpg",
    description: "Alpine wellness centers with cutting-edge medical facilities",
  },
  {
    name: "Greece",
    image: "/images/greece.jpg",
    description: "Aegean beauty with world-class wellness facilities",
  },
  {
    name: "France",
    image: "/images/france.jpg",
    description: "Elegant châteaux and Mediterranean villas for refined healing",
  },
  {
    name: "Thailand",
    image: "/images/thailand.jpg",
    description: "Tropical sanctuaries combining Eastern and Western approaches",
  },
  {
    name: "Private Island",
    image: "/images/private-island.jpg",
    description: "Complete seclusion and privacy on exclusive island retreats",
  },
]

export default function DestinationSection() {
  const [activeDestination, setActiveDestination] = useState(0)

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
            Choose Your Destination
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Whether at home, at sea, or in a private island villa — we bring recovery to you.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activeDestination === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="mb-2 font-serif text-3xl font-light">{destination.name}</h3>
                  <p className="max-w-md text-lg font-light text-white/80">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {destinations.map((destination, index) => (
              <button
                key={destination.name}
                onClick={() => setActiveDestination(index)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-light transition-colors ${
                  activeDestination === index
                    ? "bg-ocean-blue text-white"
                    : "bg-white/80 text-muted-foreground hover:bg-white"
                }`}
              >
                <MapPin className="h-4 w-4" />
                {destination.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

