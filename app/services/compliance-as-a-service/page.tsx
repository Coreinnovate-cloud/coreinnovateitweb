import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileCheck,
  FileText,
  Settings,
  Shield,
  Target,
  TrendingDown,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Compliance as a Service (CaaS) | CoreInnovate IT",
  description:
    "Structured compliance that supports business continuity. Achieve, evidence, and maintain compliance with regulatory and industry frameworks.",
}

export default function ComplianceAsAServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Shield className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">
              Compliance as a Service (CaaS)
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            Structured Compliance That Supports Business Continuity
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Regulatory compliance is no longer a one-off exercise. It is an
            ongoing operational requirement that directly affects security,
            insurance cover, and business continuity.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            CORE INNOVATE delivers Compliance as a Service (CaaS) to help
            organisations achieve, evidence, and maintain compliance with
            regulatory and industry frameworks while reducing operational and
            security risk. Our approach integrates compliance into day-to-day IT
            and security operations, rather than treating it as a separate or
            reactive activity.
          </p>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Compliance Matters
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Failing to maintain compliance can lead to:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: AlertTriangle,
                text: "Regulatory penalties and enforcement action",
                color: "red",
              },
              {
                icon: FileText,
                text: "Denied cyber insurance claims",
                color: "orange",
              },
              {
                icon: TrendingDown,
                text: "Increased premiums",
                color: "amber",
              },
              {
                icon: Users,
                text: "Reputational damage and loss of client trust",
                color: "rose",
              },
              {
                icon: Shield,
                text: "Higher exposure to security incidents",
                color: "red",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg bg-${item.color}-500/10 flex-shrink-0`}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-indigo-300 font-medium">
            Effective compliance strengthens security, improves resilience, and
            supports long-term business stability.
          </p>
        </div>
      </section>

      {/* Comprehensive Solution */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Comprehensive Compliance Solution
            </h2>
          </div>

          <div className="space-y-12">
            {/* Ongoing Risk Assessment */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <Eye className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Ongoing Risk Assessment and Monitoring
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Compliance is continuous. Our CaaS solution includes regular
                  assessments of:
                </p>
                <p className="text-gray-400">
                  This allows us to identify gaps early and address them before
                  they become audit findings or security incidents.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Technical controls",
                  "Administrative processes",
                  "Physical and environmental safeguards",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documented Evidence */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <FileCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Documented Evidence of Compliance
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Evidence is often the most difficult part of compliance.
                </p>
                <p className="text-gray-400">
                  This provides clear proof of due care and due diligence for
                  auditors, regulators, and insurers.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Up-to-date policies and procedures",
                  "Audit logs and technical evidence",
                  "Risk registers and remediation records",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reduced Insurance Risk */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Reduced Insurance Risk and Premium Exposure
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Insurers increasingly assess security posture before issuing
                  or renewing cyber policies.
                </p>
                <p className="text-gray-400">
                  Our compliance services align closely with cyber insurance
                  expectations.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Improves insurability",
                  "Reduces the likelihood of claim denial",
                  "Supports more favourable premiums",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tailored Remediation */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Tailored Remediation Planning
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  No two organisations face the same risks.
                </p>
                <p className="text-gray-400">
                  This avoids generic or impractical compliance recommendations.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Specific to your industry and regulatory scope",
                  "Prioritised based on real risk",
                  "Aligned with your operational capacity",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification and Audit Preparation */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Award className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Certification and Audit Preparation
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We guide you through the full certification and audit
                  lifecycle.
                </p>
                <p className="text-gray-400">
                  You remain supported from planning through to audit
                  completion.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Readiness assessments",
                  "Gap analysis and remediation",
                  "Evidence preparation",
                  "Audit support and guidance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations and Frameworks */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Regulations and Frameworks We Support
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Our Compliance as a Service solution supports alignment with
              multiple regulatory and industry standards, including:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              "GDPR",
              "HIPAA",
              "SOC 2",
              "NIST 800-171",
              "CMMC",
              "PCI-DSS",
              "Cyber Essentials",
              "Cyber Essentials Plus",
              "DORA",
              "NIST CSF",
            ].map((framework, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center hover:border-indigo-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-gray-300 font-medium">{framework}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            We help organisations manage overlapping requirements efficiently
            without duplicating effort.
          </p>
        </div>
      </section>

      {/* Complete Compliance Solution */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Complete Compliance Solution
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              True compliance requires coverage across people, processes, and
              technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Managed IT Services",
                desc: "System governance and control",
                icon: Settings,
              },
              {
                title: "Cyber Security Services",
                desc: "Identity, endpoint, email, and monitoring",
                icon: Shield,
              },
              {
                title: "Security Awareness",
                desc: "Training and vulnerability management",
                icon: BookOpen,
              },
              {
                title: "Documentation",
                desc: "Evidence management",
                icon: FileText,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            This ensures compliance is supported by real operational controls,
            not just policy documents.
          </p>
        </div>
      </section>

      {/* Proven Process */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Compliance Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assessment and Discovery",
                desc: "We assess your current environment to identify risks, gaps, and regulatory exposure.",
                icon: ClipboardCheck,
              },
              {
                step: "2",
                title: "Planning and Design",
                desc: "We design a compliance roadmap aligned with your business goals and obligations.",
                icon: FileText,
              },
              {
                step: "3",
                title: "Implementation and Validation",
                desc: "We implement required controls and validate effectiveness through evidence and testing.",
                icon: Settings,
              },
              {
                step: "4",
                title: "Ongoing Assurance",
                desc: "Compliance is maintained through continuous monitoring, documentation, and review.",
                icon: Eye,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 mt-4">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Assurance */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Long-Term Assurance
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Our Compliance as a Service model delivers:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              "Reduced security and regulatory risk",
              "Clear accountability",
              "Audit readiness at all times",
              "Confidence for leadership, clients, and insurers",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800"
              >
                <CheckCircle2 className="w-8 h-8 text-indigo-400 mb-4" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-indigo-300 font-medium">
            Compliance becomes an enabler, not a blocker.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-indigo-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you are finding it challenging to manage compliance obligations
            or prepare for audits, we can help.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
          >
            Speak to a Compliance Specialist
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
