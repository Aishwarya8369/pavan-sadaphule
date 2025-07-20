"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, Award, Palette, Film } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Arts",
    institution: "Dr. BAMU",
    period: "Graduated April 2013",
    description: "Completed Bachelor of Arts degree with First Class honors.",
  },
  {
    degree: "Diploma in 3D Animation",
    institution: "Deca Animation Institute, Solapur",
    period: "Completed February 2010",
    description: "Completed a specialized diploma in 3D animation with Second Class honors.",
  },
]

const hobbies = [
  {
    name: "Drawing",
    icon: <Palette className="h-5 w-5 text-teal-400" />,
    description: "Passionate about traditional and digital drawing, which complements my VFX work.",
  },
  {
    name: "Watching Movies",
    icon: <Film className="h-5 w-5 text-teal-400" />,
    description: "Enjoy analyzing visual effects and cinematography in films.",
  },
  {
    name: "Playing Table Tennis",
    icon: <Award className="h-5 w-5 text-teal-400" />,
    description: "Recreational table tennis player.",
  },
]

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-[#0a0a0f]/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Education & Interests
          </span>
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-2 text-teal-400" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg">
                    <div className="bg-[#0a0a0f]/60 backdrop-blur-sm p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                      <p className="text-teal-400 mb-2">{item.institution}</p>
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" /> {item.period}
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Palette className="mr-2 text-teal-400" /> Hobbies & Interests
              </h3>
              <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg">
                <div className="bg-[#0a0a0f]/60 backdrop-blur-sm p-6 rounded-lg">
                  <ul className="space-y-4">
                    {hobbies.map((hobby, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3 p-2 bg-teal-900/20 rounded-full">{hobby.icon}</div>
                        <div>
                          <h4 className="font-medium text-white">{hobby.name}</h4>
                          <p className="text-gray-400 text-sm">{hobby.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Award className="mr-2 text-teal-400" /> Languages
                </h3>
                <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg">
                  <div className="bg-[#0a0a0f]/60 backdrop-blur-sm p-6 rounded-lg">
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span className="text-white">English</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`h-2 w-2 rounded-full ${i <= 4 ? "bg-teal-500" : "bg-gray-600"}`}
                            ></div>
                          ))}
                        </div>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-white">Hindi</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`h-2 w-2 rounded-full ${i <= 5 ? "bg-teal-500" : "bg-gray-600"}`}
                            ></div>
                          ))}
                        </div>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-white">Marathi</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`h-2 w-2 rounded-full ${i <= 5 ? "bg-teal-500" : "bg-gray-600"}`}
                            ></div>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
