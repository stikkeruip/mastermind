"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  title?: string
  subtitle?: string
}

export default function ImageGallery({ images, title, subtitle }: ImageGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}

            {subtitle && <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">{subtitle}</p>}
          </div>
        )}

        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div style={{ x }} className="flex w-max gap-6">
            {images.concat(images).map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] w-[400px] overflow-hidden rounded-lg md:h-[400px] md:w-[600px]"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

