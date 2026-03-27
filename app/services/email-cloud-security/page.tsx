import {
  Activity,
  AlertTriangle,
  Bot,
  Brain,
  CheckCircle2,
  Cloud,
  Eye,
  FileWarning,
  Lock,
  Mail,
  Scan,
  Shield,
  ShieldAlert,
  Target,
  Users,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Email & Cloud Security | CoreInnovate IT",
  description:
    "AI-powered protection for your most targeted attack surface. Advanced email and cloud security that detects sophisticated threats traditional tools miss.",
}

export default function EmailCloudSecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Mail className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">
              Email & Cloud Security
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            AI-Powered Protection for Your Most Targeted Attack Surface
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Email and cloud platforms sit at the centre of modern business
            operations, and they remain the primary entry point for
            cyberattacks. Phishing, impersonation, account takeover, and data
            leakage continue to drive the majority of security incidents.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            CORE INNOVATE delivers AI-powered email and cloud security designed
            to detect sophisticated threats that traditional security tools
            miss. Our approach focuses on intent, behaviour, and context, not
            just known indicators.
          </p>
        </div>
      </section>

      {/* Why Email Security Can't Be Basic */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Email and Cloud Security Can No Longer Be Basic
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Phishing remains the leading cause of data breaches. Attackers now
              use highly targeted techniques that bypass conventional filters
              and appear legitimate even to trained users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Users,
                text: "Brand and executive impersonation",
                color: "purple",
              },
              {
                icon: Lock,
                text: "Credential harvesting and account takeover",
                color: "pink",
              },
              {
                icon: FileWarning,
                text: "Malicious attachments and zero-day malware",
                color: "purple",
              },
              { icon: Scan, text: "QR code-based phishing", color: "pink" },
              {
                icon: Cloud,
                text: "Cloud account abuse and lateral movement",
                color: "purple",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all"
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

          <div className="p-8 rounded-xl bg-gradient-to-br from-red-950/30 to-slate-950 border border-red-900/30 text-center">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 font-semibold">
              Relying on legacy email filtering or basic cloud security leaves
              organisations exposed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Approach to Email and Cloud Security
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              CORE INNOVATE secures email and cloud services using advanced
              AI-driven detection, continuous monitoring, and integrated user
              protection. This service works in alignment with our Managed IT
              and Cyber Security offerings to provide consistent control across
              identities, devices, and data.
            </p>
          </div>

          <div className="space-y-12">
            {/* AI-Driven Threat Detection */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    AI-Driven Threat Detection
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We use advanced artificial intelligence to analyse every email
                  and cloud interaction in context.
                </p>
                <p className="text-gray-400">
                  This enables detection of threats that static filtering cannot
                  identify.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Interprets email intent, not just keywords",
                  "Detects phishing, fraud, and impersonation attempts",
                  "Identifies threats designed to bypass traditional rules",
                  "Adapts continuously as attacker techniques evolve",
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

            {/* Visual and Behavioural Analysis */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <Eye className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Visual and Behavioural Analysis
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Attackers increasingly rely on visual deception. Our platform
                  analyses emails the way users see them.
                </p>
                <p className="text-gray-400">
                  This significantly reduces the risk of business email
                  compromise.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Visual AI detects brand impersonation using logos, fonts, and layout",
                  "Behavioural analysis identifies anomalies in sender behaviour",
                  "Social graph analysis helps detect internal account compromise",
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

            {/* Advanced Threat Protection */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <ShieldAlert className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Advanced Threat Protection
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Email and cloud threats are analysed before they reach users.
                </p>
                <p className="text-gray-400">
                  Threats are stopped before they can be executed.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Zero-day attachment analysis",
                  "Malicious link and QR code detection",
                  "Ransomware and malware prevention",
                  "Continuous cloud activity monitoring",
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

            {/* User-Aware Protection */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    User-Aware Protection
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Security should support users, not slow them down.
                </p>
                <p className="text-gray-400">
                  This strengthens human defence without disrupting
                  productivity.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Real-time, colour-coded email banners guide user decisions",
                  "Clear indicators help users recognise risk instantly",
                  "Reduces reliance on guesswork during high-pressure moments",
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

            {/* Inbound, Internal, and Outbound Protection */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Activity className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inbound, Internal, and Outbound Protection
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our email security covers the full message lifecycle.
                </p>
                <p className="text-gray-400">
                  This ensures sensitive data remains protected at all times.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Inbound protection against phishing, malware, and spam",
                  "Internal protection to detect account takeover and lateral phishing",
                  "Outbound protection with data loss prevention and encryption",
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

            {/* Cloud and Domain Security Controls */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <Cloud className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Cloud and Domain Security Controls
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Email security is tightly integrated with cloud and identity
                  protection.
                </p>
                <p className="text-gray-400">
                  This aligns directly with our Cyber Security services,
                  ensuring consistent policy enforcement.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Domain monitoring to defend against spoofing and reputation abuse",
                  "DMARC monitoring and enforcement",
                  "Secure access controls and authentication enforcement",
                  "Scalable protection across users and cloud services",
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
          </div>
        </div>
      </section>

      {/* Built on Proven Technology */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-950/50 to-slate-950 border border-purple-900/30">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-purple-500/10 flex-shrink-0">
                <Bot className="w-10 h-10 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Built on Proven Technology
                </h3>
                <p className="text-gray-300">
                  As part of our AI-powered email security stack, Core Innovate
                  IT utilises leading GenAI-based platforms, including INKY, to
                  enhance detection accuracy and threat visibility. This
                  capability is delivered as part of our managed service,
                  without exposing clients to unnecessary vendor complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why This Matters
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Email breaches remain one of the most damaging and disruptive
              incidents organisations face. Strong email and cloud security
              helps you:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                text: "Prevent phishing emails from reaching user inboxes",
              },
              {
                icon: Cloud,
                text: "Protect cloud-based applications and data",
              },
              {
                icon: Shield,
                text: "Reduce the risk of account takeover and ransomware",
              },
              {
                icon: Zap,
                text: "Scale security without adding operational overhead",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrated With Managed IT and Cyber Security
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Email and cloud security is not delivered in isolation. At Core
              Innovate IT, it integrates directly with:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Managed IT Services",
                desc: "User and device governance",
                icon: Target,
              },
              {
                title: "Cyber Security Services",
                desc: "Identity, monitoring, and response",
                icon: Shield,
              },
              {
                title: "Phishing Awareness",
                desc: "Training programs",
                icon: Users,
              },
              {
                title: "Dark Web Monitoring",
                desc: "Credential exposure detection",
                icon: Eye,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            This delivers a layered defence model rather than fragmented
            controls.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-purple-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Secure your email and cloud environment with AI-powered protection
            designed for modern threats.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/20"
          >
            Speak to an Email & Cloud Security Specialist
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
