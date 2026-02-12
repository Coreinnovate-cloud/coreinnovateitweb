import {
  CheckCircle2,
  Cog,
  Eye,
  Factory,
  HardDrive,
  Lock,
  Monitor,
  Server,
  Shield,
  ShieldCheck,
  UserCheck,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Manufacturing IT & Cybersecurity | CoreInnovate IT",
  description:
    "Reliable IT & Cybersecurity for Manufacturing Organisations. Stability, visibility, and recovery for environments that rely on availability and control.",
}

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Factory className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Manufacturing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            Reliable IT & Cybersecurity for Manufacturing Organisations
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Manufacturing environments rely on availability, consistency, and control.
            Downtime, data loss, or security incidents can directly affect production and revenue.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            While we work across many industries, manufacturing often introduces additional operational
            and security considerations.
          </p>
        </div>
      </section>

      {/* Common Risks */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Common Risks in Manufacturing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Server,
                text: "Mixed IT environments and legacy systems",
                color: "orange",
              },
              {
                icon: Eye,
                text: "Limited visibility into endpoints and users",
                color: "amber",
              },
              {
                icon: Cog,
                text: "Weak separation between operational and office systems",
                color: "yellow",
              },
              {
                icon: HardDrive,
                text: "Backup gaps for critical data",
                color: "red",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all"
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
              How We Support Manufacturing Organisations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Centralised IT management and monitoring",
                description: "Unified visibility and control across your IT environment.",
              },
              {
                icon: Shield,
                title: "Endpoint security and ransomware protection",
                description: "Protect workstations and servers from modern threats.",
              },
              {
                icon: ShieldCheck,
                title: "Backup and recovery for key systems",
                description: "Reliable recovery for production-critical data and systems.",
              },
              {
                icon: UserCheck,
                title: "Identity and access control",
                description: "Ensure only authorised personnel access sensitive systems.",
              },
              {
                icon: Eye,
                title: "Clear reporting for management oversight",
                description: "Executive dashboards and reports for leadership visibility.",
              },
              {
                icon: Lock,
                title: "Network segmentation guidance",
                description: "Reduce risk by separating operational and office networks.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Resilience */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-br from-orange-950/50 to-slate-950 border border-orange-900/30">
            <h3 className="text-2xl font-bold text-white mb-4">Built for Resilience</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our approach prioritises stability, visibility, and recovery - not disruption.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                We apply the same security-first framework used across all industries, adapted for manufacturing realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-orange-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your Manufacturing IT?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get an estimate or speak with our team about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cost-estimator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg shadow-orange-500/20"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-orange-500/50 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
