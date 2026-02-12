import {
  Briefcase,
  CheckCircle2,
  Cloud,
  Eye,
  FileCheck,
  Lock,
  Monitor,
  Shield,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Professional Services IT & Cybersecurity | CoreInnovate IT",
  description:
    "IT & Cybersecurity for Professional Services Firms. Stronger access control, visibility, and accountability for firms that depend on trust.",
}

export default function ProfessionalServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Professional Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            IT & Cybersecurity for Professional Services Firms
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Professional services firms depend on trust.
            Client data, confidentiality, and reputation are critical to your business.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            We work with organisations across many industries, but professional services consistently require
            stronger access control, visibility, and accountability.
          </p>
        </div>
      </section>

      {/* Common Risks */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Common Risks in Professional Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Users,
                text: "Client data accessible beyond those who need it",
                color: "blue",
              },
              {
                icon: Lock,
                text: "Weak identity controls and inconsistent MFA",
                color: "cyan",
              },
              {
                icon: Eye,
                text: "Limited visibility into cloud activity",
                color: "purple",
              },
              {
                icon: Shield,
                text: "Informal IT processes that don't scale",
                color: "indigo",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all"
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
              How We Support Professional Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Secure cloud productivity environments",
                description: "Protected Microsoft 365 and cloud workspaces for your team.",
              },
              {
                icon: UserCheck,
                title: "Identity and access control enforcement",
                description: "Strong authentication and role-based access to sensitive data.",
              },
              {
                icon: Monitor,
                title: "Managed endpoint security and monitoring",
                description: "Continuous protection and visibility across all devices.",
              },
              {
                icon: ShieldCheck,
                title: "Backup and recovery for business-critical data",
                description: "Protect client files and business data with reliable recovery.",
              },
              {
                icon: FileCheck,
                title: "Executive-level reporting and visibility",
                description: "Clear dashboards and reports for leadership oversight.",
              },
              {
                icon: Eye,
                title: "Cloud activity monitoring",
                description: "Full visibility into who is accessing what, and when.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Accountability */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-950/50 to-slate-950 border border-blue-900/30">
            <h3 className="text-2xl font-bold text-white mb-4">Built for Accountability</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our approach supports firms that must demonstrate control, not just claim it.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                Whether you are a small practice or a growing firm, we scale security without slowing you down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your Firm&apos;s Security?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get an estimate or speak with our team about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cost-estimator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/20"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
