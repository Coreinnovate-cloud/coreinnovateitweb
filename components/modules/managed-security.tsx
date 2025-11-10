"use client"

import { motion, useInView } from "framer-motion"
import {
  Activity,
  AlertTriangle,
  Eye,
  FileCheck,
  Lock,
  Scan,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const ManagedSecurity = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const router = useRouter()

  const serviceIcons = [Eye, Scan, AlertTriangle, Lock, Activity, FileCheck]

  // Security scanning effect - radar lines
  const radarLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    angle: (360 / 8) * i,
    delay: i * 0.3,
  }))

  // Floating shield particles
  const securityParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 16 + 8,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 3,
  }))

  return (
    <div
      className="px-4 py-20 text-white bg-gradient-to-br from-dark via-secondary to-dark relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Radar Scanning Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
        {radarLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute top-1/2 left-1/2 w-1 h-[400px] origin-bottom"
            style={{
              background:
                "linear-gradient(to top, transparent, #ef4444, transparent)",
              transform: `rotate(${line.angle}deg)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: line.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Shield Particles */}
      {securityParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute opacity-10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <Shield
            style={{ width: particle.size, height: particle.size }}
            className="text-red-500"
          />
        </motion.div>
      ))}

      {/* Pulsating Security Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="space-y-16 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Alert Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 backdrop-blur-xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ShieldCheck className="w-5 h-5 text-red-400" />
            </motion.div>
            <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
              SOC as a Service
            </span>
          </motion.div>

          {/* Title with Gradient */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold font-dm-sans"
          >
            <span className="bg-gradient-to-r from-white via-red-400 to-orange-400 bg-clip-text text-transparent">
              Managed Security
            </span>
            <br />
            <span className="text-2xl sm:text-3xl text-white/70 font-medium">
              (SOC-as-a-Service)
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 max-w-[650px] mx-auto text-lg font-medium"
          >
            Our SOC-as-a-Service delivers{" "}
            <span className="text-red-400 font-semibold">24/7 monitoring</span>{" "}
            and{" "}
            <span className="text-orange-400 font-semibold">
              rapid response
            </span>
            , providing enterprise-grade security at an affordable cost.
          </motion.p>

          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-red-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(239, 68, 68, 0.7)",
                    "0 0 0 10px rgba(239, 68, 68, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-500"
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-orange-500"
            />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Scanning Border Effect */}
            <motion.div
              className="absolute -inset-1 rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #ef4444, transparent)",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Image Container */}
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-red-500/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Scanning Lines Overlay */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(239, 68, 68, 0.1) 50%, transparent 100%)",
                  height: "100px",
                }}
                animate={{
                  y: ["-100px", "500px"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Image */}
              <Image
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="SOC Security Operations Center"
                src={`/new-soc.png`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />

              {/* Security Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-6 left-6 right-6"
              >
                <div className="bg-dark/90 backdrop-blur-xl border border-red-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(239, 68, 68, 0.7)",
                          "0 0 0 20px rgba(239, 68, 68, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Shield className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        System Protected
                      </p>
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-green-500 rounded-full"
                        />
                        <p className="text-white/60 text-xs">
                          24/7 Active Monitoring
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Threat Detection Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-red-500/90 backdrop-blur-xl rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-bold text-sm">
                      Threat Detection Active
                    </p>
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Threats Blocked", value: "1.2M+" },
                      { label: "Response Time", value: "<5min" },
                      { label: "Uptime", value: "99.99%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                        className="bg-white/20 rounded-lg p-2 text-center backdrop-blur-sm"
                      >
                        <p className="text-sm font-bold text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs text-white/80">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Pulsing Corners */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/30 rounded-full blur-xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* Services List Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-red-500/30"
            >
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-red-400">
                Why Choose SOC-as-a-Service
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold font-dm-sans text-white mb-3">
                <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                  Enterprise-Grade Cybersecurity
                </span>
                <br />
                Without the Overhead
              </h3>
              <p className="text-white/70 text-base font-medium">
                SOC-as-a-Service protects small and mid-sized businesses against
                cyber threats
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="space-y-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="group relative"
                  >
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={
                        hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }
                      }
                    />

                    {/* Service Item */}
                    <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-red-500/50 transition-all duration-300">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-500/30"
                        animate={
                          hoveredIndex === index
                            ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, -5, 0],
                              }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-red-400" />
                      </motion.div>

                      {/* Text */}
                      <div className="flex-1">
                        <p className="text-base font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                          {service}
                        </p>
                      </div>

                      {/* Check Icon with Pulse */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          hoveredIndex === index
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <motion.div
                          animate={
                            hoveredIndex === index
                              ? {
                                  boxShadow: [
                                    "0 0 0 0 rgba(239, 68, 68, 0.7)",
                                    "0 0 0 8px rgba(239, 68, 68, 0)",
                                  ],
                                }
                              : {}
                          }
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ShieldCheck className="w-5 h-5 text-red-400" />
                        </motion.div>
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
                className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Protected Now
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ManagedSecurity

const services = [
  "24/7 Threat Monitoring",
  "Endpoint Detection & Response (EDR)",
  "Vulnerability Management",
  "Firewall & Network Security Management",
  "Incident Detection & Response (IDR)",
  "Compliance Reporting & Auditing",
]
