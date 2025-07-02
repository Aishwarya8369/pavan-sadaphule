import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export const metadata: Metadata = {
  title: "Pavan K. Sadaphule | VFX Artist & Compositor",
  description:
    "Portfolio of Pavan K. Sadaphule, a professional VFX Artist and Compositor with over 14 years of experience",
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
