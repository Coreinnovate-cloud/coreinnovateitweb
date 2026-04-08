import {
  CheckCircle2,
  Cloud,
  Eye,
  Laptop,
  Lock,
  Monitor,
  Rocket,
  Shield,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Growing Business & Startup IT & Cybersecurity | CoreInnovate IT",
  description:
    "Scalable IT & Cybersecurity for Growing Organisations. Structure without bureaucracy for businesses that are scaling fast.",
}

export default function GrowingBusinessesPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cyan-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Growing Businesses & Startups</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Scalable IT & Cybersecurity for Growing Organisations
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Growth exposes gaps.
            What worked at 5 or 10 users often fails at 25, 50, or beyond.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            We support organisations across many sectors, and growing businesses share one thing in common:
            they need structure without bureaucracy.
          </p>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Common Challenges During Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Laptop,
                text: "Informal IT setups that don't scale",
                color: "cyan",
              },
              {
                icon: Lock,
                text: "Inconsistent access controls",
                color: "teal",
              },
              {
                icon: Eye,
                text: "Limited security visibility",
                color: "blue",
              },
              {
                icon: Zap,
                text: "Reactive support instead of proactive management",
                color: "indigo",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all"
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
              How We Support Growing Organisations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Scalable managed IT support",
                description: "IT services that grow with you, from 10 users to 500+.",
              },
              {
                icon: Cloud,
                title: "Secure cloud and identity foundations",
                description: "Build on solid security foundations from day one.",
              },
              {
                icon: Monitor,
                title: "Device standardisation and monitoring",
                description: "Consistent, managed devices across your growing team.",
              },
              {
                icon: ShieldCheck,
                title: "Backup and recovery from day one",
                description: "Protect your data before you learn the hard way.",
              },
              {
                icon: TrendingUp,
                title: "Clear reporting for leadership",
                description: "Visibility into IT health and security posture.",
              },
              {
                icon: Shield,
                title: "Security that scales with you",
                description: "Enterprise-grade protection without enterprise complexity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Grow */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-950/50 to-slate-950 border border-cyan-900/30">
            <h3 className="text-2xl font-bold text-white mb-4">Built to Grow With You</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our services are designed to mature as your organisation grows - without forcing you into
              enterprise complexity too early.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-cyan-400 font-semibold">Security becomes a foundation, not a blocker.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-cyan-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your IT Securely?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get an estimate or speak with our team about your growth plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cost-estimator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all shadow-lg shadow-cyan-500/20"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              Get a Free Security Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
