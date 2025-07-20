"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-[#0a0a0f]/80">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-gradient-to-br from-teal-600/20 to-blue-600/20 p-1 rounded-lg">
              <div className="bg-[#0a0a0f] rounded-lg overflow-hidden">
                <img src="/images/pavan.png"
  alt="Pavan K. Sadaphule"
  className="w-full h-auto"
/>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                I am a passionate VFX Artist and Compositor with over 14 years of experience in the visual effects
                industry. My expertise lies in Compositing and Prep-Paint, where I've contributed to numerous
                high-profile projects.
              </p>
              <p className="text-gray-300">
                Currently working as a freelance Sr. Paint artist at Basilicfly studio, I've previously held positions
                at prestigious studios including Redefine, Ingenuity Studio, Technicolor MPC Films, Blam Pictures
                London, Anibrain, and Framestore Pune.
              </p>
              <p className="text-gray-300">
                My career objective is to work to the best of my ability, deliver results to respective organizations,
                gain cross-industry exposure, and utilize varied perspectives for the goals of the organization as well
                as for personal growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
