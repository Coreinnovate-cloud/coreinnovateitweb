"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Lightbulb, Heart, Award, Sparkles } from "lucide-react"
import Image from "next/image"

const Principle = () => {
  const iconComponents = {
    "Security First": Shield,
    "Innovation": Lightbulb,
    "Integrity": Heart,
    "Excellence": Award,
  }

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/5 via-background to-dark/5" />

      {/* Animated Dot Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, #239dea20 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />
      </div>

      <div className="relative px-4 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wide">Our Core Values</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans text-secondary"
          >
            The{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Principles
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10"
              />
            </span>{" "}
            That Guide Us
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-grey max-w-2xl mx-auto leading-relaxed"
          >
            The principles that shape how we work, build trust, and deliver
            lasting impact for our clients
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const IconComponent = iconComponents[value.title as keyof typeof iconComponents]
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100"
                />

                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden group-hover:transform group-hover:-translate-y-2">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Decorative Circle */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-2xl" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      {/* Icon Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                      {/* Icon Container */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                        {IconComponent && (
                          <IconComponent className="w-10 h-10 text-white" />
                        )}
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* SVG Icon (as backup/decoration) */}
                    <div className="opacity-0 absolute">
                      <Image width={20} height={20} alt={value.title} src={value.icon} />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-2xl font-dm-sans text-secondary group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Animated Bottom Border */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 transform origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </div>

                {/* Hover Number Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 z-20"
                >
                  <span className="text-primary font-bold font-dm-sans text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA or Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/5 via-cyan-500/5 to-blue-500/5 border border-primary/20 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-secondary font-semibold text-sm">
                Trusted by 200+ businesses worldwide
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Principle

export const values = [
  {
    title: "Security First",
    description:
      "We prioritise protecting your business, data, and people in everything we do.",
    icon: "/security.svg",
  },
  {
    title: "Innovation",
    description:
      "We embrace modern technologies and creative solutions to keep you ahead in a digital world.",
    icon: "/innovation.svg",
  },
  {
    title: "Integrity",
    description:
      "We believe in transparency, honesty, and building trust through every partnership.",
    icon: "/integrity.svg",
  },
  {
    title: "Excellence",
    description:
      "We strive for high standards in service delivery, ensuring quality, reliability, and results.",
    icon: "/excellence.svg",
  },
]
