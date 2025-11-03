"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, Monitor, ExternalLink, Download, User, Key } from "lucide-react"
import { Button } from "@/components/shared/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function ClientSupportPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Simple password protection - replace with proper auth in production
  const CLIENT_PASSWORD = "CoreInnovate2025"

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CLIENT_PASSWORD) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password. Please try again.")
    }
  }

  const rmmTools = [
    {
      icon: Monitor,
      name: "ConnectWise Control",
      description: "Remote desktop and support tool",
      type: "Remote Access",
      url: "https://control.connectwise.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      name: "Datto RMM",
      description: "Remote monitoring and management",
      type: "RMM Platform",
      url: "https://rmm.datto.com",
      color: "from-primary to-blue-600"
    },
    {
      icon: Monitor,
      name: "TeamViewer",
      description: "Quick support access",
      type: "Remote Support",
      url: "https://start.teamviewer.com",
      color: "from-cyan-500 to-primary"
    }
  ]

  const quickLinks = [
    { title: "Knowledge Base", url: "#", icon: "📚" },
    { title: "Submit Ticket", url: "#", icon: "🎫" },
    { title: "System Status", url: "#", icon: "🟢" },
    { title: "Emergency Contact", url: "#", icon: "🚨" }
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-secondary to-dark" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-md mx-4"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold font-dm-sans text-white mb-2">
                Client Support Portal
              </h1>
              <p className="text-white/60 text-sm">
                Enter your access code to continue
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Access Code
                </label>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary/50"
                  />
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-sm text-center bg-red-500/10 py-2 px-4 rounded-lg border border-red-500/20"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button type="submit" className="w-full">
                Access Portal
              </Button>
            </form>

            {/* Help Link */}
            <div className="mt-6 text-center">
              <Link
                href="/contact-us"
                className="text-sm text-primary hover:text-cyan-400 transition-colors duration-300"
              >
                Need access? Contact support
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              This portal is for CoreInnovate IT clients only
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-dark via-secondary to-dark py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wide">Client Portal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold font-dm-sans text-white">
              Welcome Back
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Access your support tools and resources
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-3">{link.icon}</div>
              <div className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
                {link.title}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* RMM Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold font-dm-sans text-secondary mb-2">
              Remote Access Tools
            </h2>
            <p className="text-grey">
              Click on any tool below to launch remote support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {rmmTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-dm-sans text-white mb-1">
                        {tool.name}
                      </h3>
                      <span className="text-xs text-primary font-medium">
                        {tool.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-grey text-sm mb-6">
                    {tool.description}
                  </p>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors duration-300 font-semibold"
                  >
                    Launch Tool
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Downloads Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Download className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold font-dm-sans text-secondary mb-1">
                  Software Downloads
                </h3>
                <p className="text-grey text-sm">
                  Install remote support tools on your device
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full">
                Download for Windows
              </Button>
              <Button variant="outline" className="rounded-full border-primary/30 text-white hover:bg-white/10">
                Download for Mac
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-grey">
            <span>Need immediate assistance?</span>
            <Link
              href="/contact-us"
              className="text-primary hover:text-cyan-400 transition-colors duration-300 font-semibold"
            >
              Contact Support →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
