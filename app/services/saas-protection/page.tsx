import { Metadata } from "next";
import Link from "next/link";
import { Cloud, Shield, HardDrive, RotateCcw, CheckCircle2, AlertTriangle, Eye, Lock, TrendingUp, FileCheck, Activity, Database, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Protection | CoreInnovate IT",
  description: "Your cloud data is your responsibility. We help you protect it. Secure backup and recovery for Microsoft 365, Google Workspace, and other SaaS platforms.",
};

export default function SaaSProtectionPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cyan-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Cloud className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">SaaS Protection</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Your Cloud Data Is Your Responsibility. We Help You Protect It.
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Cloud platforms such as Microsoft 365 and Google Workspace provide powerful collaboration tools, but they do not guarantee protection against data loss, deletion, ransomware, or malicious insider activity.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            Core Innovate IT delivers SaaS Protection to ensure your cloud data is securely backed up, recoverable, and protected against operational and security incidents. This allows your business to maintain continuity, meet compliance obligations, and recover quickly when issues arise.
          </p>
        </div>
      </section>

      {/* Why SaaS Protection Is Essential */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why SaaS Protection Is Essential
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Many organisations assume cloud data is fully protected by default. In reality, most SaaS providers operate on a shared responsibility model, where data protection and recovery remain the customer's responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: AlertTriangle, text: "Accidental or malicious data deletion", color: "red" },
              { icon: Shield, text: "Ransomware and account compromise", color: "orange" },
              { icon: Users, text: "Insider threats", color: "amber" },
              { icon: FileCheck, text: "Compliance and retention failures", color: "red" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-950/50 to-slate-950 border border-cyan-900/30 text-center">
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 font-semibold">
              SaaS Protection closes this gap.
            </p>
          </div>
        </div>
      </section>

      {/* What Our SaaS Protection Covers */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our SaaS Protection Covers
            </h2>
          </div>

          <div className="space-y-12">
            {/* Cloud Backup and Recovery */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <HardDrive className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cloud Backup and Recovery</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We provide secure backup and recovery for critical SaaS platforms, including:
                </p>
                <p className="text-cyan-300 font-semibold">
                  This ensures business-critical data such as emails, files, calendars, and collaboration content can be restored quickly and reliably.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <Cloud className="w-8 h-8 text-blue-400" />
                    <span className="text-2xl font-bold text-white">Microsoft 365</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <Cloud className="w-8 h-8 text-red-400" />
                    <span className="text-2xl font-bold text-white">Google Workspace</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Protection Against Data Loss */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Protection Against Data Loss and Malware</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Backups provide a reliable recovery path if data is:
                </p>
                <p className="text-blue-300 font-semibold">
                  Recovery does not rely on paying ransoms or accepting prolonged downtime.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Encrypted or deleted during a ransomware attack",
                  "Lost through user error",
                  "Compromised through malicious activity"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Visibility and Control */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Complete Visibility and Control</h3>
                </div>
                <p className="text-purple-300 font-semibold">
                  Cloud growth does not increase risk.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Centralised management of cloud backups",
                  "Granular restore options",
                  "Clear oversight of protected data",
                  "Scalable coverage as your organisation grows"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Cybersecurity Strategy */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Part of a Complete Cybersecurity Strategy
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              True security requires a holistic approach. SaaS Protection integrates directly with our wider Managed Cybersecurity Services, delivering consistent protection across people, systems, and data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileCheck, text: "Policies, systems, and users are aligned" },
              { icon: Database, text: "Cloud data protection supports business continuity" },
              { icon: Shield, text: "Recovery plans reflect real operational risk" }
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

      {/* AI-Powered Threat Detection */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10">
                  <Activity className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI-Powered Threat Detection and Prevention</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our cybersecurity services include 24/7 monitoring powered by artificial intelligence to detect suspicious behaviour across your environment.
              </p>
              <p className="text-indigo-300 font-semibold">
                This strengthens prevention while supporting rapid response.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Continuous monitoring informed by global threat intelligence",
                "Early detection of abnormal activity",
                "Faster identification of risks affecting cloud services"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Continuity and Recovery */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <RotateCcw className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Business Continuity and Recovery</h3>
              </div>
              <p className="text-gray-300 mb-4">
                SaaS Protection plays a critical role in business continuity planning.
              </p>
              <p className="text-emerald-300 font-semibold">
                This aligns with our backup, disaster recovery, and business continuity services.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Rapid data restoration when incidents occur",
                "Reduced operational disruption",
                "Stronger resilience against ransomware and outages"
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

      {/* Education, Policy, and Compliance */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <FileCheck className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education, Policy, and Compliance Support</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Protecting cloud data also requires clear governance.
              </p>
              <p className="text-orange-300 font-semibold">
                SaaS Protection supports accountability as well as recovery.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Support for security and data handling policies",
                "Alignment with regulatory and compliance requirements",
                "Evidence to support audits and insurance reviews"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HardDrive, text: "Reliable backup and recovery for cloud data" },
              { icon: Shield, text: "Reduced risk from ransomware and user error" },
              { icon: FileCheck, text: "Improved compliance and audit readiness" },
              { icon: CheckCircle2, text: "Confidence that cloud data can be restored when needed" }
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-cyan-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you want to understand your current exposure and cloud data protection gaps, we can start with an assessment.
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
