import { Metadata } from "next";
import Link from "next/link";
import { Key, Shield, Lock, Eye, CheckCircle2, AlertTriangle, Users, Settings, FileCheck, Target, Activity, UserX, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Managed Password Management | CoreInnovate IT",
  description: "Secure access. Reduced risk. Centralised control. Fully managed password management service to reduce credential risk and improve access control.",
};

export default function ManagedPasswordManagementPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Key className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Managed Password Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Secure Access. Reduced Risk. Centralised Control.
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Weak, reused, or poorly managed passwords remain one of the leading causes of data breaches and account compromise. As organisations grow, managing credentials securely across systems, users, and third parties becomes increasingly complex.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            Core Innovate IT delivers Managed Password Management as a fully managed security service. We implement, administer, and govern secure credential management to reduce risk, improve access control, and support compliance requirements.
          </p>
        </div>
      </section>

      {/* Why Password Management Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Password Management Matters
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Passwords sit at the centre of identity security. When credentials are unmanaged or shared insecurely, organisations face:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: UserX, text: "Account takeover and lateral movement", color: "red" },
              { icon: AlertTriangle, text: "Privilege abuse", color: "orange" },
              { icon: Shield, text: "Increased ransomware risk", color: "red" },
              { icon: FileCheck, text: "Audit and compliance failures", color: "amber" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-amber-950/50 to-slate-950 border border-amber-900/30 text-center">
            <Key className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 font-semibold">
              Password management is a foundational control, not a convenience tool.
            </p>
          </div>
        </div>
      </section>

      {/* Our Service */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Managed Password Management Service
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We provide a secure, centralised platform for storing, managing, and controlling access to sensitive credentials, fully managed by Core Innovate IT. This service integrates directly with our Managed IT and Cyber Security services, ensuring password governance aligns with your wider security strategy.
            </p>
          </div>

          <div className="space-y-12">
            {/* Secure Credential Storage */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Lock className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Secure Credential Storage</h3>
                </div>
                <p className="text-amber-300 font-semibold">
                  Access is controlled, audited, and traceable.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Encrypted storage for business credentials",
                  "Role-based access control",
                  "Centralised visibility of shared and privileged passwords",
                  "Secure handling of service accounts and application credentials"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Control and Governance */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Access Control and Governance</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We manage who has access to what, and why.
                </p>
                <p className="text-blue-300 font-semibold">
                  This significantly reduces insider and third-party risk.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Granular permissions based on role and responsibility",
                  "Removal of shared or unmanaged passwords",
                  "Controlled access for internal teams and third parties",
                  "Immediate access revocation when users leave or change roles"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Auditability and Compliance Support */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <FileCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Auditability and Compliance Support</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Password management supports regulatory and insurance requirements.
                </p>
                <p className="text-purple-300 font-semibold">
                  This strengthens governance and accountability.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Full audit trails of access and changes",
                  "Evidence for compliance frameworks such as GDPR, ISO-aligned controls, and Cyber Essentials",
                  "Reduced reliance on informal credential sharing"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reduced Credential-Based Attacks */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Reduced Credential-Based Attacks</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  By eliminating password reuse and insecure storage, the service helps prevent:
                </p>
                <p className="text-red-300 font-semibold">
                  This complements our Email Security, SOC, and Dark Web Monitoring services.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Credential stuffing attacks",
                  "Phishing-driven account compromise",
                  "Lateral movement following initial access"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fully Managed */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-emerald-950/50 to-slate-950 border border-emerald-900/30">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Settings className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Fully Managed by Core Innovate IT</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  This is not a self-service tool.
                </p>
                <p className="text-emerald-300 font-semibold">
                  You gain the benefit without operational overhead.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Platform setup and configuration",
                  "User onboarding and access management",
                  "Ongoing administration and support",
                  "Policy enforcement and best-practice guidance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who This Is For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Key, text: "Organisations managing shared or privileged credentials" },
              { icon: Users, text: "Businesses working with third-party suppliers or contractors" },
              { icon: FileCheck, text: "Regulated environments requiring access control and audit trails" },
              { icon: Zap, text: "Teams looking to remove password risk without slowing productivity" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layered Security Strategy */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Part of a Layered Security Strategy
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Managed Password Management integrates with:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Managed Cybersecurity Services", icon: Shield },
              { title: "Identity and Access Controls", icon: Users },
              { title: "Phishing Awareness Training", icon: Eye },
              { title: "Compliance as a Service", icon: FileCheck }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all text-center">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            This ensures credentials are protected as part of a wider defence strategy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-amber-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you want to reduce credential risk and gain control over access to critical systems, we can help.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-yellow-700 transition-all shadow-lg shadow-amber-500/20"
          >
            Speak to a Security Specialist
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
