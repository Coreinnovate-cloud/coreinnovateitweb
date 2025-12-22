import { Metadata } from "next";
import { Shield, AlertTriangle, CheckCircle, Lock, Users, FileCheck, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/shared/button";

export const metadata: Metadata = {
  title: "Managed Cybersecurity Services | CoreInnovate IT",
  description: "AI-Powered Protection Against Internal and External Threats. 24/7 monitoring, incident response, and comprehensive security management.",
};

export default function ManagedSecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Shield className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">Managed Cybersecurity Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-dm-sans">
            AI-Powered Protection Against Internal and External Threats
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Cybersecurity is no longer just an IT concern. It is a business risk that affects operations, compliance, reputation, and growth.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mt-4 leading-relaxed">
            Core Innovate IT delivers Managed Cybersecurity Services that combine AI-driven threat detection, continuous monitoring, and expert response. We protect your people, systems, and data so you can focus on running and growing your business with confidence.
          </p>
        </div>
      </section>

      {/* Why Managed Cybersecurity Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Why Managed Cybersecurity Matters
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            Modern cyber threats are persistent, targeted, and increasingly automated. Without continuous protection, organisations are exposed to ransomware, credential theft, data loss, and operational disruption.
          </p>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            Our managed cybersecurity services help you:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              "Reduce the likelihood and impact of cyber incidents",
              "Maintain business continuity during unexpected events",
              "Strengthen compliance with data protection regulations",
              "Gain confidence that security is actively managed"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Cybersecurity Approach */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            A Holistic Cybersecurity Approach
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            True security requires coverage across people, processes, and technology. Our managed cybersecurity services provide layered protection across your entire environment.
          </p>

          <p className="text-lg text-gray-300 mb-6 max-w-4xl">This includes:</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Users, text: "Users and identities" },
              { icon: Lock, text: "Endpoints and servers" },
              { icon: Shield, text: "Email and cloud services" },
              { icon: FileCheck, text: "Data, policies, and compliance controls" }
            ].map((item, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-primary font-semibold">Security is integrated, not fragmented.</p>
        </div>
      </section>

      {/* What Our Services Include */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            What Our Managed Cybersecurity Services Include
          </h2>

          <div className="space-y-12">
            {/* AI-Powered Threat Detection */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    AI-Powered Threat Detection and Prevention
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We deploy 24/7 monitoring powered by artificial intelligence to detect suspicious behaviour and emerging threats.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Continuous monitoring across endpoints, users, and cloud services",
                  "Behavioural and anomaly-based detection",
                  "Intelligence informed by global threat data",
                  "Rapid identification of high-risk activity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Incident Response */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Incident Response and Business Continuity
                  </h3>
                  <p className="text-gray-300 mb-4">
                    When incidents occur, speed and coordination are critical.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Expert-led incident response support",
                  "Rapid containment and remediation",
                  "Integrated data backup and recovery",
                  "Reduced impact from ransomware and system outages"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                This ensures your business can recover quickly and continue operating.
              </p>
            </div>

            {/* Security Awareness */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Security Awareness and Policy Development
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Technology alone is not enough.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Employee security awareness training",
                  "Phishing and social engineering education",
                  "Tailored security policies aligned to your business",
                  "Reinforcement of secure behaviour"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                This reduces human-led risk and supports compliance.
              </p>
            </div>

            {/* Compliance */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Compliance and Audit Support
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Security and compliance go hand in hand.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Support for regulatory and contractual requirements",
                  "Evidence and documentation to demonstrate due diligence",
                  "Assistance with audits and third-party security questionnaires",
                  "Scalable compliance support as requirements grow"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Managed Cybersecurity Plans */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            Our Managed Cybersecurity Plans
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* CyberCore Protect */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-primary/50 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                  CyberCore Protect
                </h3>
                <p className="text-gray-300">
                  Designed for organisations that need strong, continuous cyber protection without unnecessary complexity.
                </p>
              </div>

              <p className="text-sm font-semibold text-primary mb-4">INCLUDES:</p>

              <ul className="space-y-3">
                {[
                  "24/7 AI-powered Security Operations Centre monitoring",
                  "Incident detection and response support",
                  "Endpoint anti-malware and threat protection",
                  "Managed email and cloud security",
                  "Data backup and recovery for all devices",
                  "Security issue troubleshooting and remediation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CyberCore Assure */}
            <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border-2 border-primary rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST COMPREHENSIVE
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                  CyberCore Assure
                </h3>
                <p className="text-gray-300">
                  Our most comprehensive cybersecurity and compliance solution, designed for organisations with higher risk, regulatory, or assurance requirements.
                </p>
              </div>

              <p className="text-sm font-semibold text-primary mb-4">
                INCLUDES EVERYTHING IN CYBERCORE PROTECT, PLUS:
              </p>

              <ul className="space-y-3">
                {[
                  "Employee security awareness and phishing training",
                  "Dark web monitoring for compromised credentials",
                  "Annual penetration testing and vulnerability validation",
                  "Access to policy frameworks and security templates",
                  "Support with compliance audits and questionnaires"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built to Scale */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dm-sans">
                Built to Scale With Your Business
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our managed cybersecurity services scale easily as your business grows.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl ml-16">
            {[
              "Supports increasing users, devices, and cloud services",
              "Maintains consistent security posture",
              "Adapts to new threats and regulatory demands",
              "Security remains strong without operational overhead"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
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
            If you want a clear understanding of your current security posture and risks, we can start with an assessment.
          </p>

          <Link href="/services/book-assessment">
            <Button size="lg" className="mb-12">
              Request a Free Security Assessment
            </Button>
          </Link>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold text-white mb-6 font-dm-sans">
              What the Assessment Includes
            </h3>

            <ul className="space-y-3">
              {[
                "Identification of key security weaknesses",
                "High-level risk overview",
                "Practical recommendations for improvement",
                "No obligation or commitment"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
