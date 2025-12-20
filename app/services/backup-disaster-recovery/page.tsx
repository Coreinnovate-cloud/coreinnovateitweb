import { Metadata } from "next";
import Link from "next/link";
import { HardDrive, Shield, Zap, CheckCircle2, Clock, Database, Server, Laptop, Cloud, FileCheck, Scale, TrendingUp, Lock, AlertTriangle, RotateCcw, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Backup, Disaster Recovery & Business Continuity | CoreInnovate IT",
  description: "Recover faster. Reduce downtime. Protect your business with secure, managed backup and disaster recovery solutions.",
};

export default function BackupDisasterRecoveryPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cyan-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <HardDrive className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Data Backup, Disaster Recovery & Business Continuity</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Recover Faster. Reduce Downtime. Protect Your Business.
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Data loss remains one of the most disruptive events a business can face. Ransomware, system failure, human error, and hardware faults can all bring operations to a halt if reliable backups and recovery plans are not in place.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            Core Innovate IT delivers secure, managed backup and disaster recovery solutions designed to protect critical data, support rapid recovery, and maintain business continuity when incidents occur.
          </p>
        </div>
      </section>

      {/* Why Backup Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Backup and Business Continuity Are Critical
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Without proper backups, organisations are often left with two options during an attack: accept prolonged downtime or pay a ransom with no guarantee of recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-xl bg-gradient-to-br from-red-950/50 to-slate-950 border border-red-900/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Without Proper Backups</h3>
                  <p className="text-gray-400">Accept prolonged downtime or pay ransom with no recovery guarantee</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-950/50 to-slate-950 border border-cyan-900/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/10">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">With Proper Strategy</h3>
                  <p className="text-gray-400">Recovery certainty and operational resilience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "Reduces the impact of ransomware and cyber incidents" },
              { icon: Zap, text: "Enables rapid restoration of systems and data" },
              { icon: FileCheck, text: "Supports compliance and data protection obligations" },
              { icon: TrendingUp, text: "Improves resilience and operational confidence" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-cyan-300 font-semibold mt-8">
            Backup is not just about storage. It is about recovery certainty.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Backup and Recovery Approach
            </h2>
          </div>

          <div className="space-y-12">
            {/* Comprehensive Data Protection */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Database className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Comprehensive Data Protection</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We protect business-critical data across your environment.
                </p>
                <p className="text-gray-400">
                  Backups are securely stored and managed to ensure integrity and availability when needed.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Laptop, text: "Workstations and laptops" },
                  { icon: Server, text: "Servers and virtual machines" },
                  { icon: Cloud, text: "On-premise and cloud workloads" },
                  { icon: Database, text: "File systems and application data" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <item.icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rapid, Controlled Recovery */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Rapid, Controlled Recovery</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  When incidents occur, speed and accuracy matter.
                </p>
                <p className="text-gray-400">
                  Restoration is controlled, tested, and reliable.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Full or granular data restoration",
                  "Recovery during or outside business hours",
                  "Clear recovery processes and support",
                  "Reduced downtime and operational disruption"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Designed for Compliance */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <FileCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Designed for Compliance and Retention</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Backup and retention requirements vary by industry and regulation.
                </p>
                <p className="text-gray-400">
                  This aligns directly with our Compliance as a Service offering.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Data retention periods",
                  "Secure storage and transfer",
                  "Regulatory and contractual obligations",
                  "Audit and evidence requirements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scalable and Easy to Manage */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Scale className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Scalable and Easy to Manage</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Your backup solution should grow with your business.
                </p>
                <p className="text-gray-400">
                  Growth does not compromise recoverability.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Easily add users, devices, and workloads",
                  "Scale storage and retention without redesign",
                  "Central visibility and management",
                  "Supported by our team or your internal IT staff"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Continuity Built In */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Business Continuity Built In</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Backup is a key pillar of business continuity planning.
                </p>
                <p className="text-gray-400">
                  This service integrates with our Managed IT and Cyber Security services to ensure recovery plans align with real-world risks.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Incident response and recovery workflows",
                  "Ransomware and cyber incident scenarios",
                  "Hardware failure and accidental data loss",
                  "Ongoing operational resilience"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
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
              What You Gain
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: RotateCcw, text: "Reliable recovery from cyber incidents and data loss" },
              { icon: Clock, text: "Reduced downtime and financial impact" },
              { icon: FileCheck, text: "Improved compliance and audit readiness" },
              { icon: Shield, text: "Stronger position with cyber insurers" },
              { icon: CheckCircle2, text: "Confidence that data can be restored when it matters" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrated With Your IT and Security Strategy
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Data backup and recovery does not operate in isolation. At Core Innovate IT, it integrates with:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Managed IT Services", desc: "System governance", icon: Server },
              { title: "SOC & Endpoint Security", desc: "Incident response", icon: Shield },
              { title: "Compliance Services", desc: "Retention and evidence", icon: FileCheck },
              { title: "Security Monitoring", desc: "Early threat detection", icon: Activity }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all text-center">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            This ensures continuity planning is practical, tested, and aligned.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-cyan-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you want a clear view of your current risk, resilience, and recovery readiness, we can help.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/20"
          >
            Request a Free Security Assessment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
