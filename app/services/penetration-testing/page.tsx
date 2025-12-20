import { Metadata } from "next";
import Link from "next/link";
import { Target, Shield, AlertTriangle, CheckCircle2, Eye, Lock, TrendingUp, FileCheck, Zap, Activity, Search, Server, Network, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Penetration Testing | CoreInnovate IT",
  description: "Identify weaknesses before they become incidents. Structured penetration testing that simulates real-world attacks to expose vulnerabilities.",
};

export default function PenetrationTestingPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Target className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">Penetration Testing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            Identify Weaknesses Before They Become Incidents
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Cyber attacks rarely start with advanced tactics. Most begin by exploiting basic weaknesses that remain undiscovered.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mb-8">
            Core Innovate IT provides structured penetration testing that simulates real-world attack methods to expose vulnerabilities across your environment before they are abused. Our service delivers clear insight into how an attacker could access your systems, what they could reach, and the likely business impact. This allows you to reduce risk, protect operations, and maintain trust.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg shadow-red-500/20"
          >
            Request a Penetration Testing Assessment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Penetration Testing Is Essential */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Penetration Testing Is Essential
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Security controls can appear effective while still leaving exploitable gaps. Penetration testing validates whether your defences actually work under attack conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Search, text: "Identify exploitable vulnerabilities across networks, systems, and cloud services" },
              { icon: Target, text: "Understand realistic attack paths and potential impact" },
              { icon: Shield, text: "Reduce exposure to ransomware, data loss, and service disruption" },
              { icon: FileCheck, text: "Support compliance with regulatory and contractual requirements" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-red-950/50 to-slate-950 border border-red-900/30 text-center mb-8">
            <p className="text-xl text-gray-300 font-semibold">
              This ensures security decisions are based on evidence, not assumptions.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
            >
              Speak to a Security Specialist
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Automated, Continuous Testing */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Automated, Continuous Testing
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Traditional annual testing leaves long periods of exposure. Core Innovate IT offers automated penetration testing that provides regular, repeatable assessments without disrupting operations.
              </p>
              <p className="text-cyan-300 font-semibold mb-8">
                This approach delivers enterprise-level coverage at a controlled and predictable cost.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-all"
              >
                Book an Automated Testing Review
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: Activity, text: "Internal and external attack simulations" },
                { icon: Zap, text: "Continuous testing rather than point-in-time checks" },
                { icon: FileCheck, text: "Consistent reporting with prioritised remediation actions" },
                { icon: TrendingUp, text: "Suitable for small, medium, and regulated organisations" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 flex-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threat Simulation */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Threat Simulation and Vulnerability Discovery
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Our penetration testing replicates attacker behaviour using current threat intelligence and proven exploitation techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Network, text: "External testing of internet-facing systems", color: "red" },
              { icon: Server, text: "Internal testing to assess lateral movement and privilege escalation", color: "orange" },
              { icon: Lock, text: "Credential misuse and misconfiguration analysis", color: "amber" },
              { icon: AlertTriangle, text: "Patch gaps and insecure access paths", color: "red" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center mb-8">
            <p className="text-lg text-gray-300">
              Each finding is clearly documented with risk level, impact, and remediation guidance.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
            >
              See What an Attacker Could Access
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Incident Readiness */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Incident Readiness and Business Continuity
              </h2>
              <p className="text-gray-300 mb-4">
                Identifying weaknesses is only valuable if action follows. We help you respond effectively when critical issues are uncovered.
              </p>
              <p className="text-blue-300 font-semibold mb-6">
                This ensures vulnerabilities are resolved before they escalate into incidents.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Strengthen Your Incident Readiness
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                "Rapid guidance on high-risk findings",
                "Risk-based remediation planning",
                "Alignment with backup and recovery strategies",
                "Reduced likelihood of ransomware and operational downtime"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Awareness */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Security Awareness and Policy Alignment
              </h2>
              <p className="text-gray-300 mb-4">
                Effective security requires alignment between technology, people, and processes. Penetration testing provides real data to support this.
              </p>
              <p className="text-purple-300 font-semibold mb-6">
                Testing becomes part of a structured security programme rather than a one-off exercise.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all"
              >
                Improve Your Security Framework
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                "Findings inform security awareness training",
                "Supports development and enforcement of security policies",
                "Improves internal accountability and governance",
                "Strengthens overall security maturity"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance and Audit Support */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Compliance and Audit Support
              </h2>
              <p className="text-gray-300 mb-4">
                Penetration testing is often required for audits, insurance, and supplier assurance. Our service supports regulatory and industry standards.
              </p>
              <p className="text-emerald-300 font-semibold mb-6">
                Higher-tier services include ongoing testing and compliance-focused reporting.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all"
              >
                Prepare for Your Next Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                "Evidence suitable for audits and assessments",
                "Alignment with ISO 27001, Cyber Essentials, and sector regulations",
                "Scalable testing as compliance requirements grow",
                "Clear, professional reporting for stakeholders"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Security Measure */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Practical, Proactive Security Measure
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Penetration testing with Core Innovate IT delivers:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, text: "Measurable risk reduction" },
              { icon: Eye, text: "Clear visibility of security posture" },
              { icon: FileCheck, text: "Actionable insight for technical and leadership teams" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all text-center">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-300 mt-8">
            It is a practical investment in resilience and operational stability.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-red-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Protect your systems, data, and operations by identifying weaknesses before attackers do.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg shadow-red-500/20"
          >
            Book a Penetration Testing Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
