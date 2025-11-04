"use client"

import React from "react"
import SectionBadge from "../shared/section-badge"
import ReviewComponent from "../ui/review"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const Reviews = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,144,217,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,144,217,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-16 text-center"
        >
          <SectionBadge title="client testimonials" />

          <div className="max-w-3xl mx-auto">
            <h2 className="text-secondary font-dm-sans font-bold text-4xl sm:text-5xl mb-4">
              What our clients say about{" "}
              <span className="text-primary">us</span>
            </h2>
            <p className="text-lg text-tertiary font-medium leading-relaxed">
              Real stories from businesses we&apos;ve helped transform with
              innovative IT solutions
            </p>
          </div>
        </motion.div>

        {/* Zigzag Reviews Layout */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Review Card */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <ReviewComponent {...testimonial} />
                </div>

                {/* Decorative Element */}
                <div
                  className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                  >
                    {/* Large Quote Decoration */}
                    <div
                      className={`flex items-center justify-center h-64 ${
                        isEven ? "lg:justify-start" : "lg:justify-end"
                      }`}
                    >
                      <div className="relative">
                        <Quote
                          className={`w-48 h-48 ${
                            index % 3 === 0
                              ? "text-primary/20"
                              : index % 3 === 1
                              ? "text-cyan-500/20"
                              : "text-blue-500/20"
                          }`}
                        />
                        {/* Animated Circle */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`absolute inset-0 rounded-full border-4 ${
                            index % 3 === 0
                              ? "border-primary/10"
                              : index % 3 === 1
                              ? "border-cyan-500/10"
                              : "border-blue-500/10"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className={`absolute bottom-0 ${
                        isEven ? "left-0" : "right-0"
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary font-dm-sans">
                              5.0
                            </p>
                            <p className="text-xs text-gray-500 font-medium">
                              Rating
                            </p>
                          </div>
                          <div className="w-px h-12 bg-gray-200" />
                          <div className="text-center">
                            <p className="text-3xl font-bold text-secondary font-dm-sans">
                              {testimonial.rating}★
                            </p>
                            <p className="text-xs text-gray-500 font-medium">
                              Stars
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-tertiary mb-6">
            Join hundreds of satisfied clients who trust CoreInnovate
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-2xl font-bold text-secondary font-dm-sans">
              200+ Happy Clients
            </p>
          </div>
        </motion.div>
      </div>

      {/* Large Quote Decorations */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none hidden lg:block">
        <Quote className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none rotate-180 hidden lg:block">
        <Quote className="w-32 h-32 text-primary" />
      </div>
    </section>
  )
}

export default Reviews

const testimonials = [
  {
    id: 1,
    title: "Top-notch cyber security and compliance support",
    name: "Mike O.",
    position: "Director, Excellis Care Group Ltd",
    rating: 5,
    content:
      "We were struggling with data security and compliance. Core Innovate guided us through Cyber Essentials certification and set up stronger protection for our systems. They made the process smooth and stress-free.",
  },
  {
    id: 2,
    title: "Brilliant website that reflects our brand perfectly",
    name: "Ola O.",
    position: "Founder, 7th Care",
    rating: 5,
    content:
      "Core Innovate built our website from scratch and nailed the look we wanted. It's clean, fast, and works beautifully on mobile. We've seen a big jump in inquiries since launch.",
  },
  {
    id: 3,
    title: "Reliable IT partner that gives us peace of mind",
    name: "Augustina S.",
    position: "Director, Statecare Solutions",
    rating: 5,
    content:
      "Core Innovate transformed how we manage our IT. Their team is quick to respond and always explains things in plain English. Since moving to their managed support, downtime has dropped to nearly zero.",
  },
]
