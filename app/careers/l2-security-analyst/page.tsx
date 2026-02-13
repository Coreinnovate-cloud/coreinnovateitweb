"use client"

import { Button } from "@/components/shared/button"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Briefcase,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Target,
} from "lucide-react"
import Link from "next/link"

const responsibilities = [
  "Monitor, triage, and investigate security alerts from SIEM and EDR platforms",
  "Perform incident response activities including containment, eradication, and recovery support",
  "Conduct vulnerability assessments and work with clients to prioritise remediation",
  "Manage and tune security tooling (e.g., Microsoft Sentinel, Defender for Endpoint, CrowdStrike, etc.)",
  "Support clients with compliance-related security requirements (Cyber Essentials, ISO 27001, etc.)",
  "Produce clear incident reports and security recommendations for both technical and non-technical audiences",
  "Participate in threat hunting and proactive detection engineering",
  "Contribute to the development of SOC playbooks, runbooks, and response procedures",
]

const requirements = [
  "2–4 years of experience in a SOC, security operations, or cybersecurity analyst role",
  "Hands-on experience with SIEM platforms (e.g., Microsoft Sentinel, Splunk, or similar)",
  "Experience with EDR tools (e.g., Defender for Endpoint, CrowdStrike, SentinelOne)",
  "Solid understanding of common attack vectors, MITRE ATT&CK framework, and incident response processes",
  "Familiarity with vulnerability management tools and processes",
  "Strong analytical and problem-solving skills — you think critically under pressure",
  "Clear communicator — able to write incident reports and explain findings to non-technical stakeholders",
  "Relevant certifications are a plus (e.g., SC-200, CompTIA CySA+, BTL1, CEH) but not required",
]

const successCriteria = [
  "Alerts are triaged quickly and accurately, with minimal false positive noise",
  "Incidents are handled professionally with clear communication and documentation",
  "Clients feel confident in the security posture you help maintain",
  "You contribute to improving detection capabilities and SOC maturity over time",
]

const L2SecurityAnalystPage = () => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-dark via-secondary to-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/careers#open-roles"
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Open Roles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-dm-sans mb-6">
              L2 Security Analyst (Mid-Level)
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Briefcase className="w-4 h-4" />
                Cybersecurity
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4" />
                Full-time
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin className="w-4 h-4" />
                Remote | Shift-based
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Why Work Here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-secondary font-dm-sans mb-4">Why Work Here</h2>
            <div className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-2xl p-6 border border-primary/10">
              <p className="text-grey leading-relaxed">
                You&apos;ll be part of a growing security operations team defending real client environments. This isn&apos;t a passive monitoring role — you&apos;ll investigate, respond, and improve. If you want hands-on security experience across multiple industries and threat landscapes, this is the place.
              </p>
            </div>
          </motion.div>

          {/* Role Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-secondary font-dm-sans mb-4">Role Summary</h2>
            <p className="text-grey leading-relaxed">
              As an L2 Security Analyst, you&apos;ll investigate and respond to security incidents, manage SIEM and EDR platforms, and support clients with threat detection, vulnerability management, and compliance. You&apos;ll play a critical role in keeping client environments secure and resilient.
            </p>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-secondary font-dm-sans mb-6">Key Responsibilities</h2>
            <div className="space-y-3">
              {responsibilities.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-grey">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-secondary font-dm-sans mb-6">Required Experience & Skills</h2>
            <div className="space-y-3">
              {requirements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                  <span className="text-grey">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-secondary font-dm-sans mb-6">What Success Looks Like</h2>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="space-y-3">
                {successCriteria.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-grey">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Closing + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark via-secondary to-dark rounded-3xl p-8 sm:p-12 text-center"
          >
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              At Core Innovate, we hire for mindset, capability, and values. If you take ownership, value teamwork, and deliver excellence, you&apos;ll fit in well here.
            </p>
            <Link href="/contact-us">
              <Button size="lg" className="shadow-2xl shadow-primary/30">
                <Mail className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default L2SecurityAnalystPage
