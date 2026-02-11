import {
  Activity,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  FileCheck,
  Heart,
  Lock,
  Monitor,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Healthcare IT & Cybersecurity | CoreInnovate IT",
  description:
    "Secure IT & Cybersecurity for Healthcare Organisations. Data protection, system availability, and audit readiness built for healthcare and care providers.",
}

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Healthcare & Care Providers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
            Secure IT & Cybersecurity for Healthcare Organisations
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Healthcare providers operate in one of the most regulated and risk-sensitive environments.
            Data protection, system availability, and audit readiness are not optional.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            While we support organisations across many sectors, healthcare and care providers face unique
            pressures that demand a higher standard of IT and security.
          </p>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Common Challenges We See
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Shield,
                text: "Sensitive health and care data held across multiple systems",
                color: "emerald",
              },
              {
                icon: Activity,
                text: "Limited tolerance for downtime or service disruption",
                color: "cyan",
              },
              {
                icon: Monitor,
                text: "Staff using shared or unmanaged devices",
                color: "blue",
              },
              {
                icon: ClipboardCheck,
                text: "Increasing regulatory scrutiny and audit expectations",
                color: "purple",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-4`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Support Healthcare and Care Providers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Secure cloud and identity management",
                description: "Centralised control over access to sensitive systems and data.",
              },
              {
                icon: Monitor,
                title: "Centrally managed and monitored devices",
                description: "Visibility and control across all endpoints in your environment.",
              },
              {
                icon: ShieldCheck,
                title: "Backup and recovery for critical systems",
                description: "Protect critical systems and data with reliable backup and recovery.",
              },
              {
                icon: Users,
                title: "Security awareness training for staff",
                description: "Equip your team to recognise and respond to security threats.",
              },
              {
                icon: FileCheck,
                title: "Clear reporting for inspections and audits",
                description: "Evidence-based reporting to support compliance requirements.",
              },
              {
                icon: Lock,
                title: "Data protection controls",
                description: "Security controls aligned with UK healthcare obligations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-950/50 to-slate-950 border border-emerald-900/30">
            <p className="text-lg text-gray-300 mb-6">
              We design environments that support UK healthcare and care obligations, including data protection
              and security controls, without overcomplicating operations.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-emerald-400 font-semibold">This is not a specialist-only service.</span>{" "}
                It&apos;s our standard security-first approach, applied with healthcare realities in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-emerald-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Healthcare Organisation?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get an estimate or speak with our team about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cost-estimator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all shadow-lg shadow-emerald-500/20"
            >
              Get an IT & Security Estimate
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
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-emerald-500/50 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
