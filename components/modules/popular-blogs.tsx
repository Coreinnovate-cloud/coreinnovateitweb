"use client"

import { blogs } from "@/lib/data"
import { motion } from "framer-motion"
import { Flame, TrendingUp } from "lucide-react"
import Image from "next/image"
import React from "react"
import Article from "../ui/article"

const PopularBlogs = () => {
  return (
    <div className="px-4 space-y-12 max-w-7xl mx-auto py-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-lg opacity-30" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-dm-sans text-3xl sm:text-4xl font-bold text-secondary">
                Popular
              </h3>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
            <p className="text-grey text-sm mt-1">Most read articles this week</p>
          </div>
        </div>

        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
      </motion.div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 justify-between items-start gap-8 lg:gap-12">
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative w-full h-[400px] lg:h-[476px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src={`/popular.jpg`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            alt="hand holding cloud system"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

          {/* Floating Badge */}
          <div className="absolute top-6 left-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md opacity-50" />
              <div className="relative flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-secondary">Trending</span>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="font-bold text-secondary text-lg mb-2 line-clamp-2">
                Latest Insights in Cloud Technology
              </h4>
              <p className="text-grey text-sm">
                Discover how modern cloud solutions are transforming businesses
              </p>
            </div>
          </div>
        </motion.div>

        {/* Articles List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          {blogs.slice(0, 2).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Article
                id={blog.id}
                title={blog.title}
                tags={blog.tags}
                content={blog.content}
                date={blog.date}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default PopularBlogs
