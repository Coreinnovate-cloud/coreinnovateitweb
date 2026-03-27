"use client"

import { motion } from "framer-motion"
import { DollarSign, Shield, Target, Zap } from "lucide-react"
import Image from "next/image"
import SectionBadge from "../shared/section-badge"

const SecureScalablePartner = () => {
  const iconMap = {
    1: Shield,
    2: DollarSign,
    3: Target,
    4: Zap,
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <SectionBadge title="why choose us" />

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-secondary font-dm-sans font-bold text-4xl sm:text-5xl leading-tight">
                Your Partner for{" "}
                <span className="text-primary">Secure, Scalable</span> IT
              </h2>
              <p className="text-lg text-tertiary font-medium leading-relaxed">
                Partnering with CoreInnovate means proactive care,
                enterprise-grade security, and technology built around your
                goals.
              </p>
            </div>

            {/* First Two Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {whys.slice(0, 2).map((why, index) => {
                const Icon = iconMap[why.id as keyof typeof iconMap]
                return (
                  <motion.div
                    key={why.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative flex flex-col gap-y-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30"
                  >
                    {/* Icon with Gradient Background */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 p-2.5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-grey font-dm-sans text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {why.title}
                    </h3>

                    {/* Description */}
                    <p className="font-medium text-base text-tertiary leading-relaxed">
                      {why.description}
                    </p>

                    {/* Decorative Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-primary/5 to-cyan-500/5" />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                alt="CoreInnovate IT Partners"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="/partners.jpg"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />

              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-white text-center">
                  <p className="text-3xl font-bold font-dm-sans">99.9%</p>
                  <p className="text-sm text-white/80">Uptime Guarantee</p>
                </div>
              </motion.div>

              {/* Bottom Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-white">
                  <p className="text-2xl font-bold font-dm-sans">24/7</p>
                  <p className="text-sm text-white/80">Security Monitoring</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Border Glow */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whys.slice(2, 4).map((why, index) => {
            const Icon = iconMap[why.id as keyof typeof iconMap]
            return (
              <motion.div
                key={why.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ delay: (index + 2) * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative flex flex-col gap-y-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30"
              >
                {/* Icon with Gradient Background */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 p-2.5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-grey font-dm-sans text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {why.title}
                </h3>

                {/* Description */}
                <p className="font-medium text-base text-tertiary leading-relaxed">
                  {why.description}
                </p>

                {/* Decorative Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-primary/5 to-cyan-500/5" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SecureScalablePartner

const whys = [
  {
    id: 1,
    title: "24/7 Threat Monitoring",
    description:
      "Our security analysts continuously monitor your network, endpoints, and cloud environments to detect and stop threats before they escalate.",
  },
  {
    id: 2,
    title: "Predictable Costs",
    description:
      "No more surprise bills. Our managed services come with transparent, predictable pricing that helps you plan your IT budget with confidence.",
  },
  {
    id: 3,
    title: "Tailored Solutions",
    description:
      "We do not believe in one size fits all. Every project is designed around your business goals, workflows, and users to ensure maximum impact",
  },
  {
    id: 4,
    title: "Modern and Scalable Technology",
    description:
      "From responsive websites to enterprise applications, we use the latest frameworks, cloud technologies, and secure coding standards to build solutions that grow with your business.",
  },
]
