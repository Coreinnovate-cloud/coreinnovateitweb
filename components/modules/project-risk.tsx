"use client"

import { motion, useInView } from "framer-motion"
import {
  Activity,
  AlertTriangle,
  CircleCheck,
  Eye,
  FileText,
  Radio,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
} from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

const ProjectRisk = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const router = useRouter()

  const serviceIcons = [
    Eye,
    FileText,
    Activity,
    Shield,
    TrendingDown,
    AlertTriangle,
    Radio,
    Users,
  ]

  // Floating warning triangles
  const warningParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 15,
    duration: Math.random() * 8 + 5,
    delay: Math.random() * 4,
  }))

  // Alert wave rings
  const alertRings = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
  }))

  return (
    <div
      className="px-4 py-16 text-white relative overflow-hidden bg-dark"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-amber-950/10 to-dark" />

      {/* Alert grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b08_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Floating Warning Triangles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {warningParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          >
            <AlertTriangle
              className="text-amber-500/30"
              style={{ width: particle.size, height: particle.size }}
            />
          </motion.div>
        ))}
      </div>

      {/* Pulsing Alert Rings */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {alertRings.map((ring) => (
          <motion.div
            key={ring.id}
            className="absolute w-32 h-32 border-2 border-amber-500/20 rounded-full"
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{
              scale: [1, 3, 3],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: ring.delay,
            }}
          />
        ))}
      </div>

      <div className="space-y-12 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          {/* Glowing Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/50 backdrop-blur-xl mb-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </motion.div>
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Risk Management
            </span>
          </motion.div> */}

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold font-dm-sans"
          >
            <span className="bg-gradient-to-r from-white via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Project Management Services
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-grey max-w-[600px] mx-auto text-lg font-medium leading-relaxed"
          >
            At CoreInnovate, our Project Management Services help you{" "}
            <span className="text-amber-400 font-semibold">
              anticipate, evaluate, and control
            </span>{" "}
            risks before they affect your project&apos;s success
          </motion.p>

          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-amber-500"
            />
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={isInView ? { scale: 1, rotate: 180 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-yellow-400"
            />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Services List Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-amber-500">
                Why Choose Our Risk Management
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold font-dm-sans text-white mb-3">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Identify Risks Early.
                </span>{" "}
                Minimize Impact. Deliver with Confidence.
              </h3>
              <p className="text-grey text-base font-medium">
                Every project comes with uncertainties, but unmanaged risks can
                lead to delays, increased costs, and reduced quality. Our risk
                management services include
              </p>
            </motion.div>

            {/* Services List */}
            <div className="space-y-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="group relative"
                  >
                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={
                        hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }
                      }
                    />

                    {/* Service Item */}
                    <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-amber-500/50 transition-all duration-300">
                      {/* Icon Container */}
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center border border-amber-500/30"
                        animate={
                          hoveredIndex === index
                            ? {
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1],
                              }
                            : { rotate: 0, scale: 1 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-amber-400" />
                      </motion.div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <p className="text-base font-medium text-white group-hover:text-amber-400 transition-colors duration-300">
                          {service}
                        </p>
                      </div>

                      {/* Check Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={
                          hoveredIndex === index
                            ? { scale: 1, rotate: 0 }
                            : { scale: 0, rotate: -180 }
                        }
                        transition={{ duration: 0.4 }}
                        className="flex-shrink-0"
                      >
                        <CircleCheck className="w-5 h-5 text-amber-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="pt-4"
            >
              <motion.button
                onClick={() => router.push("/contact-us")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Protect Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section with Risk Alert Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Image Container */}
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b10_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b10_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none z-10" />

              {/* Alert Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #f59e0b, transparent)",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Image */}
              <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
                <Image
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Project Management"
                  src={`/project-risk.jpg`}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-10" />

              {/* Floating Risk Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-6 left-6 right-6 z-20"
              >
                <div className="bg-dark/90 backdrop-blur-xl border border-amber-500/30 rounded-xl p-4 flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Shield className="w-5 h-5 text-amber-400" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 mb-1">
                      Risk Status
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-bold text-amber-400">
                        Monitored
                      </div>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-green-500"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6 z-20"
              >
                <div className="bg-dark/90 backdrop-blur-xl border border-amber-500/30 rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        95%
                      </div>
                      <div className="text-xs text-white/60">Identified</div>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        98%
                      </div>
                      <div className="text-xs text-white/60">Mitigated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        100%
                      </div>
                      <div className="text-xs text-white/60">Monitored</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Corner Alert Indicators */}
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 rounded-full bg-amber-500 z-20"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 rounded-full bg-amber-500 z-20"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.8, 0.5, 0.8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectRisk

const services = [
  "Risk identification workshops and assessments",
  "Risk register development and maintenance",
  "Quantitative and qualitative risk analysis",
  "Risk response planning and mitigation strategies",
  "Quantitative Risk Modelling",
  "Contingency and fallback planning",
  "Ongoing monitoring and reporting",
  "Stakeholder communication and risk awareness training",
]
