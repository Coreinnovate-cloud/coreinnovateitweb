import { Metadata } from "next";
import { Shield, Eye, Zap, Brain, Lock, TrendingUp, CheckCircle, AlertTriangle, FileCheck, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/shared/button";

export const metadata: Metadata = {
  title: "Security Operations Centre (SOC) & Endpoint Security | CoreInnovate IT",
  description: "AI-Powered, 24/7 Threat Detection and Response. Continuous monitoring, intelligent endpoint protection, and expert-led incident response.",
};

export default function SOCEndpointSecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Eye className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">Security Operations Centre (SOC) & Endpoint Security</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-dm-sans">
            AI-Powered, 24/7 Threat Detection and Response
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-4">
            Cyber threats now move faster than manual monitoring alone can handle. Traditional antivirus and rule-based security tools are no longer enough to detect modern attacks that use stealth, automation, and social engineering.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            Core Innovate IT delivers an AI-powered Security Operations Centre (SOC) combined with advanced endpoint and XDR protection. Artificial intelligence continuously analyses behaviour across users, devices, and systems, while our security specialists validate, investigate, and respond in real time.
          </p>

          <p className="text-lg text-primary font-semibold mt-4 max-w-3xl">
            This fusion of AI decision-making and human expertise enables faster detection, deeper visibility, and more effective response.
          </p>
        </div>
      </section>

      {/* Why AI-Powered SOC Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Why AI-Powered SOC and Endpoint Security Matters
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            Attackers increasingly rely on techniques that evade signature-based tools. AI changes the balance by identifying behaviour, intent, and anomalies that traditional security misses.
          </p>

          <p className="text-lg text-gray-300 mb-6 max-w-4xl">
            An AI-powered SOC enables:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mb-8">
            {[
              "Detection of unknown and zero-day threats",
              "Faster identification of lateral movement and account misuse",
              "Reduced dwell time for attackers",
              "Continuous adaptation as threats evolve"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-primary font-semibold">
            Security becomes predictive and adaptive, not reactive.
          </p>
        </div>
      </section>

      {/* How We Deliver AI-Driven SOC */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            How Core Innovate IT Delivers AI-Driven SOC Services
          </h2>

          <div className="space-y-12">
            {/* Continuous AI Surveillance */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Continuous AI Surveillance, 24/7
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Artificial intelligence continuously monitors activity across your environment.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Analyses endpoint, network, and user behaviour in real time",
                  "Identifies deviations from normal activity patterns",
                  "Flags high-risk events for immediate investigation",
                  "Operates continuously, without fatigue or blind spots"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                This ensures threats are detected at the earliest possible stage.
              </p>
            </div>

            {/* AI-Powered Endpoint and XDR */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    AI-Powered Endpoint and XDR Protection
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Our endpoint security uses machine learning and behavioural analytics to detect both known and unknown threats.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Behaviour-based malware and ransomware detection",
                  "Correlation across endpoints, identities, and cloud services",
                  "Automatic containment of suspicious activity",
                  "Reduced reliance on static signatures"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                This provides deeper protection than traditional endpoint tools.
              </p>
            </div>

            {/* Human-Led Response */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Human-Led Response, AI-Enhanced Decisions
                  </h3>
                  <p className="text-gray-300 mb-4">
                    AI identifies and prioritises threats. Our security specialists take action.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Analysts validate AI findings to eliminate false positives",
                  "Confirmed threats are investigated and contained",
                  "Clear escalation paths and response actions",
                  "Continuous tuning to improve detection accuracy"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                This combination delivers speed without sacrificing judgement.
              </p>
            </div>

            {/* Intelligent Incident Management */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Intelligent Incident Management and Reporting
                  </h3>
                  <p className="text-gray-300 mb-4">
                    AI also strengthens reporting and compliance.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Automated correlation of events and incidents",
                  "Detailed forensic timelines for investigations",
                  "Clear reporting for audits, insurers, and leadership",
                  "Evidence aligned with regulatory expectations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                Security insights are actionable, not overwhelming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scalable AI-Driven Security */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dm-sans">
                Scalable, AI-Driven Security
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                As your business grows, AI scales instantly.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl ml-16">
            {[
              "Supports growth in users, devices, and cloud services",
              "Maintains consistent protection across environments",
              "Adapts automatically to new patterns and risks",
              "Security remains strong as complexity increases"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated AI Security */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Integrated AI Security Across Your Environment
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            Our AI-powered SOC integrates directly with:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              "Managed IT services for device and user governance",
              "Email and cloud security to correlate attack signals",
              "Identity protection to detect misuse and privilege abuse",
              "Compliance frameworks to support audit readiness"
            ].map((item, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Activity className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-primary font-semibold mt-8">
            This delivers a single, intelligent security layer rather than disconnected tools.
          </p>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            What You Gain From an AI-Powered SOC
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, text: "Faster threat detection and response" },
              { icon: Shield, text: "Reduced impact of ransomware and breaches" },
              { icon: Eye, text: "Continuous visibility and assurance" },
              { icon: FileCheck, text: "Improved compliance and reporting" },
              { icon: Brain, text: "Security that evolves as threats change" }
            ].map((item, index) => (
              <div key={index} className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-300 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Get Started
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            If you want security that thinks, learns, and responds continuously, Core Innovate IT can help.
          </p>

          <Link href="/contact-us">
            <Button size="lg" className="mb-16">
              Speak to a Security Specialist
            </Button>
          </Link>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-dm-sans">
              Optional Starting Point
            </h3>

            <p className="text-gray-300 mb-6">
              If you want visibility before committing to full coverage, we offer a controlled assessment.
            </p>

            <Link href="/services/book-assessment">
              <Button size="lg" variant="outline">
                Request a Free Vulnerability Scan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
