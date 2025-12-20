import { Metadata } from "next";
import Link from "next/link";
import { Eye, Shield, AlertTriangle, Clock, Bell, Target, TrendingUp, Lock, UserX, Database, FileSearch, Activity, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Dark Web Monitoring | CoreInnovate IT",
  description: "Protect your business from credential exposure. 24/7 dark web monitoring to detect compromised credentials and sensitive data before attackers exploit them.",
};

export default function DarkWebMonitoringPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Eye className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">Dark Web Monitoring</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            Are Your Employees' Credentials on the Dark Web?
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Credential exposure on the dark web is not a theoretical risk. It is a real and growing threat that fuels account takeover, ransomware, and other cyberattacks before organisations even know they have been breached.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mb-8">
            Dark web monitoring gives you early visibility into compromised credentials, sensitive data, and leaked business accounts so you can act quickly and decisively to protect your business.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg shadow-red-500/20"
          >
            Request a Dark Web Monitoring Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Dark Web Monitoring Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Dark Web Monitoring Matters
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Stolen credentials are widely traded on underground forums, marketplaces, and leak sites. In 2024 alone, an estimated <span className="text-red-400 font-semibold">3.1 billion exposed passwords</span> were recaptured, a <span className="text-red-400 font-semibold">125% increase</span> on the prior year.
              </p>
              <p className="text-gray-400">
                Seventy per cent of those users reused their credentials across multiple services, amplifying risk dramatically.
              </p>
              <p className="text-gray-400">
                Furthermore, recent research shows there are more than <span className="text-red-400 font-semibold">15 billion stolen credentials</span> circulating on the dark web.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-red-950 to-slate-950 border border-red-900/50">
                <div className="text-4xl font-bold text-red-400 mb-2">3.1B</div>
                <p className="text-sm text-gray-300">Exposed passwords in 2024</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-orange-950 to-slate-950 border border-orange-900/50">
                <div className="text-4xl font-bold text-orange-400 mb-2">125%</div>
                <p className="text-sm text-gray-300">Year-over-year increase</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-red-950 to-slate-950 border border-red-900/50">
                <div className="text-4xl font-bold text-red-400 mb-2">15B+</div>
                <p className="text-sm text-gray-300">Stolen credentials on dark web</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-orange-950 to-slate-950 border border-orange-900/50">
                <div className="text-4xl font-bold text-orange-400 mb-2">70%</div>
                <p className="text-sm text-gray-300">Users reuse credentials</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-red-900/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-500/10 flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">The Primary Attack Vector</h3>
                <p className="text-gray-300 mb-2">
                  These leaked credentials are not simply "data points." They are the primary entry vector threat actors use to breach corporate systems.
                </p>
                <p className="text-gray-400">
                  Industry breach reporting indicates that stolen credentials remain one of the most common initial attack vectors in data breaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Protect */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Protect Your Business
            </h2>
          </div>

          <div className="space-y-12">
            {/* 24/7 Continuous Monitoring */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">24/7 Continuous Monitoring</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Dark web monitoring at Core Innovate IT operates around the clock, scanning criminal marketplaces, forums, and hidden channels for any mention of:
                </p>
                <p className="text-gray-400 mb-6">
                  This continuous surveillance significantly reduces the time between a compromise and detection.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all text-sm"
                >
                  Activate Continuous Monitoring
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Database, text: "Business domains and subdomains" },
                  { icon: UserX, text: "Employee email addresses" },
                  { icon: Lock, text: "Usernames and passwords" },
                  { icon: FileSearch, text: "Proprietary or sensitive business information" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <item.icon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exposed Credentials Alerts */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Bell className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Exposed Credentials Alerts</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Once compromised credentials are detected, you receive clear alerts so you can take swift action, such as:
                </p>
                <p className="text-gray-400 mb-6">
                  The earlier these issues are identified, the lower the chance of account takeover or lateral movement by attackers.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all text-sm"
                >
                  Receive Dark Web Alerts
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  "Forcing password resets",
                  "Revalidating access policies",
                  "Increasing multifactor authentication controls"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analyse, Prioritise, and Act */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Analyse, Prioritise, and Act</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Not all dark web data is equally dangerous. Our analysts combine automated threat intelligence with expert review to:
                </p>
                <p className="text-gray-400 mb-6">
                  This ensures you focus on the threats that matter, with context and prioritisation.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all text-sm"
                >
                  Review Your Exposure Report
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  "Confirm genuine exposures tied to your business",
                  "Eliminate false positives",
                  "Provide clear remediation steps"
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

      {/* Real Risk Landscape */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Real Risk Landscape
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Modern data breach research continues to confirm the central role stolen credentials play in cybercrime:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: UserX,
                title: "Primary Attack Vector",
                desc: "Stolen credentials and brute force attacks account for a significant percentage of breaches.",
                color: "red"
              },
              {
                icon: Lock,
                title: "Weak Passwords",
                desc: "Weak or reused passwords contribute to a large proportion of security incidents.",
                color: "orange"
              },
              {
                icon: Database,
                title: "Mass Exposure",
                desc: "Hundreds of millions of credential records are exposed on criminal sites each year.",
                color: "red"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">
            Dark web monitoring gives you visibility into what attackers already have, not just what your defences think they should be protecting.
          </p>
        </div>
      </section>

      {/* Proactive Prevention */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proactive Prevention and Rapid Response
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Cyberattacks are increasingly inevitable. Dark web monitoring reduces risk by giving you early warning and actionable intelligence, enabling you to:
              </p>
              <p className="text-red-300 font-semibold text-lg mb-8">
                This is not passive visibility. It's active defence.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg shadow-red-500/20"
              >
                Start Proactive Protection
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "Mitigate threats before exploitation" },
                { icon: Clock, text: "Reduce the window of opportunity for attackers" },
                { icon: Activity, text: "Align incident response with real compromise data" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all">
                  <div className="p-3 rounded-lg bg-red-500/10 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-gray-300 flex-1 text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-red-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Eye className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Defence Starts With Visibility
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Dark web monitoring is a critical component of a modern cybersecurity strategy. It integrates with identity protection, access management, and continuous threat detection to make your defences stronger and more responsive.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg shadow-red-500/20"
          >
            Protect Your Business from Credential Exposure
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
