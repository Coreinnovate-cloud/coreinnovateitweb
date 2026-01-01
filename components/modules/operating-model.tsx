"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Globe,
  Headphones,
  Shield,
  Target,
  TrendingUp,
  User,
  Zap,
} from "lucide-react"

const OperatingModel = () => {
  const benefits = [
    {
      icon: Clock,
      title: "No Waiting",
      description: "Fast, predictable response when it matters most.",
      detail: "20-minute response time.",
    },
    {
      icon: User,
      title: "No Chasing",
      description: "Clear ownership and accountability.",
      detail: "One partner responsible for IT, security, and compliance.",
    },
    {
      icon: Target,
      title: "No Uncertainty",
      description: "Flat, all-inclusive services with no out-of-scope surprises.",
      detail: "You always know what's covered.",
    },
  ]

  const reasons = [
    {
      icon: Shield,
      title: "Unified IT & Security Approach",
      description: "IT operations and cybersecurity delivered as one integrated service.",
    },
    {
      icon: CheckCircle2,
      title: "All-Inclusive Services",
      description: "No hidden costs. No add-ons after the fact.",
    },
    {
      icon: Zap,
      title: "Industry-Leading Tools",
      description: "Enterprise-grade platforms built into every service tier.",
    },
    {
      icon: TrendingUp,
      title: "Innovate Quickly, Securely",
      description: "Technology that enables growth without increasing risk.",
    },
    {
      icon: Headphones,
      title: "Trusted, Reliable Partner",
      description: "Long-term support built on transparency and results.",
    },
    {
      icon: Globe,
      title: "Compliance & Cyber Insurance Ready",
      description: "Designed to support regulatory requirements and insurance expectations.",
    },
  ]

  const problems = [
    "Disconnected tools with no unified security strategy",
    "Ticket queues with 1–2 hour response times",
    "Critical services treated as paid add-ons",
    "Support often outsourced or delivered offshore",
  ]

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Our Operating Model</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-dm-sans">
            The Core Innovate Operating Model
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Designed Differently. Delivered Properly.
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Core Innovate, we do not deliver generic IT support. We deliver outcomes.
            Our proven approach is built around clarity, accountability, and impact. Every solution is designed specifically for your business, aligned to your risk profile, regulatory obligations, and growth objectives.
          </p>
        </motion.div>

        {/* Assurance Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-dm-sans text-center">
            The Core Innovate Assurance Framework
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
            We customise solutions that directly support how your business operates, scales, and stays secure. Our dedicated team works proactively, not reactively, ensuring your IT and security environment is secure by design, resilient, and compliant with recognised cybersecurity standards.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-4xl mx-auto mt-4">
            This approach removes friction, uncertainty, and hidden complexity so you can focus on moving your business forward with confidence.
          </p>
        </motion.div>

        {/* What This Means for You */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-dm-sans">
              What This Means for You
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900 font-dm-sans">
                      {benefit.title}
                    </h4>

                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    <p className="text-primary font-semibold">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Core Innovate */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-dm-sans">
              Why Organisations Choose Core Innovate
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 shadow-md border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-900 font-dm-sans">
                        {reason.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infographics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { src: "/infographics/Infographic 1.png", alt: "Core Innovate Infographic 1" },
              { src: "/infographics/Infographic 2.png", alt: "Core Innovate Infographic 2" },
              { src: "/infographics/Infographic 3.png", alt: "Core Innovate Infographic 3" },
              { src: "/infographics/Infographic 4.png", alt: "Core Innovate Infographic 4" },
            ].map((infographic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={infographic.src}
                      alt={infographic.alt}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border border-red-100"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-dm-sans">
                The Problem with Typical Managed IT Providers
              </h3>
            </div>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto">
              Most managed IT providers focus on keeping systems running, not protecting the business.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/50 rounded-lg p-4 border border-red-200"
                >
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{problem}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg font-semibold text-slate-900 text-center mt-8">
              The result is slow response, unclear accountability, and increased risk when it matters most.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OperatingModel
