"use client"

import { blogs } from "@/lib/data"
import { motion } from "framer-motion"
import { Clock, Sparkles } from "lucide-react"
import React from "react"
import Article from "../ui/article"

const RecentArticles = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto space-y-12 py-12">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-30" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-dm-sans text-3xl sm:text-4xl font-bold text-secondary">
                Recent Articles
              </h3>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
            <p className="text-grey text-sm mt-1">Latest insights and updates</p>
          </div>
        </div>

        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
      </motion.div>

      {/* Articles Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Article
              id={blog.id}
              image={blog.image}
              title={blog.title}
              content={blog.content}
              date={blog.date}
              tags={blog.tags}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RecentArticles
