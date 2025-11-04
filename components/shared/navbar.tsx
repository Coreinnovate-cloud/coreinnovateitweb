"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Pivot as Hamburger } from "hamburger-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "./button"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const location = usePathname()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
  }, [isOpen])

  const linkClasses = (path: string) =>
    `relative transition-colors duration-300 hover:text-primary ${
      location === path
        ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary"
        : ""
    }`

  return (
    <div className="relative">
      <div className="fixed w-full z-50">
        <div className="backdrop-blur-md bg-dark/70 border-b border-white/10">
          <nav className="py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
              >
                <Image
                  src="/logo.png"
                  width={107}
                  height={68}
                  alt="core innovate logo"
                  className="h-12 w-auto sm:h-16"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "text-white font-dm-sans font-medium text-base transition-all duration-300 hover:text-primary flex items-center gap-1.5 py-2 group",
                      location === "/services" && "text-primary"
                    )}
                  >
                    Services
                    <svg
                      className={cn(
                        "w-4 h-4 transition-all duration-300 ease-out",
                        isServicesOpen && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <Link
                  className={cn(
                    linkClasses("/resources"),
                    "text-white font-dm-sans font-medium text-base"
                  )}
                  href="/resources"
                >
                  Resources
                </Link>
                <Link
                  className={cn(
                    linkClasses("/about-us"),
                    "text-white font-dm-sans font-medium text-base"
                  )}
                  href="/about-us"
                >
                  About Us
                </Link>

                {/* Contact Button */}
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Hamburger
                  toggled={isOpen}
                  toggle={setIsOpen}
                  color="#fff"
                  size={24}
                />
              </div>
            </div>
          </nav>
        </div>

        {/* Full-width Dropdown Menu */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="overflow-hidden backdrop-blur-lg bg-dark/98 border-b border-white/5 shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <Link
                        href={`/services#${service.id}`}
                        className="group block px-6 py-4 rounded-lg text-white/80 hover:text-primary hover:bg-white/5 transition-all duration-300 font-dm-sans text-base font-medium border border-transparent hover:border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {service.name}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-dark/98 backdrop-blur-lg z-[70] flex flex-col p-4 items-center gap-12 text-white font-dm-sans text-lg font-medium overflow-y-auto"
          >
            <div className="w-full flex items-center justify-between top-6">
              <Link onClick={() => setIsOpen(false)} href="/">
                <Image
                  src="/logo.png"
                  width={107}
                  height={68}
                  alt="core innovate logo"
                />
              </Link>

              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                color="#fff"
                size={24}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 flex flex-col items-center w-full max-w-md"
            >
              {/* Services Section */}
              <div className="w-full">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-center gap-2 w-full py-2 text-white hover:text-primary transition-colors"
                >
                  Services
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      isServicesOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 space-y-4"
                    >
                      {services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            onClick={() => setIsOpen(false)}
                            href={`/services#${service.id}`}
                            className="block text-center text-white/70 hover:text-primary transition-colors text-base"
                          >
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/resources"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about-us"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <Button
                  size="lg"
                  className="hover:scale-105 transition-transform"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavBar

const services = [
  { name: "Managed IT Services", id: "managed-it-services" },
  { name: "Cloud Management", id: "cloud-management" },
  { name: "Managed Security", id: "managed-security" },
  { name: "Project Management", id: "project-management" },
  { name: "Software Development", id: "software-development" },
  { name: "Project Risk", id: "project-risk" },
]
