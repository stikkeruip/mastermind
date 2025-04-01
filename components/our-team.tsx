"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Psychiatrist",
    image: "/images/team-psychiatrist.jpg",
    bio: "Dr. Mitchell specializes in addiction psychiatry with over 15 years of experience treating high-profile clients. Her approach combines traditional psychiatry with innovative therapeutic techniques.",
  },
  {
    name: "James Wilson",
    role: "Nutritionist",
    image: "/images/team-nutritionist.jpg",
    bio: "James creates personalized nutrition plans based on genetic testing and biochemical analysis. His protocols support brain health and recovery through targeted nutritional interventions.",
  },
  {
    name: "Drs. Erik van Beuningen",
    role: "Neurotherapist",
    image: "/images/erik-portrait.jpg",
    bio: "Drs. van Beuningen is a pioneer in neurofeedback therapy, helping clients retrain brain patterns associated with addiction and mental health challenges. His work has been featured in leading medical journals.",
  },
  {
    name: "Olivia Chen",
    role: "Wellness Director",
    image: "/images/team-wellness.jpg",
    bio: "Olivia integrates Eastern and Western wellness practices to create holistic healing experiences. Her expertise includes meditation, breathwork, and movement therapies that complement clinical treatments.",
  },
]

export default function OurTeam() {
  const [activeBio, setActiveBio] = useState<number | null>(null)

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
            Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            World-class experts dedicated to your recovery journey
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
              onMouseEnter={() => setActiveBio(index)}
              onMouseLeave={() => setActiveBio(null)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h3 className="font-serif text-xl font-light">{member.name}</h3>
                <p className="text-sm font-light text-white/80">{member.role}</p>

                <div
                  className={`mt-3 max-h-0 overflow-hidden text-sm font-light text-white/90 transition-all duration-300 ${
                    activeBio === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {member.bio}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

