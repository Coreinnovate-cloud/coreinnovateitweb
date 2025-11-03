"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, Rocket, Shield, Users } from "lucide-react"

const OurMission = () => {
  const missionPoints = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Aligning IT with business goals",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Proactive Security",
      description: "Prevention over reaction",
      color: "from-primary to-blue-600",
    },
    {
      icon: Rocket,
      title: "Growth Enabler",
      description: "Technology that drives success",
      color: "from-cyan-500 to-primary",
    },
    {
      icon: Users,
      title: "People First",
      description: "Empowering your team",
      color: "from-blue-600 to-cyan-400",
    },
  ]

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/20 via-background to-dark/20" />

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, #239dea15 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative px-4 max-w-7xl mx-auto space-y-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm">
            <Target className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wide">Our Mission</span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Decorative Element */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "64px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mb-6"
              />

              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans text-secondary leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block"
                >
                  Guided by
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent"
                >
                  Purpose,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block"
                >
                  Driven by Innovation
                </motion.span>
              </h3>
            </div>

            {/* Mission Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="relative z-10 space-y-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${point.color} p-2 group-hover:scale-110 transition-transform duration-300`}>
                        <point.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold font-dm-sans text-secondary text-sm mb-1">
                          {point.title}
                        </h4>
                        <p className="text-grey text-xs leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Paragraph 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif leading-none">&ldquo;</div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-cyan-500 to-transparent rounded-full" />
                <p className="text-base sm:text-lg text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                  CoreInnovate was created with a simple but powerful mission: to
                  bridge the gap between technology and business outcomes. Too often,
                  organisations struggle with IT that is reactive, insecure, or
                  misaligned with their goals. Our founder, Michael Folorunsho, saw
                  first-hand how the right strategy and support could transform
                  businesses — not just by fixing problems, but by preventing them and
                  driving growth.
                </p>
              </div>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent rounded-full" />
                <p className="text-base sm:text-lg text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                  From the start, CoreInnovate has been built on the belief that
                  technology should empower people, protect organisations, and create
                  long-term value. That vision continues to guide everything we do
                  today.
                </p>
              </div>
            </motion.div>

            {/* Stats or Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { value: "100%", label: "Proactive" },
                { value: "24/7", label: "Support" },
                { value: "AI+", label: "Human" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-cyan-500/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="text-2xl font-bold font-dm-sans bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-grey mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OurMission
