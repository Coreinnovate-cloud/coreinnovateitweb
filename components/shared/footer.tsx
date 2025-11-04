"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/coreinnovateit", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/coreinnovate-it", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/coreinnovate", label: "GitHub" },
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-secondary to-dark" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative px-4 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Company Info & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 space-y-6"
            >
              {/* Logo */}
              <Link href="/" className="inline-block group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/logo-white.png"
                    width={120}
                    height={76}
                    alt="CoreInnovate logo"
                    className="relative transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed">
                Be the first to receive all the recent updates, articles, and
                valuable materials about IT security and innovation.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity duration-500" />
                  <div className="relative flex items-center gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        className="w-full placeholder:text-white/40 text-sm py-3 pl-11 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white focus:outline-none focus:border-primary/50 transition-colors duration-300"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                    <Button className="rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 text-white/60 group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 col-span-2">
              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-base font-bold font-dm-sans text-white mb-6 relative inline-block">
                  Company
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "About", href: "/about-us" },
                    { label: "Services", href: "/services" },
                    { label: "Resources", href: "/resources" },
                    { label: "Contact", href: "/contact-us" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-primary transition-colors duration-300"
                    >
                      <ArrowRight className="w-0 h-4 text-primary opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-base font-bold font-dm-sans text-white mb-6 relative inline-block">
                  Services
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Managed IT & Security", id: "managed-it-services" },
                    { name: "Cloud Solutions", id: "cloud-management" },
                    { name: "Managed Security", id: "managed-security" },
                    { name: "Software Development", id: "software-development" },
                    { name: "Project Risk", id: "project-risk" },
                  ].map((service) => (
                    <Link
                      key={service.id}
                      href={`/services#${service.id}`}
                      className="group flex items-center gap-2 text-white/60 hover:text-primary transition-colors duration-300"
                    >
                      <ArrowRight className="w-0 h-4 text-primary opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-sm font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-base font-bold font-dm-sans text-white mb-6 relative inline-block">
                  Resources
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Blog / Insights", href: "/resources" },
                    { label: "Contact Us", href: "/contact-us" },
                    { label: "About Us", href: "/about-us" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-primary transition-colors duration-300"
                    >
                      <ArrowRight className="w-0 h-4 text-primary opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-6 space-y-3">
                  <div className="flex items-start gap-2 text-white/60 text-xs">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>+44 (0) 1452 222192</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Legal Links */}
            <div className="flex flex-wrap text-sm font-medium text-white/60 items-center gap-6">
              <Link
                href="/terms-of-service"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <Link
                href="/privacy-policy#cookies"
                className="hover:text-primary transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-white/40 text-center sm:text-right">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <span>© 2025 Core Innovate IT Ltd.</span>
                <span className="hidden sm:inline">All rights reserved.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Registration Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 py-4 text-center"
        >
          <p className="text-xs text-white/30 leading-relaxed px-4">
            Registered in England and Wales (Company No. 15566009). Registered Office: Suite 248, Corinium House, Barnwood Point Business Park, Gloucester, GL4 0XZ.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
