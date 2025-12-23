import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Eye,
  FileCheck,
  Layers,
  Server,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Managed IT Services | CoreInnovate IT",
  description:
    "Secure, proactive IT management built for modern risk. 20-minute response time, security embedded by design, and compliance as a natural outcome.",
}

export default function ManagedITServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Server className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Managed IT Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Secure, Proactive IT Management Built for Modern Risk
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Traditional managed IT focuses on fixing problems after they occur.
            CORE INNOVATE takes a different approach. We manage IT with
            security, risk reduction, and operational stability built in from
            day one.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            Our managed IT services are designed to reduce incidents, improve
            visibility, and give your business predictable, secure technology
            operations.
          </p>
        </div>
      </section>

      {/* Why Traditional MSPs Fall Short */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Traditional Managed IT Falls Short
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Many managed IT providers operate a reactive, ticket-driven model.
              Security is often sold separately, assessments are infrequent, and
              accountability is split across multiple tools and vendors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: AlertTriangle,
                text: "Security gaps that remain undetected",
                color: "red",
              },
              {
                icon: Clock,
                text: "Downtime discovered after business impact",
                color: "orange",
              },
              {
                icon: Zap,
                text: "Slow response during critical incidents",
                color: "amber",
              },
              {
                icon: FileCheck,
                text: "Compliance based on paperwork rather than real controls",
                color: "red",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all"
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

          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-950/50 to-slate-950 border border-blue-900/30 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 font-semibold">
              CORE INNOVATE addresses these issues through a fundamentally
              different service design.
            </p>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How CORE INNOVATE Delivers Managed IT
            </h2>
          </div>

          <div className="space-y-12">
            {/* Security Embedded by Design */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Security Embedded by Design
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Unlike traditional MSPs, we do not bolt security onto IT
                  services. Identity protection, device security, access
                  control, and baseline hardening are included as standard.
                </p>
                <p className="text-blue-300 font-semibold">
                  This reduces your attack surface before incidents occur.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="p-8 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <Shield className="w-24 h-24 text-blue-400" />
                </div>
              </div>
            </div>

            {/* Proactive Risk Management */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Eye className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Proactive Risk Management, Not Ticket Chasing
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We focus on preventing issues rather than reacting to them.
                </p>
                <p className="text-cyan-300 font-semibold">
                  Support tickets are the outcome, not the objective.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Continuous monitoring of systems and security posture",
                  "Regular validation of controls, not annual check-ups",
                  "Issues addressed before they disrupt operations",
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

            {/* 20-Minute Response Time */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-emerald-950/50 to-slate-950 border border-emerald-900/30">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    20-Minute Response Time for Critical Issues
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  When issues do occur, speed matters.
                </p>
                <p className="text-gray-300 mb-4">
                  CORE INNOVATE provides a{" "}
                  <span className="text-emerald-400 font-bold">
                    20-minute response time
                  </span>{" "}
                  for priority incidents, ensuring problems are acknowledged,
                  triaged, and actively worked on without delay.
                </p>
                <p className="text-emerald-300 font-semibold">
                  This contrasts with traditional providers where response times
                  are often measured in hours.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="p-8 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-center">
                  <div className="text-6xl font-bold text-emerald-400 mb-2">
                    20
                  </div>
                  <div className="text-xl text-emerald-300">Minutes</div>
                  <div className="text-sm text-gray-400 mt-2">
                    Response Time
                  </div>
                </div>
              </div>
            </div>

            {/* Identity-First IT Management */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Identity-First IT Management
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Most cyber incidents start with compromised user accounts.
                  Traditional providers still focus mainly on devices.
                </p>
                <p className="text-purple-300 font-semibold">
                  This approach limits lateral movement and unauthorised access.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Strong identity and access controls",
                  "Privilege management and access enforcement",
                  "Reduced reliance on perimeter-only security",
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

            {/* Integrated IT and Security Operations */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <Layers className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Integrated IT and Security Operations
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  IT operations and cyber security are often delivered
                  separately. We operate them as a single service.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Unified visibility across users, devices, and systems",
                  "Faster response when operational and security issues overlap",
                  "Clear ownership with no hand-offs between teams",
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

            {/* Evidence-Based Service Delivery */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Evidence-Based Service Delivery
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Many providers rely on assumptions and checklists. We rely on
                  data.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Monitoring and reporting based on real activity",
                  "Risk decisions supported by measurable findings",
                  "Continuous improvement driven by evidence",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance as a Natural Outcome */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <FileCheck className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Compliance as a Natural Outcome
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Compliance should reflect real security, not just policy
                  documents.
                </p>
                <p className="text-pink-300 font-semibold">
                  Compliance evidence is generated through day-to-day
                  operations.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "ISO-aligned controls",
                  "Cyber Essentials readiness",
                  "GDPR accountability",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Designed to Scale */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/10">
                    <TrendingUp className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Designed to Scale Without Redesign
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our services are cloud-first, automation-led, and designed to
                  scale across users, devices, and locations.
                </p>
                <p className="text-teal-300 font-semibold">
                  Your IT remains stable as your business evolves.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="p-8 rounded-xl bg-teal-500/5 border border-teal-500/20">
                  <TrendingUp className="w-24 h-24 text-teal-400" />
                </div>
              </div>
            </div>

            {/* Clear Ownership */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Clear Ownership and Commercial Transparency
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We take responsibility for outcomes, not just activities.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Single point of accountability",
                  "Clearly defined service scope",
                  "Predictable costs with no hidden security add-ons",
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
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You Gain From Managed IT With CORE INNOVATE
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "Reduced operational and security risk" },
              { icon: Zap, text: "Faster response during critical incidents" },
              { icon: TrendingUp, text: "Fewer disruptions and less downtime" },
              { icon: Eye, text: "Clear visibility and accountability" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started With Managed IT Services
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you want IT that is secure by design, proactively managed, and
            supported with a 20-minute response time, CORE INNOVATE can help.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/20"
          >
            Request a Managed IT Services Consultation
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
