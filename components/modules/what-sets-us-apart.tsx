"use client"

import { motion } from "framer-motion"
import { CheckCircle2, MoveRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../shared/button"

const WhatSetsUsApart = () => {
  const highlights = [
    "Proactive support with AI-driven monitoring",
    "Enterprise-grade security & compliance",
    "Smart cloud optimization strategies",
    "Customized training programs",
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-dark via-secondary to-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl w-full h-[400px] lg:h-[550px] shadow-2xl">
              <Image
                src="/training.png"
                alt="Core Innovate IT Training and Services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">AI-Powered</p>
                    <p className="text-white/80 text-sm">
                      Technology Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Border Glow */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-white"
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider border border-primary/30">
                What Sets Us Apart
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold font-dm-sans leading-tight">
                From IT management to cloud, security, and training —{" "}
                <span className="text-cyan-400">
                  we align technology with your business goals
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
              <p>
                At CoreInnovate, we don&apos;t just provide IT tools — we create
                technology strategies that move your business forward. Our
                approach combines proactive support, enterprise-grade security,
                and smart optimization to ensure your systems stay reliable,
                compliant, and cost-effective.
              </p>
              <p>
                Whether it&apos;s managing Microsoft 365, securing sensitive
                healthcare data, migrating to the cloud, or training your
                workforce, we tailor every solution to your unique needs.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-base">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/services">
                <Button
                  variant="white"
                  size="lg"
                  className="group text-primary hover:text-white hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  Learn More
                  <MoveRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatSetsUsApart
