"use client"

import { useRef, useEffect, useState } from "react"
import { Check } from "lucide-react"

const programs = [
  {
    name: "Quantum Leap Program (QLP)",
    description: "Our flagship program designed for comprehensive transformation",
    features: [
      "Intensive 4-8 week personalized therapy",
      "Advanced neurotherapy and biofeedback",
      "Genetic and biochemical testing",
      "Luxury accommodation at your chosen destination",
      "24/7 dedicated support team",
      "12-month aftercare program",
    ],
  },
  {
    name: "Standard Program",
    description: "Tailored recovery in exceptional surroundings",
    features: [
      "Personalized 2-4 week therapy program",
      "Daily wellness rituals and activities",
      "Nutritional guidance and support",
      "Premium accommodation options",
      "Discreet support team",
      "6-month aftercare support",
    ],
  },
]

export default function SignaturePrograms() {
  // Start with hidden content
  const [contentReady, setContentReady] = useState(false)
  const sectionRef = useRef(null)
  
  useEffect(() => {
    // Initial rendering safety delay
    const initialTimeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Longer delay to ensure layout calculations are complete
            setTimeout(() => {
              setContentReady(true)
            }, 300)
            observer.disconnect()
          }
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -50px 0px"
        }
      )
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }
      
      return () => observer.disconnect()
    }, 200)
    
    return () => clearTimeout(initialTimeout)
  }, [])

  // Styles to help prevent layout shifts
  const cardStyle = {
    willChange: "opacity, transform",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)"
  }

  return (
    <section ref={sectionRef} id="programs" className="bg-ocean-blue/5 py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Pre-rendering invisible content with opacity 0 */}
        <div className={`transition-opacity duration-500 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
              Signature Programs
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
              Exclusive recovery experiences designed around your needs
            </p>
          </div>

          <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
            {programs.map((program, index) => (
              <div
                key={program.name}
                style={cardStyle}
                className="group relative flex-1 overflow-hidden rounded-lg border border-muted bg-white p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_25px_rgba(198,165,107,0.15)]"
              >
                {/* Subtle gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-ocean-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Gold accent line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></div>

                <div className="relative z-10">
                  <h3 className="mb-2 font-serif text-2xl font-light text-ocean-blue transition-colors duration-300 group-hover:text-ocean-blue/90">
                    {program.name}
                  </h3>
                  <p className="mb-6 text-sm font-light text-muted-foreground">{program.description}</p>

                  <ul className="mt-auto space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 text-ocean-blue transition-colors duration-300 group-hover:text-gold" />
                        <span className="font-light text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 overflow-hidden">
                    <span className="relative inline-block border-b border-ocean-blue pb-1 text-sm font-light text-ocean-blue transition-all duration-300 before:absolute before:bottom-[-1px] before:left-0 before:h-[1px] before:w-0 before:bg-gold before:transition-all before:duration-300 group-hover:border-transparent group-hover:text-gold group-hover:before:w-full">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
