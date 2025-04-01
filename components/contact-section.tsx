"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
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
            Begin Your Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Contact us for a confidential consultation
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-lg bg-white p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 font-serif text-2xl font-light text-ocean-blue">Thank You</h3>
              <p className="mb-6 font-light text-muted-foreground">
                Your message has been received. A member of our team will contact you shortly to discuss your journey
                with MASTERMIND2.0.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="border border-ocean-blue bg-transparent text-ocean-blue hover:bg-ocean-blue hover:text-white"
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-light text-muted-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-muted bg-transparent font-light"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-light text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-muted bg-transparent font-light"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-light text-muted-foreground">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    className="border-muted bg-transparent font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-light text-muted-foreground">
                    Location
                  </label>
                  <Input id="location" placeholder="Your location" className="border-muted bg-transparent font-light" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-light text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs"
                    className="min-h-[120px] border-muted bg-transparent font-light"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 text-sm font-light text-muted-foreground">
                <p>All communications are strictly confidential. Your privacy is our priority.</p>
              </div>
              <Button type="submit" className="w-full bg-ocean-blue text-white hover:bg-ocean-blue/90">
                Submit Inquiry
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}

