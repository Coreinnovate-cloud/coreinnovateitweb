"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText, Database, Globe, UserCheck, Bell } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <p className="text-grey leading-relaxed text-lg">
            Core Innovate IT Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8">

          {/* 1. Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  1. Information We Collect
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white/90 mb-2">Personal Information</h3>
                    <p className="text-grey leading-relaxed mb-3">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Fill out contact forms on our website</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Subscribe to our newsletter or communications</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Request quotes or information about our services</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Engage with our customer support</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Apply for employment opportunities</span>
                      </li>
                    </ul>
                    <p className="text-grey leading-relaxed mt-3">
                      This may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white/90 mb-2">Automatically Collected Information</h3>
                    <p className="text-grey leading-relaxed mb-3">
                      When you visit our website, we automatically collect certain information about your device and browsing activity, including:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>IP address and browser type</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Operating system and device information</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Pages visited and time spent on pages</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Referring website addresses</span>
                      </li>
                      <li className="flex items-start gap-3 text-grey">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Clickstream data and user interactions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  2. How We Use Your Information
                </h2>

                <p className="text-grey leading-relaxed">
                  We use the information we collect to:
                </p>

                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Provide, operate, and maintain our services</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Send you technical notices, updates, and administrative messages</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Communicate with you about products, services, and promotional offers</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Process your transactions and manage your orders</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Improve and optimize our website and services</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Monitor and analyze usage patterns and trends</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Detect, prevent, and address technical issues and security threats</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Comply with legal obligations and enforce our terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. Legal Basis for Processing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  3. Legal Basis for Processing (UK GDPR)
                </h2>

                <p className="text-grey leading-relaxed">
                  Under UK GDPR, we process your personal data based on:
                </p>

                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Consent:</strong> When you provide explicit consent for specific purposes</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Contract:</strong> When processing is necessary to fulfill our contractual obligations</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Legal Obligation:</strong> When we must comply with legal requirements</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Legitimate Interests:</strong> When processing serves our legitimate business interests while respecting your rights</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. Data Sharing and Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  4. Data Sharing and Disclosure
                </h2>

                <p className="text-grey leading-relaxed">
                  We may share your information with:
                </p>

                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Service Providers:</strong> Third-party vendors who perform services on our behalf (hosting, analytics, email delivery)</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Business Partners:</strong> When you request information about partner services or products</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or governmental authority</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</span>
                  </li>
                </ul>

                <p className="text-grey leading-relaxed mt-4 pl-4 border-l-2 border-primary/30">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  5. Data Security
                </h2>

                <p className="text-grey leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>

                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Regular security assessments and audits</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Access controls and authentication procedures</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Employee training on data protection</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Incident response and breach notification procedures</span>
                  </li>
                </ul>

                <p className="text-grey leading-relaxed mt-4">
                  However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6. Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  6. Your Rights
                </h2>

                <p className="text-grey leading-relaxed">
                  Under UK GDPR, you have the following rights regarding your personal data:
                </p>

                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Right of Access:</strong> Request copies of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate or incomplete data</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Right to Restrict Processing:</strong> Request limitation on how we use your data</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Right to Data Portability:</strong> Request transfer of your data to another service</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Right to Object:</strong> Object to processing based on legitimate interests</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</span>
                  </li>
                </ul>

                <p className="text-grey leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:hello@coreinnovate.co.uk" className="text-primary hover:text-cyan-400 transition-colors">
                    hello@coreinnovate.co.uk
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* 7. Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="cookies"
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  7. Cookies and Tracking Technologies
                </h2>

                <p className="text-grey leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
                </p>

                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Remember your preferences and settings</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Understand how you use our website</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Improve website performance and functionality</span>
                  </li>
                  <li className="flex items-start gap-3 text-grey">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Provide personalized content and recommendations</span>
                  </li>
                </ul>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white/90 mb-2">Types of Cookies We Use</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3 text-grey">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Essential Cookies:</strong> Necessary for website functionality</span>
                    </li>
                    <li className="flex items-start gap-3 text-grey">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Analytics Cookies:</strong> Help us understand usage patterns</span>
                    </li>
                    <li className="flex items-start gap-3 text-grey">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Functional Cookies:</strong> Remember your preferences</span>
                    </li>
                    <li className="flex items-start gap-3 text-grey">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</span>
                    </li>
                  </ul>
                </div>

                <p className="text-grey leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 8. Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold font-dm-sans text-white mb-4">
              8. Data Retention
            </h2>
            <p className="text-grey leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When determining retention periods, we consider the nature and sensitivity of the information, contractual obligations, legal requirements, and legitimate business needs.
            </p>
          </motion.div>

          {/* 9. Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold font-dm-sans text-white mb-4">
              9. Third-Party Services
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
            <p className="text-grey leading-relaxed">
              We may use third-party services including Google Analytics, reCAPTCHA, email service providers, and cloud hosting providers.
            </p>
          </motion.div>

          {/* 10. International Data Transfers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold font-dm-sans text-white mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-grey leading-relaxed">
              Your information may be transferred to and processed in countries outside the United Kingdom. When we transfer data internationally, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the UK ICO and adequate technical measures.
            </p>
          </motion.div>

          {/* 11. Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold font-dm-sans text-white mb-4">
              11. Children&apos;s Privacy
            </h2>
            <p className="text-grey leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete it.
            </p>
          </motion.div>

          {/* 12. Changes to This Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-primary/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-dm-sans text-white">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-grey leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last updated&quot; date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 13. Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold font-dm-sans text-white mb-4">
              13. Contact Us
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="text-grey space-y-2">
              <p><strong className="text-white">Core Innovate IT Ltd</strong></p>
              <p>Email: <a href="mailto:hello@coreinnovate.co.uk" className="text-primary hover:text-cyan-400 transition-colors">hello@coreinnovate.co.uk</a></p>
              <p>Phone: <a href="tel:+441452222192" className="text-primary hover:text-cyan-400 transition-colors">+44 (0) 1452 222192</a></p>
              <p className="leading-relaxed">
                Registered Office: Suite 248, Corinium House, Barnwood Point Business Park, Gloucester, GL4 0XZ, United Kingdom
              </p>
              <p>Company Number: 15566009</p>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-grey leading-relaxed">
                <strong className="text-white">Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection issues. Visit{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-cyan-400 transition-colors">
                  ico.org.uk
                </a>{" "}
                for more information.
              </p>
            </div>
          </motion.div>

        </div>

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
