"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600">
              Pavan K. Sadaphule
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">VFX Artist & Compositor</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mb-10"
          >
            <p className="text-lg text-gray-400">
              Experienced VFX professional specializing in Compositing and Prep-Paint with over 14 years of industry
              experience across major studios including Technicolor MPC, Framestore, and Anibrain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white"
            >
              <a href="#projects" className="flex items-center">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <a href="/resume.pdf" download>
            <Button size="lg" variant="outline" className="border-teal-600 text-teal-400 hover:bg-teal-600/10">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
        </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
