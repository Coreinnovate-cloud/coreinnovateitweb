import {
  CheckCircle2,
  Cloud,
  CreditCard,
  Heart,
  Laptop,
  Monitor,
  PoundSterling,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Charity & Non-Profit IT & Cybersecurity | CoreInnovate IT",
  description:
    "Secure, Cost-Effective IT for Charities and Non-Profits. Strong protection delivered efficiently within tight budgets.",
}

export default function CharitiesNonProfitsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Heart className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Charities & Non-Profits</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            Secure, Cost-Effective IT for Charities and Non-Profits
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Charities and non-profits handle sensitive personal data while working within tight budgets.
            Security incidents don&apos;t just cause disruption - they damage trust.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            We support organisations across many sectors, and charities consistently need strong protection
            delivered efficiently.
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
                icon: Users,
                text: "Limited internal IT resources",
                color: "purple",
              },
              {
                icon: Cloud,
                text: "Reliance on cloud services without full security controls",
                color: "pink",
              },
              {
                icon: Laptop,
                text: "Staff and volunteers using mixed devices",
                color: "indigo",
              },
              {
                icon: Shield,
                text: "High impact if data is lost or exposed",
                color: "red",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all"
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
              How We Support Charities and Non-Profits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Secure and well-managed cloud environments",
                description: "Protected Microsoft 365 and cloud workspaces for your organisation.",
              },
              {
                icon: Monitor,
                title: "Device management and monitoring",
                description: "Visibility and control across staff and volunteer devices.",
              },
              {
                icon: ShieldCheck,
                title: "Backup and recovery for critical data",
                description: "Protect donor and beneficiary data with reliable recovery.",
              },
              {
                icon: Users,
                title: "Staff security awareness and training",
                description: "Equip your team to recognise and respond to security threats.",
              },
              {
                icon: PoundSterling,
                title: "Clear, predictable monthly pricing",
                description: "Budget-friendly pricing with no hidden costs or surprises.",
              },
              {
                icon: CreditCard,
                title: "Cost-effective solutions",
                description: "Enterprise-grade security tailored for charity budgets.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security That Respects Budgets */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-950/50 to-slate-950 border border-purple-900/30">
            <h3 className="text-2xl font-bold text-white mb-4">Security That Respects Budgets</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our services focus on risk reduction and resilience, not unnecessary complexity.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                We align security controls to real-world charity operations and UK regulatory expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-purple-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Organisation?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get an estimate or speak with our team about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cost-estimator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/20"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-purple-500/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
