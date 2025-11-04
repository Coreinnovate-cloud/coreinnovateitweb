"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, CloudUpload, Gauge, DollarSign, Shield, Network, Sparkles, ArrowRight } from "lucide-react";

const CloudManagementServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const serviceIcons = [CloudUpload, Gauge, DollarSign, Shield, Network];

  // Floating cloud particles
  const cloudParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 20,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="px-4 relative py-20 overflow-hidden" ref={ref}>
      {/* Enhanced Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating Cloud Particles */}
      {cloudParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <Cloud className="text-primary" style={{ width: particle.size, height: particle.size }} />
        </motion.div>
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <div className="space-y-16 mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 backdrop-blur-xl"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cloud className="w-5 h-5 text-blue-600" />
            </motion.div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Cloud Solutions
            </span>
          </motion.div>

          {/* Title with Gradient */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl max-w-[800px] mx-auto font-bold font-dm-sans"
          >
            <span className="bg-gradient-to-r from-secondary via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Cloud Management Services
            </span>
            <br />
            <span className="text-2xl sm:text-3xl text-tertiary font-medium">
              (Microsoft Azure & AWS)
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-tertiary max-w-[600px] mx-auto text-lg font-medium"
          >
            Core Innovate helps you harness the full power of{" "}
            <span className="text-blue-600 font-semibold">Microsoft Azure</span> and{" "}
            <span className="text-cyan-600 font-semibold">Amazon Web Services (AWS)</span>
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
              className="w-2 h-2 rounded-full bg-blue-500"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-cyan-500"
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
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Why Choose Core Innovate</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold font-dm-sans text-secondary mb-3">
                We help you{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  simplify, secure, & scale.
                </span>
              </h3>
              <p className="text-tertiary lg:max-w-[500px] text-base font-medium">
                Our Cloud Management Services provide your business with comprehensive solutions
              </p>
            </motion.div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="group relative"
                  >
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={hoveredIndex === index ? { scale: 1.03 } : { scale: 1 }}
                    />

                    {/* Service Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 shadow-lg group-hover:shadow-xl group-hover:border-blue-300 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
                          animate={hoveredIndex === index ? { rotate: [0, -10, 10, -10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xl font-bold text-secondary group-hover:text-blue-600 transition-colors duration-300">
                              {service.title}
                            </h4>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5 text-blue-600" />
                            </motion.div>
                          </div>
                          <p className="text-tertiary text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Step Number */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-300/50 flex items-center justify-center"
                        animate={hoveredIndex === index ? { scale: 1.2 } : { scale: 1 }}
                      >
                        <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group order-1 lg:order-2"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Image Container */}
            <motion.div
              className="relative h-[400px] sm:h-[600px] rounded-2xl overflow-hidden border-2 border-blue-100 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none z-10" />

              {/* Image */}
              <Image
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Cloud Management Services"
                src={`/new-cloud.png`}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20" />

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-6 left-6 right-6"
              >
                <div className="bg-white/90 backdrop-blur-xl border border-blue-200 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <CloudUpload className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-secondary font-bold text-sm">Azure & AWS Certified</p>
                      <p className="text-tertiary text-xs">Expert Cloud Solutions</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Uptime", value: "99.9%" },
                      { label: "Clients", value: "500+" },
                      { label: "Savings", value: "40%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                        className="bg-blue-50 rounded-lg p-2 text-center"
                      >
                        <p className="text-lg font-bold text-blue-600">{stat.value}</p>
                        <p className="text-xs text-tertiary">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Bottom Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 backdrop-blur-xl rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Multi-Cloud Expertise</p>
                      <p className="text-white/80 text-xs">Hybrid & Multi-Cloud Support</p>
                    </div>
                    <Network className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
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

export default CloudManagementServices;

const services = [
  {
    title: "Seamless Migration",
    description:
      "Move your workloads, applications, and data to the cloud with minimal disruption. We design and execute a clear migration plan that ensures a smooth transition from on-premise systems to Azure or AWS.",
  },
  {
    title: "Performance Optimisation",
    description:
      "We monitor and fine-tune your cloud environment to deliver speed, reliability, and scalability. Our experts continuously optimise workloads to keep your business running at peak performance.",
  },
  {
    title: "Cost Control and Transparency",
    description:
      "Cloud costs can spiral if unmanaged. We analyse your usage, remove waste, and right-size resources to ensure you only pay for what you need.",
  },
  {
    title: "Security and Compliance",
    description:
      "Your data is safe with us. We implement robust security frameworks, enforce best practices, and ensure compliance with industry regulations such as GDPR, ISO 27001, and HIPAA.",
  },
  {
    title: "Hybrid and Multi-Cloud Support",
    description:
      "Whether you are running Azure, AWS, or a hybrid mix, we manage complex environments with ease and ensure seamless integration with your on-premises systems.",
  },
];
