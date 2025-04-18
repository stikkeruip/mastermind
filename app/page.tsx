import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WelcomeSection from "@/components/welcome-section"
import DifferenceSection from "@/components/difference-section"
import PersonalSection from "@/components/personal-section"
import WhyChooseUs from "@/components/why-choose-us"
import SignaturePrograms from "@/components/signature-programs"
import NutritionSection from "@/components/nutrition-section"
import NeurofeedbackSection from "@/components/neurofeedback-section"
import DestinationSection from "@/components/destination-section"
import TreatmentSection from "@/components/treatment-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <DifferenceSection />
      <PersonalSection />
      <WhyChooseUs />
      <SignaturePrograms />
      <NutritionSection />
      <NeurofeedbackSection />
      <DestinationSection />
      <TreatmentSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
