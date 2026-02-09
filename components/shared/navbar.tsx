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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null)

  const location = usePathname()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    // Reset services dropdown when mobile menu closes
    if (!isOpen) {
      setIsServicesOpen(false)
      setExpandedMobileCategory(null)
    }
  }, [isOpen])

  useEffect(() => {
    // Set default hovered category when dropdown opens
    if (isServicesOpen && !hoveredCategory) {
      setHoveredCategory(serviceCategories[0].title)
    } else if (!isServicesOpen) {
      setHoveredCategory(null)
    }
  }, [isServicesOpen, hoveredCategory])

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
                    linkClasses("/cost-estimator"),
                    "text-white font-dm-sans font-medium text-base"
                  )}
                  href="/cost-estimator"
                >
                  Cost Estimator
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
              onMouseLeave={() => {
                setIsServicesOpen(false)
                setHoveredCategory(null)
              }}
              className="overflow-hidden backdrop-blur-lg bg-dark/98 border-b border-white/5 shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
              >
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Column - Categories */}
                  <div className="col-span-4 space-y-2 border-r border-white/10 pr-8">
                    {serviceCategories.map((category, categoryIndex) => (
                      <motion.button
                        key={category.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        onMouseEnter={() => setHoveredCategory(category.title)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-dm-sans font-semibold text-sm uppercase tracking-wider",
                          hoveredCategory === category.title
                            ? "bg-white/10 text-primary border border-white/20"
                            : "text-white/85 hover:bg-white/5 border border-transparent"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.title}</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Right Column - Services */}
                  <div className="col-span-8">
                    <AnimatePresence mode="wait">
                      {hoveredCategory ? (
                        <motion.div
                          key={hoveredCategory}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <h3 className="text-primary font-dm-sans font-bold text-lg mb-6">
                            {hoveredCategory}
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {serviceCategories
                              .find((cat) => cat.title === hoveredCategory)
                              ?.services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={service.href}
                                  className="group block px-4 py-3 rounded-lg text-white/85 hover:text-primary hover:bg-white/5 transition-all duration-300 font-dm-sans text-sm font-medium border border-transparent hover:border-white/10"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                                      {service.name}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center h-full min-h-[300px]"
                        >
                          <p className="text-white/50 text-center font-dm-sans">
                            Hover over a category to view services
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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
            className="fixed top-0 left-0 w-full h-screen bg-dark/98 backdrop-blur-lg z-[70] flex flex-col p-4 sm:p-6 items-center gap-8 sm:gap-12 text-white font-dm-sans text-lg font-medium overflow-y-auto pb-safe"
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
              className="space-y-4 sm:space-y-6 flex flex-col items-center w-full max-w-md px-2"
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
                      className="overflow-hidden mt-4 space-y-2"
                    >
                      {serviceCategories.map((category, categoryIndex) => (
                        <motion.div
                          key={category.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.05 }}
                          className="border border-white/10 rounded-lg overflow-hidden"
                        >
                          {/* Category Header - Clickable */}
                          <button
                            onClick={() => setExpandedMobileCategory(
                              expandedMobileCategory === category.title ? null : category.title
                            )}
                            className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <span className="text-primary font-dm-sans font-semibold text-xs uppercase tracking-wider">
                              {category.title}
                            </span>
                            <svg
                              className={cn(
                                "w-4 h-4 text-primary transition-transform duration-300",
                                expandedMobileCategory === category.title && "rotate-180"
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

                          {/* Category Services - Collapsible */}
                          <AnimatePresence>
                            {expandedMobileCategory === category.title && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-2 py-2 space-y-1 bg-white/[0.02]">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.id}
                                      onClick={() => {
                                        setIsOpen(false)
                                        setIsServicesOpen(false)
                                        setExpandedMobileCategory(null)
                                      }}
                                      href={service.href}
                                      className="text-left text-white/85 hover:text-primary hover:bg-white/5 transition-colors text-sm py-2.5 px-3 min-h-11 flex items-center rounded-md"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
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
                href="/cost-estimator"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Cost Estimator
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

const serviceCategories = [
  {
    title: "Core IT & Cyber Security",
    services: [
      {
        name: "Managed IT Services",
        id: "managed-it-services",
        href: "/services/managed-it-services",
      },
      {
        name: "Managed Cybersecurity Services",
        id: "managed-security",
        href: "/services/managed-security",
      },
      {
        name: "Security Operations Centre (SOC) & Endpoint Security",
        id: "soc-endpoint-security",
        href: "/services/soc-endpoint-security",
      },
      {
        name: "Managed Password Management",
        id: "managed-password-management",
        href: "/services/managed-password-management",
      },
      {
        name: "Email & Cloud Security",
        id: "email-cloud-security",
        href: "/services/email-cloud-security",
      },
      {
        name: "Phishing Awareness & Security Training",
        id: "phishing-awareness-training",
        href: "/services/phishing-awareness-training",
      },
      {
        name: "Dark Web Monitoring",
        id: "dark-web-monitoring",
        href: "/services/dark-web-monitoring",
      },
      {
        name: "Penetration Testing",
        id: "penetration-testing",
        href: "/services/penetration-testing",
      },
      {
        name: "Vulnerability Management",
        id: "vulnerability-management",
        href: "/services/vulnerability-management",
      },
    ],
  },
  {
    title: "Data Protection & Resilience",
    services: [
      {
        name: "Data Backup, Disaster Recovery & Business Continuity",
        id: "backup-disaster-recovery",
        href: "/services/backup-disaster-recovery",
      },
      {
        name: "SaaS Protection (Microsoft 365 & Google Workspace)",
        id: "saas-protection",
        href: "/services/saas-protection",
      },
    ],
  },
  {
    title: "Governance & Compliance",
    services: [
      {
        name: "Compliance as a Service (CaaS)",
        id: "compliance-as-a-service",
        href: "/services/compliance-as-a-service",
      },
    ],
  },
  {
    title: "Infrastructure & Transformation",
    services: [
      {
        name: "Infrastructure & Modernisation",
        id: "infrastructure-modernisation",
        href: "/services/infrastructure-modernisation",
      },
      {
        name: "Cloud & Digital Transformation",
        id: "cloud-management",
        href: "/services/cloud-management",
      },
      {
        name: "Web & Software Development",
        id: "web-software-development",
        href: "/services/web-software-development",
      },
      // {
      //   name: "AUTOTASK & Datto Integration Portal",
      //   id: "autotask-integration",
      //   href: "/autotask-integration",
      // },
    ],
  },
]
