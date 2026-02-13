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
  "Investigate and resolve escalated support tickets (from 1st line or direct)",
  "Manage and maintain Microsoft 365 environments (Exchange, SharePoint, Teams, Entra ID)",
  "Support Azure infrastructure (VMs, networking, storage, backups)",
  "Troubleshoot networking issues (firewalls, switches, VPNs, DNS, DHCP)",
  "Manage endpoint devices using Intune, SCCM, or equivalent",
  "Perform root cause analysis and document known issues / solutions",
  "Participate in change management and out-of-hours maintenance when required",
  "Contribute to internal knowledge base and documentation",
]

const requirements = [
  "2–4 years of experience in a 2nd line or senior support role",
  "Strong knowledge of Microsoft 365 administration (Exchange Online, Entra ID, Teams)",
  "Experience with Azure IaaS (VMs, networking, storage)",
  "Solid understanding of networking fundamentals (TCP/IP, DNS, DHCP, VPN, firewalls)",
  "Experience with endpoint management (Intune, SCCM, or similar)",
  "Strong troubleshooting methodology — you follow logic, not guesswork",
  "Clear communicator — able to explain technical issues to non-technical users",
  "Relevant certifications are a plus (e.g., AZ-104, MS-102, CCNA) but not essential",
]

const successCriteria = [
  "Escalated tickets are resolved efficiently with clear communication to the client",
  "You reduce recurring issues through proper root cause analysis and documentation",
  "Client environments are well-maintained, secure, and performant",
  "You contribute to team knowledge and help upskill 1st line colleagues",
]

const SecondLineITAnalystPage = () => {
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
              2nd Line IT Analyst
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Briefcase className="w-4 h-4" />
                IT Operations
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
                You&apos;ll work across a wide range of client environments and technologies — not just one internal setup. Every day is different, and you&apos;ll develop skills fast. We invest in our engineers and support career progression into senior or specialist roles.
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
              As a 2nd Line IT Analyst, you&apos;ll handle escalated technical issues across Microsoft 365, Azure, networking, and endpoint management. You&apos;ll troubleshoot complex problems, maintain client infrastructure, and ensure systems are performing at their best.
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

export default SecondLineITAnalystPage
