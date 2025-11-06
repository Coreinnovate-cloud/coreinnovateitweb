"use client"

import BookAssessment from "@/components/modules/book-assessment"
import PopularBlogs from "@/components/modules/popular-blogs"
import RecentArticles from "@/components/modules/recent-articles"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Lightbulb, Newspaper, Sparkles, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

const ResourcesPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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

  const resourceIcons = [
    {
      Icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      position: { x: 15, y: 20 },
    },
    {
      Icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      position: { x: 85, y: 25 },
    },
    {
      Icon: Newspaper,
      color: "from-green-500 to-emerald-500",
      position: { x: 10, y: 70 },
    },
    {
      Icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      position: { x: 90, y: 65 },
    },
  ]

  return (
    <div className="space-y-16 pt-10 sm:pt-36 overflow-hidden">
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

        {/* Floating Resource Icons */}
        {resourceIcons.map(({ Icon, color, position }, index) => (
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
              Resources & Insights
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
              News & Articles
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
            Get the latest insights, industry updates, and expert advice designed
            to keep your business{" "}
            <span className="text-primary font-semibold">secure</span>,{" "}
            <span className="text-cyan-400 font-semibold">productive</span>, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              future-ready
            </span>{" "}
            in today&apos;s fast-changing digital world.
          </motion.p>

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

      <PopularBlogs />
      <RecentArticles />
      <BookAssessment />
    </div>
  )
}

export default ResourcesPage
