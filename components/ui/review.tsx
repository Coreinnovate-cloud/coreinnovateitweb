"use client"

import React from "react"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export interface Testimonial {
  id: number
  title: string
  name: string
  position: string
  content: string
  rating?: number
}

const ReviewComponent: React.FC<Testimonial> = ({
  title,
  name,
  position,
  rating = 5,
  content,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white border border-gray-100 rounded-2xl p-8 flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-10 h-10 text-primary" />
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-6 relative z-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Star
              className={`w-5 h-5 ${
                index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              } transition-colors duration-300`}
            />
          </motion.div>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-secondary mb-4 font-dm-sans group-hover:text-primary transition-colors duration-300 relative z-10">
        {title}
      </h3>

      {/* Content */}
      <div className="flex-1 mb-6 relative z-10">
        <p className="text-tertiary text-base leading-relaxed">{content}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

      {/* Author Info */}
      <div className="flex items-center gap-4 relative z-10">
        {/* Avatar with Initials */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        {/* Name and Position */}
        <div>
          <p className="text-base text-secondary font-semibold font-dm-sans">
            {name}
          </p>
          <p className="text-sm text-tertiary font-medium">{position}</p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}

export default ReviewComponent
