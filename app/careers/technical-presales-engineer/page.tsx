"use client"

import { Button } from "@/components/shared/button"
import { motion, AnimatePresence } from "framer-motion"
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
import { useState } from "react"

const responsibilities = [
  "Lead technical discovery sessions with prospective and existing clients",
  "Scope and design IT infrastructure, cybersecurity, and compliance solutions",
  "Create detailed Statements of Work (SOWs), proposals, and technical documentation",
  "Work closely with the sales team to qualify opportunities and provide accurate technical input",
  "Present solutions confidently to both technical and non-technical stakeholders",
  "Stay across the latest vendor solutions (Microsoft 365, Azure, security platforms, etc.)",
  "Support the transition from presales to delivery, ensuring smooth project handoff",
  "Contribute to the development of service packages and solution templates",
]

const requirements = [
  "3+ years in a technical presales, solutions engineering, or senior technical consulting role",
  "Strong knowledge of Microsoft 365, Azure, networking, and cybersecurity fundamentals",
  "Experience writing proposals, scoping projects, and estimating effort",
  "Ability to translate business problems into technical solutions",
  "Excellent communication skills — able to explain complex concepts clearly",
  "Organised, detail-oriented, and comfortable managing multiple opportunities at once",
  "Familiarity with frameworks like Cyber Essentials, ISO 27001, or NIST is a plus",
]

const successCriteria = [
  "Prospective clients leave discovery calls feeling confident and understood",
  "Proposals are technically accurate, clear, and delivered on time",
  "You build trusted relationships with both the sales and delivery teams",
  "Solutions are scoped correctly — minimising rework and scope creep post-sale",
]

const TechnicalPresalesEngineerPage = () => {
  const [showApplyInfo, setShowApplyInfo] = useState(false)

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
              Technical Presales Engineer
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Briefcase className="w-4 h-4" />
                Engineering & Presales
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4" />
                Full-time
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin className="w-4 h-4" />
                Remote | Occasional travel
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
                This is a high-impact role at the intersection of technical consulting and business development. You&apos;ll work directly with prospects and clients to understand their challenges, then design tailored IT and cybersecurity solutions. You won&apos;t be reading scripts — you&apos;ll be solving problems.
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
              As a Technical Presales Engineer, you&apos;ll bridge the gap between client needs and technical delivery. You&apos;ll scope solutions across managed IT, cybersecurity, and compliance — then create proposals that are accurate, compelling, and ready to deliver.
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
            <AnimatePresence mode="wait">
              {showApplyInfo ? (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-lg mx-auto"
                >
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">
                    To apply, please email your CV to
                  </p>
                  <a
                    href="mailto:talent@coreinnovateit.co.uk"
                    className="text-primary hover:text-cyan-400 transition-colors text-xl font-bold underline underline-offset-4"
                  >
                    talent@coreinnovateit.co.uk
                  </a>
                  <p className="text-white/70 text-sm mt-3">
                    and tell us why you believe you would be a great fit for our team.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="button" exit={{ opacity: 0, y: -10 }}>
                  <Button
                    size="lg"
                    className="shadow-2xl shadow-primary/30"
                    onClick={() => setShowApplyInfo(true)}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TechnicalPresalesEngineerPage
