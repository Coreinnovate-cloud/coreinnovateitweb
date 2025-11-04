"use client"

import Image from "next/image"
import React from "react"
import SectionBadge from "../shared/section-badge"
import { motion } from "framer-motion"
import { Quote, Heart, Target, Users, Zap } from "lucide-react"

const OurValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty and transparency in everything we do",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver exceptional quality and strive for continuous improvement",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "People-First",
      description: "We prioritize the success and growth of our clients and team",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technology to drive transformation",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/vector.png"
          alt="Background pattern"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionBadge title="our core values" />
          <h2 className="text-4xl sm:text-5xl font-bold font-dm-sans text-secondary mt-6 mb-4">
            What Drives Us Forward
          </h2>
          <p className="text-lg text-tertiary max-w-2xl mx-auto">
            Our values are the foundation of everything we do, guiding our
            decisions and shaping our culture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* CEO Quote Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative bg-gradient-to-br from-primary to-cyan-600 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
              {/* Background Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
              </div>

              {/* Large Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10 text-white space-y-8">
                <SectionBadge title="our core value" />

                <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed">
                  &quot;At CoreInnovate, we bring together{" "}
                  <span className="text-cyan-200">expertise</span>,{" "}
                  <span className="text-cyan-200">integrity</span>, and a{" "}
                  <span className="text-cyan-200">people-first mindset</span>.
                  Whether we are guiding a business through complex Information
                  technology and security challenges or helping a student take
                  their first steps into tech, our mission remains the same: to
                  create impact, inspire confidence, and enable growth.&quot;
                </blockquote>

                <div className="flex items-center gap-4 pt-4">
                  {/* Small avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-2xl font-bold">
                    MF
                  </div>
                  <div>
                    <p className="text-lg font-bold">Michael Folley</p>
                    <p className="text-cyan-200 text-sm font-medium">
                      CEO & Founder
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/founder.jpg"
                alt="Michael Folley, CEO"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

              {/* Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <p className="text-white font-bold text-lg">
                  Michael Folley
                </p>
                <p className="text-white/80 text-sm">CEO & Founder</p>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              {/* Icon with Gradient */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-dm-sans text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-tertiary text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurValues
