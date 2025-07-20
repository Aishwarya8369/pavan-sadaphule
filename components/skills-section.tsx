"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Layers, Wand2, Brush, Film, Scissors, Palette, Monitor, Laptop } from "lucide-react"

const skills = [
  {
    name: "Compositing",
    icon: <Layers className="h-8 w-8 text-teal-400" />,
    description: "Expert in digital compositing techniques for seamless integration of elements",
    level: 95,
  },
  {
    name: "Prep-Paint",
    icon: <Brush className="h-8 w-8 text-teal-400" />,
    description: "Specialized in clean plate creation and digital paint for VFX",
    level: 90,
  },
  {
    name: "Nuke",
    icon: <Wand2 className="h-8 w-8 text-teal-400" />,
    description: "Advanced node-based compositing software",
    level: 95,
  },
  {
    name: "Silhouette",
    icon: <Scissors className="h-8 w-8 text-teal-400" />,
    description: "Specialized paint and roto software",
    level: 85,
  },
  {
    name: "Mocha",
    icon: <Film className="h-8 w-8 text-teal-400" />,
    description: "Planar tracking and masking software",
    level: 80,
  },
  {
    name: "Rotoscoping",
    icon: <Palette className="h-8 w-8 text-teal-400" />,
    description: "Frame-by-frame rotoscoping for precise masks",
    level: 90,
  },
  {
    name: "3D Conversion",
    icon: <Monitor className="h-8 w-8 text-teal-400" />,
    description: "Converting 2D footage to stereoscopic 3D",
    level: 75,
  },
  {
    name: "Remote Collaboration",
    icon: <Laptop className="h-8 w-8 text-teal-400" />,
    description: "Experienced in remote work and international collaboration",
    level: 85,
  },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-[#0a0a0f]/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Technical Skills
          </span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg"
            >
              <div className="bg-[#0a0a0f]/60 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col">
                <div className="mb-4 p-3 bg-teal-900/20 rounded-full w-fit">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                <div className="mt-auto">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-xs text-gray-400 mt-1">{skill.level}%</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
