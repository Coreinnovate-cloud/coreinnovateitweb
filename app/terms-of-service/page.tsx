"use client"

import { motion } from "framer-motion"
import { FileText, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
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
              <FileText className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wide">Legal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dm-sans text-white">
              Terms of Service
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
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the CoreInnovate IT website and services operated by CoreInnovate IT (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {[
            {
              title: "1. Agreement to Terms",
              content: "By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services."
            },
            {
              title: "2. Use License",
              content: "Permission is granted to temporarily access our services for personal, non-commercial use only. This license does not include: modifying or copying the materials, using the materials for commercial purposes, attempting to reverse engineer any software, removing any copyright or proprietary notations, or transferring the materials to another person."
            },
            {
              title: "3. Services Description",
              content: "CoreInnovate IT provides managed IT services, cybersecurity solutions, cloud services, and related technology consulting. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice."
            },
            {
              title: "4. User Responsibilities",
              content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
            },
            {
              title: "5. Intellectual Property",
              content: "The service and its original content, features, and functionality are owned by CoreInnovate IT and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
            },
            {
              title: "6. Service Level Agreements",
              content: "Specific service level agreements (SLAs) will be detailed in individual service contracts. We strive to maintain 99.9% uptime for critical services, with planned maintenance communicated in advance."
            },
            {
              title: "7. Data Protection and Privacy",
              content: "We are committed to protecting your data in accordance with GDPR and other applicable data protection regulations. Please refer to our Privacy Policy for detailed information on how we handle your data."
            },
            {
              title: "8. Limitation of Liability",
              content: "In no event shall CoreInnovate IT, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
            },
            {
              title: "9. Indemnification",
              content: "You agree to defend, indemnify, and hold harmless CoreInnovate IT and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from any claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of our services."
            },
            {
              title: "10. Termination",
              content: "We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms shall survive termination."
            },
            {
              title: "11. Governing Law",
              content: "These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
            },
            {
              title: "12. Changes to Terms",
              content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms."
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500"
            >
              <h2 className="text-xl font-bold font-dm-sans text-secondary mb-4">
                {section.title}
              </h2>
              <p className="text-grey leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold font-dm-sans text-secondary">
                Questions About These Terms?
              </h2>
              <p className="text-grey leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-grey">
                <li>Email: hello@coreinnovate.co.uk</li>
                <li>Address: London, United Kingdom</li>
              </ul>
            </div>
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
