"use client"

import { motion } from "framer-motion"
import { Handshake, Shield, Cloud, Code, Award, Building2 } from "lucide-react"

export default function PartnersPage() {
  // Placeholder partner categories
  const partnerCategories = [
    {
      icon: Shield,
      title: "Security Partners",
      description: "Leading cybersecurity vendors",
      color: "from-blue-500 to-cyan-500",
      partners: [
        { name: "Microsoft", logo: "/partners/microsoft.svg", tier: "Gold" },
        { name: "Cisco", logo: "/partners/cisco.svg", tier: "Premier" },
        { name: "Palo Alto", logo: "/partners/paloalto.svg", tier: "Platinum" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Partners",
      description: "Cloud infrastructure providers",
      color: "from-primary to-blue-600",
      partners: [
        { name: "AWS", logo: "/partners/aws.svg", tier: "Advanced" },
        { name: "Azure", logo: "/partners/azure.svg", tier: "Gold" },
        { name: "Google Cloud", logo: "/partners/gcp.svg", tier: "Premier" }
      ]
    },
    {
      icon: Code,
      title: "Technology Partners",
      description: "Development and integration tools",
      color: "from-cyan-500 to-primary",
      partners: [
        { name: "ConnectWise", logo: "/partners/connectwise.svg", tier: "Platinum" },
        { name: "Datto", logo: "/partners/datto.svg", tier: "Gold" },
        { name: "Sophos", logo: "/partners/sophos.svg", tier: "Premier" }
      ]
    }
  ]

  const benefits = [
    "Access to enterprise-grade solutions",
    "Priority technical support",
    "Certified expertise and training",
    "Exclusive pricing and licensing",
    "Co-marketing opportunities",
    "Early access to new features"
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-dark via-secondary to-dark py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Gradient Orbs */}
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
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm">
              <Handshake className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wide">Our Partners</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans text-white">
              Technology{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry-leading technology vendors to deliver
              best-in-class solutions and services to our clients
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 bg-gradient-to-r from-primary/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold font-dm-sans text-secondary mb-3">
            Partnership Program Launching Soon
          </h2>
          <p className="text-grey max-w-2xl mx-auto">
            We&apos;re currently finalizing strategic partnerships with leading technology vendors.
            This page will be updated with our complete partner ecosystem once agreements are active.
          </p>
        </motion.div>

        {/* Partner Categories (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-dm-sans text-secondary mb-4">
              Partner Ecosystem Preview
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Explore the categories of partnerships we&apos;re building
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold font-dm-sans text-secondary mb-3">
                    {category.title}
                  </h3>

                  <p className="text-grey mb-6">
                    {category.description}
                  </p>

                  {/* Placeholder Partner List */}
                  <div className="space-y-3 pt-6 border-t border-white/10">
                    {category.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-white/60">{partner.name}</span>
                        <span className="text-primary text-xs font-semibold bg-primary/10 px-2 py-1 rounded-full">
                          {partner.tier}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-dm-sans text-secondary mb-4">
              Partnership Benefits
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Why we partner with industry leaders
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold font-dm-sans text-secondary mb-4">
            Certifications & Accreditations
          </h2>

          <p className="text-grey max-w-2xl mx-auto mb-8">
            Our team maintains industry-leading certifications across multiple technology platforms
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "ISO 27001",
              "Microsoft Certified",
              "AWS Certified",
              "CRISC",
              "CISSP",
              "CompTIA Security+"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/30 rounded-full text-primary font-semibold text-sm"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-grey mb-6">
            Interested in partnering with CoreInnovate IT?
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}
