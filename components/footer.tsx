import Link from "next/link"
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-teal-900/20 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-teal-400">Pavan</span> Sadaphule
            </Link>
            <p className="text-gray-400 mt-2">VFX Artist & Compositor</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-teal-900/20 flex items-center justify-center text-teal-400 hover:bg-teal-600 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-teal-900/20 flex items-center justify-center text-teal-400 hover:bg-teal-600 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-teal-900/20 flex items-center justify-center text-teal-400 hover:bg-teal-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pavan.sadaphule@gmail.com"
              className="h-10 w-10 rounded-full bg-teal-900/20 flex items-center justify-center text-teal-400 hover:bg-teal-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-teal-900/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pavan K. Sadaphule. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
