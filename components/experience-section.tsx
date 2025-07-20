"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    position: "Freelance Sr. Paint Artist",
    company: "Basilicfly Studio",
    period: "Current",
    description:
      "Working as a freelance Senior Paint Artist, handling complex paint and restoration tasks for visual effects projects.",
    logo: "/logos/basilicfly.png",
    fallback: "BS",
  },
  {
    position: "Sr. Compositor",
    company: "Redefine",
    period: "April 2023 - August 2024",
    description:
      "Worked as a Senior Compositor in a work-from-home capacity, handling complex compositing tasks for various projects.",
    duration: "1.4 years",
    logo: "/logos/redefine.png",
    fallback: "RD",
  },
  {
    position: "Compositor",
    company: "Ingenuity Studio, LLC",
    period: "September 2022 - April 2023",
    description:
      "Worked as a Compositor in a work-from-home capacity, creating seamless visual effects for various projects.",
    duration: "8 months",
    logo: "/logos/ingenuity.png",
    fallback: "IS",
  },
  {
    position: "Compositor",
    company: "Technicolor MPC Films",
    period: "September 2021 - September 2022",
    description: "Worked as a Compositor, creating high-quality visual effects for major film productions.",
    duration: "1 year",
    logo: "/logos/mpc.png",
    fallback: "MPC",
  },
  {
    position: "Compositor",
    company: "Blam Pictures London",
    period: "February 2021 - September 2021",
    description: "Worked remotely as a Compositor, collaborating with an international team on various projects.",
    duration: "7 months",
    logo: "/logos/blam.png",
    fallback: "BL",
  },
  {
    position: "Compositor & VFX Paint Artist",
    company: "Anibrain & Framestore Pune",
    period: "2014 - 2020",
    description:
      "Worked as a Compositor for 1.9 years and as a VFX Paint Artist for 4 years, handling a variety of visual effects tasks.",
    duration: "5.9 years",
    logo: "/logos/framestore.png",
    fallback: "FS",
  },
  {
    position: "Roto Artist",
    company: "Trace VFX Mumbai",
    period: "October 2013 - November 2014",
    description: "Worked as a Roto Artist, creating precise rotoscoping for various visual effects projects.",
    duration: "1 year",
    logo: "/logos/trace-vfx.png",
    fallback: "TV",
  },
  {
    position: "Roto Artist (3D Conversion)",
    company: "Reliance & Digital Domain Mumbai",
    period: "January 2011 - September 2013",
    description:
      "Worked as a Roto Artist for 3D conversion projects, contributing to the transformation of 2D footage into 3D.",
    duration: "2 years",
    logo: "/logos/digitaldomain.png",
    fallback: "DD",
  },
]

function CompanyLogo({ src, alt, company, fallback }: { src: string; alt: string; company: string; fallback: string }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Show fallback if error or no src
  if (imageError || !src) {
    console.log(`📋 Showing fallback for ${company}: ${imageError ? "Error" : "No src"}`)

    return (
      <div className="flex items-center justify-center w-12 h-12 text-white font-bold text-sm bg-gradient-to-br from-teal-600 to-blue-600 rounded-full border border-teal-400/20 shadow-lg">
        {company
          .split(" ")
          .map((word) => word[0])
          .join("")
          .substring(0, 2)
          .toUpperCase()}
      </div>
    )
  }

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg">
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center text-teal-600 font-bold text-xs bg-gradient-to-br from-teal-100 to-blue-100 rounded-full animate-pulse">
          <div className="text-center">
            <div className="text-xs">Loading...</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`w-10 h-10 object-contain transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => {
          console.log(`✅ Successfully loaded logo for ${company}`)
          setImageLoaded(true)
        }}
        onError={(e) => {
          console.error(`❌ Failed to load logo for ${company}`)
          setImageError(true)
        }}
      />
    </div>
  )
}

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Work Experience
          </span>
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-teal-600/30 pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal-600" />
                <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg">
                  <div className="bg-[#0a0a0f]/60 backdrop-blur-sm p-6 rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Circle Logo Container */}
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-full p-2 flex items-center justify-center w-16 h-16 border-2 border-teal-500/30 shadow-lg">
                          <CompanyLogo
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            company={exp.company}
                            fallback={exp.fallback}
                          />
                        </div>
                      </div>

                      {/* Company Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                          {exp.duration && <span className="text-teal-400 text-sm mt-1 md:mt-0">{exp.duration}</span>}
                        </div>
                        <p className="text-teal-400 mb-2 font-medium">{exp.company}</p>
                        <div className="flex items-center text-gray-400 text-sm mb-3">
                          <Calendar className="h-4 w-4 mr-1" /> {exp.period}
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
