"use client"

import BookAssessment from "@/components/modules/book-assessment"
import CloudManagement from "@/components/modules/cloud-management"
import ManagedSecurity from "@/components/modules/managed-security"
import ManagedServices from "@/components/modules/managed-services"
import ProjectManagement from "@/components/modules/project-management"
import ProjectRisk from "@/components/modules/project-risk"
import SoftwareDevelopment from "@/components/modules/software-development"
import TrainingPath from "@/components/modules/training-path"
import TrainingServices from "@/components/modules/training-services"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChartBar, Cloud, Code, Shield, Sparkles, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const ServicesPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    // Handle scroll to section on page load and hash change
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1)
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      }
    }

    // Scroll on initial load
    handleHashScroll()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashScroll)

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Floating particles effect
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  const serviceIcons = [
    {
      Icon: Shield,
      color: "from-blue-500 to-cyan-500",
      position: { x: 15, y: 20 },
    },
    {
      Icon: Cloud,
      color: "from-purple-500 to-pink-500",
      position: { x: 85, y: 25 },
    },
    {
      Icon: Code,
      color: "from-green-500 to-emerald-500",
      position: { x: 10, y: 70 },
    },
    {
      Icon: Zap,
      color: "from-yellow-500 to-orange-500",
      position: { x: 90, y: 65 },
    },
    {
      Icon: ChartBar,
      color: "from-red-500 to-rose-500",
      position: { x: 50, y: 15 },
    },
    {
      Icon: Sparkles,
      color: "from-indigo-500 to-blue-500",
      position: { x: 45, y: 80 },
    },
  ]

  return (
    <div className="relative space-y-16 pt-10 sm:pt-36 overflow-hidden">
      {/* Hero Section with Futuristic Effects */}
      <div className="relative bg-gradient-to-br from-dark via-secondary to-dark min-h-[400px] sm:min-h-[500px] flex items-center px-4 sm:px-8 lg:px-12 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Service Icons */}
        {serviceIcons.map(({ Icon, color, position }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} opacity-20 blur-sm flex items-center justify-center`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}

        {/* Mouse Cursor Glow Effect */}
        <motion.div
          className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        />

        {/* Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-white w-full text-center flex flex-col items-center gap-6 sm:gap-8 py-8"
        >
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/50 backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Next-Gen IT Solutions
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl max-w-[90%] sm:max-w-[900px] font-bold font-dm-sans px-4"
          >
            <span className="bg-gradient-to-r from-white via-primary to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>

          {/* Animated Lines */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-primary"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-cyan-400"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 max-w-[90%] sm:max-w-[650px] text-base sm:text-lg px-4 leading-relaxed"
          >
            From managing IT infrastructure to securing data and empowering
            talent,{" "}
            <span className="text-primary font-semibold">Core Innovate IT</span>{" "}
            delivers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              cutting-edge
            </span>{" "}
            technology services for the future.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-4"
          >
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "500+", label: "Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.8 + index * 0.1,
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative px-6 py-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-white/40 uppercase tracking-wider">
                Scroll
              </span>
              <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-2 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Service Sections with Stagger Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-16"
      >
        <div id="managed-it-services">
          <ManagedServices />
        </div>
        <div id="cloud-management">
          <CloudManagement />
        </div>
        <div id="managed-security">
          <ManagedSecurity />
        </div>
        <div id="project-management">
          <ProjectManagement />
        </div>
        <div id="software-development">
          <SoftwareDevelopment />
        </div>
        <div id="project-risk">
          <ProjectRisk />
        </div>
        <div id="training-services">
          <TrainingServices />
        </div>
        <div id="training-path">
          <TrainingPath />
        </div>
        <BookAssessment />
      </motion.div>

      {/* Floating Action Button - Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.div>
      </motion.button>
    </div>
  )
}

export default ServicesPage
