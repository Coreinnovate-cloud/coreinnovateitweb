"use client"

import BookAssessment from "@/components/modules/book-assessment"
import Customers from "@/components/modules/customers"
import DecryptedText from "@/components/modules/decryptedtext"
import Faqs from "@/components/modules/faqs"
import OperatingModel from "@/components/modules/operating-model"
import Particles from "@/components/modules/particles"
import Reviews from "@/components/modules/reviews"
import SecureScalablePartner from "@/components/modules/secure-scalable-partner"
import WhatSetsUsApart from "@/components/modules/what-sets-us-apart"

import { Button } from "@/components/shared/button"
import RemoteAvatar from "@/components/shared/remote-avatar"
import { motion } from "framer-motion"
import { Brain, MoveUpRight, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}

      <div
        className="min-h-screen flex items-center justify-center overflow-hidden relative bg-black"
        style={{ background: "#000" }}
      >
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-500/10 to-transparent pointer-events-none z-10" />

        {/* Animated Grid Background */}

        <div style={{ width: "100%", height: "800px", position: "absolute" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
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
                  CORE INNOVATE combines cutting-edge AI technology with expert
                  human oversight to deliver enterprise-grade IT and
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

      {/* Operating Model Section */}
      <OperatingModel />
      <Customers />
      <WhatSetsUsApart />
      <SecureScalablePartner />
      <Reviews />
      {/* <OurValues /> */}
      <Faqs />
      <BookAssessment />
    </div>
  )
}
