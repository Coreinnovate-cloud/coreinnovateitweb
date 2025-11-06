"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "../shared/button"
import { MoveUpRight, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

const BookAssessment = () => {
  const benefits = [
    "Free Security Assessment",
    "Expert Consultation",
    "Custom Solutions"
  ]

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-secondary to-dark" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Vector Background */}
      <div className="absolute inset-0 bg-[url('/vector-2.png')] bg-center bg-cover bg-no-repeat opacity-20" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 backdrop-blur-xl">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-white/5" />

          {/* Content Container */}
          <div className="relative py-16 px-6 sm:py-20 sm:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex-1 text-center lg:text-left space-y-6"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/40 text-primary backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-4 h-4" />
                  </motion.div>
                  <span className="font-semibold text-sm uppercase tracking-wider">Get Started Today</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold font-dm-sans text-white leading-tight"
                >
                  Ready to{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Secure and Scale
                    </span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="absolute bottom-1 left-0 right-0 h-3 bg-primary/30 -z-10"
                    />
                  </span>{" "}
                  Your Business?
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-white/80 leading-relaxed max-w-xl"
                >
                  Take the next step towards secure, productive, and cost-effective
                  solutions that will help your business thrive.
                </motion.p>

                {/* Benefits List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl"
                />

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-primary/30 space-y-6 min-w-[320px] hover:border-primary/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl"
                    >
                      <Shield className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold font-dm-sans text-white">
                      Free Security Assessment
                    </h3>
                    <p className="text-white/70 text-sm">
                      Get expert insights into your security posture
                    </p>
                  </div>

                  {/* Button */}
                  <Link href="/contact-us" className="block">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        variant="white"
                        className="w-full shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                      >
                        Book Assessment
                        <span className="size-8 bg-primary flex items-center justify-center rounded-full">
                          <MoveUpRight className="size-4 text-white" />
                        </span>
                      </Button>
                    </motion.div>
                  </Link>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                    {[
                      { value: "24/7", label: "Support" },
                      { value: "200+", label: "Clients" },
                      { value: "99.9%", label: "Uptime" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center group cursor-default"
                      >
                        <div className="text-xl font-bold font-dm-sans bg-gradient-to-r from-white via-primary to-cyan-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
          <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * 600,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BookAssessment
