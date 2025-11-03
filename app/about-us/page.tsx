"use client"

import BookAssessment from "@/components/modules/book-assessment"
import OurMission from "@/components/modules/our-mission"
import OurVision from "@/components/modules/our-vision"
import Principle from "@/components/modules/principles"
import { motion } from "framer-motion"
import { Cpu, Shield, Zap } from "lucide-react"

const page = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section with Futuristic Design */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        {/* Animated Background Grid - Extended to top */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-br from-dark via-secondary to-dark">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#16365f15_1px,transparent_1px),linear-gradient(to_bottom,#16365f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

          {/* Animated Gradient Orbs */}
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
            className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-primary">
                <Zap className="w-5 h-5" />
                <span className="font-semibold text-sm">
                  About CoreInnovate IT
                </span>
              </div>
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-dm-sans text-white leading-[1.1]"
            >
              <span className="block mb-4">Building Stronger</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Businesses Through
              </span>
              <span className="block mt-4">Technology</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              At CoreInnovate, our mission is simple: make technology secure,
              seamless, and a true driver of growth. We combine cutting-edge AI
              with human expertise to deliver tomorrow&apos;s solutions today.
            </motion.p>

            {/* Animated Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: Cpu,
                  title: "AI-Powered",
                  description: "Intelligent automation",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Shield,
                  title: "Secure",
                  description: "Enterprise-grade protection",
                  gradient: "from-primary to-blue-500",
                },
                {
                  icon: Zap,
                  title: "Fast",
                  description: "Lightning quick deployment",
                  gradient: "from-cyan-500 to-primary",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    {/* Hover Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-500`}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold font-dm-sans text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              initial={{
                x: Math.random() * 1920,
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

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Other Sections */}
      <OurVision />
      <OurMission />
      {/* <Founder /> */}
      <Principle />
      <BookAssessment />
    </div>
  )
}

export default page
