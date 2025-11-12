"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Smartphone, Boxes, ShoppingCart, Workflow, Sparkles, Terminal, Braces } from "lucide-react";
import { useRouter } from "next/navigation";

const SoftwareDevelopment = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const router = useRouter();

  const serviceIcons = [Code2, Boxes, Smartphone, ShoppingCart, Workflow];

  // Binary code particles
  const binaryParticles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    char: Math.random() > 0.5 ? "0" : "1",
    size: Math.random() * 12 + 8,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 3,
  }));

  // Code snippet lines
  const codeLines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: 5 + (i * 6),
    width: Math.random() * 30 + 20,
    delay: i * 0.15,
  }));

  return (
    <div className="px-4 relative py-16 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-emerald-950/20 to-dark" />

      {/* Matrix-style grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
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

      {/* Floating Binary Code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute font-mono font-bold text-emerald-500/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          >
            {particle.char}
          </motion.div>
        ))}
      </div>

      {/* Floating Code Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent rounded-full"
            style={{
              left: `${line.x}%`,
              top: `${line.y}%`,
              width: `${line.width}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: line.delay,
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/50 backdrop-blur-xl mb-4"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Terminal className="w-4 h-4 text-emerald-500" />
            </motion.div>
            <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">
              Development Services
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold font-dm-sans max-w-[600px] mx-auto"
          >
            <span className="bg-gradient-to-r from-white via-emerald-400 to-green-400 bg-clip-text text-transparent">
              Web & Software Development Services
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-grey max-w-[600px] mx-auto text-lg font-medium leading-relaxed"
          >
            Transform your ideas into{" "}
            <span className="text-emerald-400 font-semibold">powerful digital solutions</span>.
            From responsive websites to custom enterprise applications, we deliver{" "}
            <span className="text-green-400 font-semibold">scalable, secure</span>, and user-focused software.
          </motion.p>

          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-emerald-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Braces className="w-5 h-5 text-emerald-500" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-green-400"
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
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-500">Why Choose CoreInnovate</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold font-dm-sans text-white mb-3">
                Build, Deploy, and{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Scale with Confidence
                </span>
              </h3>
              <p className="text-grey text-base font-medium max-w-[436px]">
                Our development services deliver modern, efficient solutions tailored to your business needs
              </p>
            </motion.div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="group relative"
                  >
                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                    />

                    {/* Service Card */}
                    <div className="relative p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-emerald-500/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        {/* Icon Container */}
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/30"
                          animate={hoveredIndex === index ? { rotate: [0, -10, 10, -10, 0] } : { rotate: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-6 h-6 text-emerald-400" />
                        </motion.div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <motion.div
                              className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                              animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                            >
                              <span className="text-xs font-mono text-emerald-400">0{index + 1}</span>
                            </motion.div>
                            <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-sm text-grey leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Animated Arrow */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 text-emerald-400"
                        >
                          →
                        </motion.div>
                      </div>

                      {/* Scanning Line Effect on Hover */}
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                            animate={{
                              top: ["-10%", "110%"],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      )}
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
                onClick={() => router.push("/contact-us")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section with Code Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group lg:order-first"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Image Container */}
            <motion.div
              className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Code Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none z-10" />

              {/* Terminal Header */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-10 bg-dark/90 backdrop-blur-xl border-b border-emerald-500/30 z-20 flex items-center px-4 gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-emerald-400 ml-4">~/project/build</span>
                <motion.div
                  className="w-2 h-2 bg-emerald-400 ml-2"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              {/* Image */}
              <Image
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Software Development Team"
                src={`/web-dev.jpg`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

              {/* Floating Code Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6 z-20"
              >
                <div className="bg-dark/90 backdrop-blur-xl border border-emerald-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold text-emerald-400">Development Metrics</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                        500+
                      </div>
                      <div className="text-xs text-white/60">Projects</div>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <div className="text-2xl font-bold font-mono bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                        15+
                      </div>
                      <div className="text-xs text-white/60">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                        99%
                      </div>
                      <div className="text-xs text-white/60">Quality</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-emerald-500/50 z-20" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-emerald-500/50 z-20" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-500/50 z-20" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-500/50 z-20" />
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"
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
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"
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
  );
};

export default SoftwareDevelopment;

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Build responsive, fast, and secure web applications tailored to your business processes. We use modern frameworks like React, Next.js, and Node.js to deliver scalable solutions.",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Develop custom business applications that streamline operations, improve efficiency, and integrate seamlessly with your existing systems.",
  },
  {
    title: "Mobile App Development",
    description:
      "Create native and cross-platform mobile applications for iOS and Android that provide exceptional user experiences and drive engagement.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch powerful online stores with secure payment processing, inventory management, and seamless customer experiences that drive sales.",
  },
  {
    title: "API Development & Integration",
    description:
      "Connect your systems with robust RESTful APIs and integrate third-party services to extend functionality and automate workflows.",
  },
];
