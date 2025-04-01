"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "After years of struggling with addiction, MASTERMIND2.0 provided the personalized care I needed in an environment that respected my privacy and dignity. The team's approach was transformative.",
    author: "C.L., CEO",
    location: "New York",
  },
  {
    quote:
      "The neurofeedback therapy was revolutionary for my anxiety. For the first time, I understood what was happening in my brain and learned how to regulate it. The luxury setting made the process feel like a retreat rather than treatment.",
    author: "M.R., Entrepreneur",
    location: "London",
  },
  {
    quote:
      "My family and I received treatment together at a private villa in Tuscany. The ability to heal collectively while enjoying a beautiful setting made all the difference in our recovery journey.",
    author: "J.D., Family Office Director",
    location: "Singapore",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

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
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Stories of transformation and healing
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: current === index ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center ${
                  current === index ? "z-10" : "-z-10"
                }`}
              >
                <Quote className="mb-6 h-12 w-12 text-ocean-blue/20" />
                <p className="mb-8 font-serif text-xl font-light italic leading-relaxed text-muted-foreground md:text-2xl">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="font-serif text-lg font-medium text-ocean-blue">{testimonial.author}</p>
                  <p className="text-sm font-light text-muted-foreground">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  current === index ? "bg-ocean-blue" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

