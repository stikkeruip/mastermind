"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: "Our Approach", href: "#approach" },
    { name: "Destinations", href: "#destinations" },
    { name: "Programs", href: "#programs" },
    { name: "Treatments", href: "#treatments" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-soft-ivory py-3 shadow-sm" : "bg-transparent py-6",
      )}
    >
      <div className={cn("absolute inset-0 transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-40")}>
        {/* Frosted glass effect background */}
        <div
          className={cn(
            "h-full w-full",
            scrolled ? "backdrop-blur-md bg-soft-ivory/80" : "bg-black/30 backdrop-blur-sm",
          )}
        ></div>
      </div>

      <div className="container relative mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            scale: scrolled ? 0.9 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="z-10"
        >
          <Link href="/" className="flex items-center">
            <img
              src="/images/nav-bar-logo.svg"
              alt="MASTERMIND2.0"
              className="h-10 w-auto transition-all duration-300 md:h-12"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="z-10 hidden items-center space-x-1 md:flex lg:space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} scrolled={scrolled}>
              {link.name}
            </NavLink>
          ))}
          <div className="ml-4">
            <CtaButton scrolled={scrolled} />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="z-10 rounded-full p-2 text-ocean-blue transition-colors hover:bg-ocean-blue/5 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-ocean-blue/95 backdrop-blur-sm"
            >
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex w-full flex-col items-center space-y-6 px-4 text-center"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1 + index * 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: { delay: 0.05 * index },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-light text-white transition-colors hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 + navLinks.length * 0.1 },
                  }}
                  className="mt-4 pt-4"
                >
                  <CtaButton scrolled={false} isMobile={true} onClick={() => setMobileMenuOpen(false)} />
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

// Navigation Link Component
function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string
  children: React.ReactNode
  scrolled: boolean
}) {
  return (
    <Link
      href={href}
      className="group relative px-3 py-2 text-sm font-light tracking-wide transition-colors md:px-4 lg:text-base"
    >
      <span className={cn("relative z-10 transition-colors duration-300", scrolled ? "text-ocean-blue" : "text-white")}>
        {children}
      </span>
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

// CTA Button Component
function CtaButton({
  scrolled,
  isMobile = false,
  onClick,
}: {
  scrolled: boolean
  isMobile?: boolean
  onClick?: () => void
}) {
  return (
    <motion.button
      whileHover={{
        boxShadow: "0 0 10px rgba(198, 165, 107, 0.5)",
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-full border px-5 py-2 text-sm font-light tracking-wide transition-all duration-300 md:px-6 md:py-2.5 lg:text-base",
        isMobile
          ? "border-gold bg-transparent text-white hover:bg-gold/10"
          : scrolled
            ? "border-ocean-blue bg-transparent text-ocean-blue hover:border-gold hover:text-gold"
            : "border-white bg-transparent text-white hover:border-gold hover:text-gold",
      )}
    >
      START YOUR JOURNEY
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
    </motion.button>
  )
}

