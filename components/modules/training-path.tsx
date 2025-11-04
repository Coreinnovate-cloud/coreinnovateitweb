"use client";

import { individualProgrammes, organizationProgrammes } from "@/lib/data";
import { CircleCheck, GraduationCap, Users, BookOpen, Zap, TrendingUp } from "lucide-react";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

const TrainingPath = () => {
  const [hoveredIndividual, setHoveredIndividual] = useState<number | null>(null);
  const [hoveredCorporate, setHoveredCorporate] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Floating knowledge nodes
  const knowledgeNodes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
  }));

  // Learning path lines
  const pathLines = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x1: Math.random() * 80 + 10,
    y1: Math.random() * 80 + 10,
    x2: Math.random() * 80 + 10,
    y2: Math.random() * 80 + 10,
    delay: i * 0.3,
  }));

  return (
    <div className="px-4 sm:px-8 max-w-7xl mx-auto lg:px-12 relative overflow-hidden py-16" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      {/* Learning grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Floating Knowledge Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {knowledgeNodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}
      </div>

      {/* Connecting Path Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {pathLines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 2, delay: line.delay, ease: "easeInOut" }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="space-y-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/50 backdrop-blur-xl mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <GraduationCap className="w-4 h-4 text-blue-500" />
            </motion.div>
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              Training & Development
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold font-dm-sans"
          >
            <span className="bg-gradient-to-r from-white via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Training Path
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-grey max-w-[650px] mx-auto text-lg font-medium leading-relaxed"
          >
            At CoreInnovate, we provide trainings for both{" "}
            <span className="text-blue-400 font-semibold">individuals</span> and{" "}
            <span className="text-indigo-400 font-semibold">corporations</span>.
            Explore some of our training paths below
          </motion.p>

          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-blue-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <BookOpen className="w-5 h-5 text-blue-500" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-indigo-400"
            />
          </div>
        </motion.div>

        {/* Training Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Individual Training Programs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500"
                />
              </motion.div>

              <h3 className="text-3xl lg:text-4xl font-bold font-dm-sans text-white mb-3">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Individual
                </span>{" "}
                Training Programs
              </h3>
              <p className="text-grey max-w-[435px] text-base font-medium">
                From beginner to job-ready, build the skills employers are looking for.
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
              {individualProgrammes.map((programme, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  onHoverStart={() => setHoveredIndividual(index)}
                  onHoverEnd={() => setHoveredIndividual(null)}
                  className="group/item relative"
                >
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={hoveredIndividual === index ? { scale: 1.05 } : { scale: 1 }}
                  />

                  <div className="relative flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover/item:border-blue-500/50 transition-all duration-300">
                    <motion.div
                      animate={hoveredIndividual === index ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CircleCheck className="size-5 text-blue-400 flex-shrink-0 mt-1" />
                    </motion.div>
                    <div className="space-y-2 flex-1">
                      <p className="font-semibold text-white text-lg group-hover/item:text-blue-400 transition-colors duration-300">
                        {programme.title}
                      </p>
                      <ul className="space-y-1">
                        {programme.topics.map((topic) => (
                          <li className="text-sm text-grey flex items-center gap-2" key={topic}>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Start Learning
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Corporate Training Programs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 relative group"
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(90deg, transparent, #6366f1, transparent)",
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

            {/* Content Container */}
            <div className="relative h-full p-6 rounded-2xl bg-dark/50 backdrop-blur-sm border border-indigo-500/30">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                    <Users className="w-6 h-6 text-indigo-400" />
                  </div>
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 rounded-full border-2 border-indigo-500/30 border-t-indigo-500"
                  />
                </motion.div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-dm-sans text-white mb-3">
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Corporate
                    </span>{" "}
                    Training Programs
                  </h3>
                  <p className="text-grey max-w-[435px] text-base font-medium">
                    Equip your workforce with the knowledge and skills to strengthen
                    security and boost productivity.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4">
                  {organizationProgrammes.map((programme, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      onHoverStart={() => setHoveredCorporate(index)}
                      onHoverEnd={() => setHoveredCorporate(null)}
                      className="group/item relative"
                    >
                      {/* Hover Glow */}
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={hoveredCorporate === index ? { scale: 1.05 } : { scale: 1 }}
                      />

                      <div className="relative flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover/item:border-indigo-500/50 transition-all duration-300">
                        <motion.div
                          animate={hoveredCorporate === index ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CircleCheck className="size-5 text-indigo-400 fill-indigo-500/20 flex-shrink-0 mt-1" />
                        </motion.div>
                        <div className="space-y-2 flex-1">
                          <p className="font-semibold text-white text-lg group-hover/item:text-indigo-400 transition-colors duration-300">
                            {programme.title}
                          </p>
                          <ul className="space-y-1">
                            {programme.topics.map((topic) => (
                              <li className="text-sm text-grey flex items-center gap-2" key={topic}>
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Train Your Team
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPath;
