"use client"

import BookAssessment from "@/components/modules/book-assessment"
import DecryptedText from "@/components/modules/decryptedtext"
import Dither from "@/components/modules/dither"
import Faqs from "@/components/modules/faqs"
import Reviews from "@/components/modules/reviews"
import SecureScalablePartner from "@/components/modules/secure-scalable-partner"
import WhatSetsUsApart from "@/components/modules/what-sets-us-apart"

import { Button } from "@/components/shared/button"
import RemoteAvatar from "@/components/shared/remote-avatar"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  Brain,
  Cloud,
  Cpu,
  Lock,
  MoveUpRight,
  Shield,
  Target,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const coreOfferings = [
    {
      icon: Cpu,
      title: "Managed IT Services",
      description: "24/7 proactive IT support and infrastructure management",
      color: "from-blue-500 to-cyan-500",
      link: "/services#managed-it-services",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat protection and security operations",
      color: "from-red-500 to-orange-500",
      link: "/services#managed-security",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure cloud migration and optimization services",
      color: "from-purple-500 to-indigo-500",
      link: "/services#cloud-management",
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Expert IT project delivery and coordination",
      color: "from-green-500 to-teal-500",
      link: "/services#project-management",
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation",
      color: "from-yellow-500 to-orange-500",
      link: "/services#project-risk",
    },
    {
      icon: Lock,
      title: "Information Security",
      description: "Data protection and compliance solutions",
      color: "from-indigo-500 to-blue-500",
      link: "/services#managed-security",
    },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}

      <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 via-blue-500/20 to-transparent pointer-events-none z-10" />

        {/* Animated Grid Background */}

        <div
          className="absolute inset-0"
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Dither
            waveColor={[0.086, 0.212, 0.373]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-y-6 sm:gap-y-8 max-w-3xl">
              {/* AI + Human Badge */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 px-4 sm:px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white w-fit text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span className="font-semibold">AI-Powered</span>
                </div>
                <div className="w-px h-3 sm:h-4 bg-white/30" />
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="font-semibold">Human-Driven</span>
                </div>
              </motion.span>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 sm:space-y-6"
              >
                <h1 className="text-white font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
                  <span className="block">
                    <DecryptedText
                      text="Intelligent IT."
                      speed={100}
                      maxIterations={20}
                      animateOn="view"
                      characters="ABCD1234!?"
                      className="inline-block"
                      parentClassName="all-letters"
                      encryptedClassName="encrypted"
                    />
                  </span>
                  <span className="block">
                    <DecryptedText
                      text="Human Touch."
                      speed={120}
                      maxIterations={20}
                      animateOn="view"
                      characters="ABCD1234!?"
                      className="inline-block"
                      parentClassName="all-letters"
                      encryptedClassName="encrypted"
                    />
                  </span>
                  <span className="block">
                    <DecryptedText
                      text="Secure Future."
                      speed={150}
                      maxIterations={20}
                      animateOn="view"
                      characters="ABCD1234!?"
                      className="inline-block text-cyan-400"
                      parentClassName="all-letters"
                      encryptedClassName="encrypted text-cyan-400"
                    />
                  </span>
                </h1>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-2xl">
                  Core Innovate IT combines cutting-edge AI technology with
                  expert human oversight to deliver enterprise-grade IT and
                  cybersecurity solutions that protect, optimize, and transform
                  your business.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link href="/contact-us">
                  <Button
                    className="w-full sm:w-fit shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
                    size="lg"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button
                    className="w-full sm:w-fit bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 text-amber-50"
                    size="lg"
                    variant="white"
                  >
                    Free Security Assessment
                    <span className="size-8 bg-primary flex items-center justify-center rounded-full">
                      <MoveUpRight className="size-4 text-white" />
                    </span>
                  </Button>
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <div className="flex -space-x-2">
                  <RemoteAvatar
                    className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white/30"
                    primarySrc="https://i.pravatar.cc/100?img=1"
                    fallbackSrc="https://api.dicebear.com/9.x/initials/png?seed=AA&scale=80&radius=50&size=100"
                    size={40}
                  />
                  <RemoteAvatar
                    className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white/30"
                    primarySrc="https://i.pravatar.cc/100?img=2"
                    fallbackSrc="https://api.dicebear.com/9.x/initials/png?seed=BB&scale=80&radius=50&size=100"
                    size={40}
                  />
                  <RemoteAvatar
                    className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white/30"
                    primarySrc="https://i.pravatar.cc/100?img=3"
                    fallbackSrc="https://api.dicebear.com/9.x/initials/png?seed=CC&scale=80&radius=50&size=100"
                    size={40}
                  />
                </div>

                <div className="text-white">
                  <p className="text-xl sm:text-2xl font-bold font-dm-sans">
                    200+
                  </p>
                  <p className="text-xs sm:text-sm text-white/80">
                    Trusted by businesses worldwide
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Core Offerings Section - Scroll Stack */}
      <section className="relative bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Core Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans text-secondary mb-4">
              Enterprise-Grade IT Services
            </h2>
            <p className="text-lg text-grey max-w-2xl mx-auto">
              Comprehensive technology solutions powered by AI intelligence and
              delivered by expert professionals
            </p>
          </motion.div>
        </div>

        {/* Core Offerings Cards */}
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {coreOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100 hover:border-primary/30 hover:shadow-3xl transition-all duration-500 overflow-hidden min-h-[350px] flex flex-col justify-center">
                  {/* Background Gradient Blob */}
                  <div
                    className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${offering.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Card Number */}
                  <div className="absolute top-6 right-6 text-7xl sm:text-8xl font-bold text-gray-50 group-hover:text-primary/10 transition-colors leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 w-full space-y-6">
                    {/* Icon with Gradient */}
                    <div className="flex justify-center">
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${offering.color} p-5 sm:p-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}
                      >
                        <offering.icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold font-dm-sans text-secondary group-hover:text-primary transition-colors duration-300">
                        {offering.title}
                      </h3>
                      <p className="text-grey text-base sm:text-lg leading-relaxed">
                        {offering.description}
                      </p>

                      {/* Learn More Link */}
                      <Link href={offering.link}>
                        <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300 cursor-pointer pt-2">
                          <span>Learn More</span>
                          <MoveUpRight className="w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Border Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${offering.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                  />

                  {/* Corner Decoration */}
                  <div className="absolute bottom-8 left-8 opacity-5 pointer-events-none">
                    <offering.icon className="w-32 h-32 text-gray-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
              >
                Explore All Services
                <MoveUpRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI + Human Trust Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-dark via-secondary to-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white font-dm-sans">
                AI-Powered
              </h3>
              <p className="text-white/80">
                Advanced automation and predictive intelligence for proactive
                protection
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white font-dm-sans">
                Expert Team
              </h3>
              <p className="text-white/80">
                Certified professionals providing strategic oversight and
                support
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white font-dm-sans">
                24/7 Security
              </h3>
              <p className="text-white/80">
                Round-the-clock monitoring and rapid incident response
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rest of Content */}
      {/* <OurServices /> */}
      <WhatSetsUsApart />
      <SecureScalablePartner />
      <Reviews />
      {/* <OurValues /> */}
      <Faqs />
      <BookAssessment />
    </div>
  )
}
