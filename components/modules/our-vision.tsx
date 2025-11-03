"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Eye, Sparkles, TrendingUp } from "lucide-react"

const OurVision = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark/5 to-background" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16365f08_1px,transparent_1px),linear-gradient(to_bottom,#16365f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative px-4 max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
            <Eye className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wide">Our Vision</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans text-secondary"
          >
            Why{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                CoreInnovate
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10"
              />
            </span>{" "}
            was founded
          </motion.h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Paragraph 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-base sm:text-lg text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                CoreInnovate was created with a simple but powerful mission: to
                bridge the gap between technology and business outcomes. Too
                often, organisations struggle with IT that is reactive, insecure,
                or misaligned with their goals. Our founder, Michael Folorunsho,
                saw first-hand how the right strategy and support could transform
                businesses — not just by fixing problems, but by preventing them
                and driving growth.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-base sm:text-lg text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                From the start, CoreInnovate has been built on the belief that
                technology should empower people, protect organisations, and
                create long-term value. That vision continues to guide everything
                we do today.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                { icon: Sparkles, text: "Innovation First" },
                { icon: TrendingUp, text: "Growth Focused" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/GIF with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="relative group">
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
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10"
              />

              {/* Main SVG Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border border-primary/20 bg-gradient-to-br from-dark via-secondary to-dark">
                {/* Animated SVG Illustration */}
                <svg
                  viewBox="0 0 800 450"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Gradients */}
                    <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#239dea" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>

                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#239dea" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                    </linearGradient>

                    {/* Animated circle for pulsing effect */}
                    <radialGradient id="pulseGradient">
                      <stop offset="0%" stopColor="#239dea" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#239dea" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Background grid pattern */}
                  <g opacity="0.1">
                    {[...Array(20)].map((_, i) => (
                      <motion.line
                        key={`v-${i}`}
                        x1={i * 40}
                        y1="0"
                        x2={i * 40}
                        y2="450"
                        stroke="#239dea"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                    {[...Array(12)].map((_, i) => (
                      <motion.line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 40}
                        x2="800"
                        y2={i * 40}
                        stroke="#239dea"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </g>

                  {/* Central Server/Tower */}
                  <g>
                    {/* Main tower */}
                    <motion.rect
                      x="350"
                      y="180"
                      width="100"
                      height="150"
                      rx="8"
                      fill="url(#primaryGradient)"
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 180, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />

                    {/* Server lights */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.rect
                        key={`light-${i}`}
                        x="370"
                        y={200 + i * 20}
                        width="60"
                        height="8"
                        rx="2"
                        fill="#06b6d4"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </g>

                  {/* Connected nodes - Left side */}
                  <g>
                    <motion.circle
                      cx="150"
                      cy="150"
                      r="30"
                      fill="url(#glowGradient)"
                      stroke="url(#primaryGradient)"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 180 150 Q 265 150 350 180"
                      stroke="url(#primaryGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />

                    {/* Animated data flow */}
                    <motion.circle
                      r="4"
                      fill="#06b6d4"
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{
                        offsetDistance: "100%",
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ offsetPath: "path('M 180 150 Q 265 150 350 180')" }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 180 150 Q 265 150 350 180"
                      />
                    </motion.circle>
                  </g>

                  {/* Connected nodes - Right side */}
                  <g>
                    <motion.circle
                      cx="650"
                      cy="150"
                      r="30"
                      fill="url(#glowGradient)"
                      stroke="url(#primaryGradient)"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                    <motion.path
                      d="M 620 150 Q 535 150 450 180"
                      stroke="url(#primaryGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />

                    <motion.circle
                      r="4"
                      fill="#06b6d4"
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{
                        offsetDistance: "100%",
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                      style={{ offsetPath: "path('M 620 150 Q 535 150 450 180')" }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 620 150 Q 535 150 450 180"
                        begin="0.5s"
                      />
                    </motion.circle>
                  </g>

                  {/* Bottom nodes */}
                  <g>
                    <motion.circle
                      cx="250"
                      cy="350"
                      r="25"
                      fill="url(#glowGradient)"
                      stroke="url(#primaryGradient)"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                    <motion.path
                      d="M 270 340 Q 310 290 350 280"
                      stroke="url(#primaryGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.0 }}
                    />

                    <motion.circle
                      cx="550"
                      cy="350"
                      r="25"
                      fill="url(#glowGradient)"
                      stroke="url(#primaryGradient)"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <motion.path
                      d="M 530 340 Q 490 290 450 280"
                      stroke="url(#primaryGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.1 }}
                    />
                  </g>

                  {/* Shield icon in center */}
                  <g transform="translate(380, 220)">
                    <motion.path
                      d="M20 0 L40 8 L40 24 C40 35 30 42 20 44 C10 42 0 35 0 24 L0 8 Z"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                    />
                    <motion.path
                      d="M12 20 L18 26 L30 14"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    />
                  </g>

                  {/* Floating particles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.circle
                      key={`particle-${i}`}
                      cx={100 + Math.random() * 600}
                      cy={50 + Math.random() * 350}
                      r="2"
                      fill="#239dea"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                    />
                  ))}
                </svg>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#23adea15_1px,transparent_1px),linear-gradient(to_bottom,#239dea15_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/60 rounded-full"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: "100%",
                      opacity: 0,
                    }}
                    animate={{
                      y: [null, "-20%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OurVision
