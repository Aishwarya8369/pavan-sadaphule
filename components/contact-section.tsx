"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Get In Touch</span>
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                <p className="text-gray-400 mb-6">
                  Feel free to reach out for freelance opportunities, collaborations, or just to say hello!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-teal-600/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+91 9284795205</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-teal-600/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">pavan.sadaphule@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-teal-600/20 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">
                      514, North Sadar Bazaar, Near Lalit Kalabhavan Kendra, Solapur - 413003
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Emergency Contact</h4>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-teal-600/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Shrikant Sadaphule (Brother)</p>
                    <p className="text-white">+91 9665003303</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-[1px] rounded-lg">
              <div className="bg-[#0a0a0f]/60 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-teal-900/10 border-teal-900/50 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-teal-900/10 border-teal-900/50 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-teal-900/10 border-teal-900/50 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] bg-teal-900/10 border-teal-900/50 focus:border-teal-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
