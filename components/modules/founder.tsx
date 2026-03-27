"use client"

import React from "react"
import { motion } from "framer-motion"
import { Award, Briefcase, GraduationCap, Shield, Sparkles, Users } from "lucide-react"
import Image from "next/image"

const Founder = () => {
  const achievements = [
    {
      icon: Briefcase,
      label: "15+ Years",
      description: "Experience",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      label: "ISO 27001",
      description: "Certified Expert",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: GraduationCap,
      label: "MSc",
      description: "Cybersecurity",
      gradient: "from-cyan-500 to-primary",
    },
    {
      icon: Shield,
      label: "CRISC",
      description: "Risk Professional",
      gradient: "from-blue-600 to-cyan-400",
    },
  ]

  const certifications = ["CRISC", "Microsoft SC-200", "MCITP", "MCSA"]
  const memberships = ["ISACA", "CIISEC"]

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background with Tech Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark/10 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16365f05_1px,transparent_1px),linear-gradient(to_bottom,#16365f05_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="relative px-4 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm"
          >
            <Users className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wide">
              Founder & Information Security Leader
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans"
          >
            Meet{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Michael Folley
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10"
              />
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Image Container */}
            <div className="relative group">
              {/* Pulsing Glow */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl -z-10"
              />

              {/* Main Image */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="/mike.jpg"
                  alt="Michael Folley - Founder"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#239dea15_1px,transparent_1px),linear-gradient(to_bottom,#239dea15_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-xl" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm font-dm-sans">Security Expert</p>
                      <p className="text-white/70 text-xs">Information Security Leader</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="relative z-10 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} p-2 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <p className="font-bold font-dm-sans text-secondary text-sm">{item.label}</p>
                        <p className="text-grey text-xs">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative pl-6"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-cyan-500 to-transparent rounded-full" />
                <p className="text-base text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                  Michael Folley is an accomplished Information Security and GRC
                  professional with over 15 years of experience spanning IT,
                  healthcare, public sector, and consulting. With deep expertise in
                  cyber risk management, compliance, and cloud security, he has a
                  proven track record of implementing globally recognised frameworks
                  such as ISO 27001, NIST CSF, and SOC 2.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative pl-6"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent rounded-full" />
                <p className="text-base text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                  Holding an MSc in Cybersecurity and certifications including
                  CRISC, Microsoft SC-200, MCITP, and MCSA, Michael has successfully
                  led initiatives in incident response, threat intelligence, policy
                  development, and stakeholder engagement. His leadership ensures
                  that organisations not only achieve compliance but also adopt a
                  security-first culture aligned with business strategy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative pl-6"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-primary to-transparent rounded-full" />
                <p className="text-base text-grey leading-relaxed group-hover:text-secondary transition-colors duration-300">
                  As Founder of CoreInnovate, Michael is driven by a vision to
                  bridge the gap between technology and business outcomes. Beyond
                  his technical expertise, he is passionate about mentoring and
                  coaching the next generation of IT and cybersecurity
                  professionals, helping them gain the knowledge and confidence to
                  thrive in the tech industry.
                </p>
              </motion.div>
            </div>

            {/* Certifications & Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6 pt-4"
            >
              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h4 className="font-bold font-dm-sans text-secondary text-lg">
                    Certifications
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <motion.span
                      key={cert}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/30 rounded-full text-primary text-sm font-semibold hover:border-primary/50 transition-all duration-300"
                    >
                      {cert}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Professional Memberships */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="font-bold font-dm-sans text-secondary text-lg">
                    Professional Memberships
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {memberships.map((membership, index) => (
                    <motion.span
                      key={membership}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full text-blue-600 text-sm font-semibold hover:border-blue-500/50 transition-all duration-300"
                    >
                      {membership}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Founder
