"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { CircleCheck, Sparkles, Calendar, Target, Users, ClipboardCheck, TrendingUp, BarChart3 } from "lucide-react";

const ProjectManagement = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const serviceIcons = [Calendar, Target, Users, ClipboardCheck, TrendingUp, BarChart3];

  // Gantt chart bars animation
  const ganttBars = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    y: 10 + (i * 8),
    width: Math.random() * 40 + 30,
    delay: i * 0.2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="px-4 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
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

      {/* Floating Gantt Chart Bars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ganttBars.map((bar) => (
          <motion.div
            key={bar.id}
            className="absolute h-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"
            style={{
              top: `${bar.y}%`,
              left: '5%',
              width: `${bar.width}%`,
            }}
            animate={{
              width: [`${bar.width}%`, `${bar.width + 20}%`, `${bar.width}%`],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bar.delay,
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 backdrop-blur-xl mb-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Target className="w-4 h-4 text-purple-500" />
            </motion.div>
            <span className="text-sm font-semibold text-purple-500 uppercase tracking-wider">
              Project Management
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold font-dm-sans"
          >
            <span className="bg-gradient-to-r from-secondary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Project Management Services
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-tertiary max-w-[600px] mx-auto text-lg font-medium"
          >
            Our Project Management Services provide{" "}
            <span className="text-purple-500 font-semibold">structure and expertise</span>{" "}
            to deliver projects that achieve{" "}
            <span className="text-blue-500 font-semibold">business goals</span>,
            meet deadlines, and stay within budget.
          </motion.p>

          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-purple-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-2 h-2 rounded-full bg-purple-500"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-blue-400"
            />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Image Container */}
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none z-10" />

              {/* Timeline Progress Bar */}
              <motion.div
                className="absolute top-6 left-6 right-6 h-2 bg-white/10 rounded-full overflow-hidden z-20"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "75%" } : {}}
                  transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                />
              </motion.div>

              {/* Image */}
              <Image
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Project Management Team"
                src={`/new-project.png`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-dark/80 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        95%
                      </div>
                      <div className="text-xs text-white/60">On Time</div>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        250+
                      </div>
                      <div className="text-xs text-white/60">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        98%
                      </div>
                      <div className="text-xs text-white/60">Success</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.8, 0.5, 0.8],
              }}
              transition={{
                duration: 4,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-500">What We Offer</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold font-dm-sans text-secondary mb-3">
                Reliable IT.{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Secure Systems.
                </span>{" "}
                Better Business.
              </h3>
              <p className="text-tertiary text-base font-medium">
                At CoreInnovate, we understand that successful projects require
                more than just planning, thus we offer the following services to
                make your business succeed
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="space-y-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index];
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
                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                    />

                    {/* Service Item */}
                    <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/50 transition-all duration-300">
                      {/* Icon Container */}
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30"
                        animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-5 h-5 text-purple-500" />
                      </motion.div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <p className="text-base font-semibold text-secondary group-hover:text-purple-500 transition-colors duration-300">
                          {service}
                        </p>
                      </div>

                      {/* Check Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={hoveredIndex === index ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <CircleCheck className="w-5 h-5 text-purple-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;

const services = [
  "Project Planning and Scheduling",
  "Budget and Cost Control",
  "Team Coordination",
  "Risk and Issue Management",
  "Progress Tracking and Reporting",
  "Quality Assurance",
];
