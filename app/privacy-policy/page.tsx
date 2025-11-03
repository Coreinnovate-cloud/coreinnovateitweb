"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Company information (Company name, role, industry)",
        "Usage data (IP address, browser type, pages visited)",
        "Cookies and tracking technologies"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information to improve our services",
        "To monitor the usage of our services",
        "To detect, prevent and address technical issues"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures",
        "Data is encrypted in transit and at rest",
        "Regular security audits and assessments",
        "ISO 27001 compliant processes",
        "Access controls and authentication measures"
      ]
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: [
        "Right to access your personal data",
        "Right to rectification of inaccurate data",
        "Right to erasure ('right to be forgotten')",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-dark via-secondary to-dark py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wide">Legal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans text-white">
              Privacy Policy
            </h1>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <p className="text-grey leading-relaxed">
            CoreInnovate IT (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold font-dm-sans text-secondary">
                    {section.title}
                  </h2>

                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 space-y-8"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold font-dm-sans text-secondary mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-grey leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold font-dm-sans text-secondary mb-4">
              Third-Party Services
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We may employ third-party companies and individuals to facilitate our service, provide service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold font-dm-sans text-secondary mb-4">
              Data Retention
            </h2>
            <p className="text-grey leading-relaxed">
              We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold font-dm-sans text-secondary mb-4">
              Contact Us
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2 text-grey">
              <li>Email: hello@coreinnovate.co.uk</li>
              <li>Address: London, United Kingdom</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
            <h2 className="text-2xl font-bold font-dm-sans text-secondary mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-grey leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
          </div>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors duration-300 font-semibold"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
