"use client"

import { motion, useMotionValue, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useRef, useEffect } from "react"


const projects = [
  {
    title: "JOHN CARTER",
    category: "Feature Film",
    year: "2011",
    role: "conversion roto",
    company: "Reliance Media Work",
    image: "/projects/john.jpg",
  },
  {
    title: "Avengers: Endgame",
    category: "Feature Film",
    year: "2019",
    role: "Paint Artist",
    company: "Framestore",
    image: "/projects/Avenger1.jpg",
  },
  {
    title: "The Jungle Book",
    category: "Feature Film",
    year: "2016",
    role: "Paint Artist",
    company: "Anibrain",
    image: "/projects/jungle.jpg",
  },
  {
    title: "Fantastic Beasts",
    category: "Feature Film",
    year: "2018",
    role: "VFX Paint Artist",
    company: "Framestore",
    image: "/projects/fan.jpg",
  },
  {
    title: "Monster Trucks",
    category: "Feature Film",
    year: "2015",
    role: "Vfx Roto",
    company: "Anibrain",
    image: "/projects/monster.jpg",
  },
  {
    title: "Borderlands",
    category: "Feature Film",
    year: "2024",
    role: "Comp Artist",
    company: "Redefine",
    image: "/projects/border.jpg",
  },
  {
    title: "Suicide Squad",
    category: "Feature Film",
    year: "2016",
    role: "Paint Artist",
    company: "Anibrain",
    image: "/projects/sui.jpg",
  },
  {
    title: "Nope",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/nope.jpg",
  },
   {
    title: "Little mermaid",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/little.jpg",
  },
   {
    title: "Kingsman",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/kingsman.jpg",
  },
   {
    title: "CHIP'N DALE",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/chip.jpg",
  },
   {
    title: "Thor",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/thor.jpg",
  },
   {
    title: "tom cruise oblivion",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/oblivion.jpg",
  },
   {
    title: "the secret garden",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/garden.jpg",
  },
   {
    title: "passengers",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/passenger.jpg",
  },
   {
    title: "pinocchio",
    category: "Feature Film",
    year: "2022",
    role: "Compositor",
    company: "MPC Film",
    image: "/projects/pinocchio.jpg",
  },
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)

  useEffect(() => {
    let animationId: any

    const startAnimation = async () => {
      if (!isHovered) {
        const currentX = x.get()
        const targetX = -100 * projects.length
        const remainingDistance = Math.abs(targetX - currentX)
        const totalDistance = 100 * projects.length
        const remainingDuration = (remainingDistance / totalDistance) * 200

        try {
          await controls.start({
            x: `${targetX}%`,
            transition: {
              duration: remainingDuration,
              ease: "linear",
            },
          })

          // Reset to start and continue
          if (!isHovered) {
            x.set(0)
            controls.set({ x: "0%" })
            startAnimation()
          }
        } catch (error) {
          // Animation was interrupted (likely by hover)
        }
      }
    }

    if (!isHovered) {
      startAnimation()
    } else {
      controls.stop()
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isHovered, controls, x, projects.length])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A continuous showcase of my VFX work across major productions
          </p>

          {/* Interactive Scroll Container */}
          <div className="relative" ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="scroll-container">
              <motion.div className="scroll-content" style={{ x }} animate={controls}>
                {/* First set */}
                {projects.map((project, index) => (
                  <div key={`set1-${index}`} className="project-card">
                    <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg">
                      <div className="bg-[#0a0a0f]/60 backdrop-blur-sm rounded-lg overflow-hidden">
                        <div className="relative">
                          {/* Vertical Rectangle Image Container */}
                          <div className="w-full h-80 overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg?height=320&width=240"}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=320&width=240"
                              }}
                            />
                          </div>
                          <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded">
                            {project.category}
                          </div>
                          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            {project.year}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-white font-bold text-sm mb-1">{project.title}</h3>
                          <p className="text-teal-400 text-xs mb-1">{project.role}</p>
                          <p className="text-gray-400 text-xs">{project.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {projects.map((project, index) => (
                  <div key={`set2-${index}`} className="project-card">
                    <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg">
                      <div className="bg-[#0a0a0f]/60 backdrop-blur-sm rounded-lg overflow-hidden">
                        <div className="relative">
                          {/* Vertical Rectangle Image Container */}
                          <div className="w-full h-80 overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg?height=320&width=240"}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=320&width=240"
                              }}
                            />
                          </div>
                          <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded">
                            {project.category}
                          </div>
                          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            {project.year}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-white font-bold text-sm mb-1">{project.title}</h3>
                          <p className="text-teal-400 text-xs mb-1">{project.role}</p>
                          <p className="text-gray-400 text-xs">{project.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg">
              View Complete Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
