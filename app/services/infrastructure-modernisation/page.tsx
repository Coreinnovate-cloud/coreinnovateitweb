import { Metadata } from "next";
import Link from "next/link";
import { Server, Cloud, Network, HardDrive, Shield, Zap, CheckCircle2, TrendingUp, Lock, Database, Layers, Workflow, Target, Settings, Activity, FileCheck, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Infrastructure & Modernisation | CoreInnovate IT",
  description: "Modern infrastructure designed for scale, security, and performance. Design, upgrade, and operate resilient edge-to-cloud environments.",
};

export default function InfrastructureModernisationPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Server className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Infrastructure & Modernisation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Modern Infrastructure Designed for Scale, Security, and Performance
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Legacy infrastructure limits growth, increases risk, and drives unnecessary cost. Modern businesses need flexible, secure, and scalable platforms that support cloud adoption, hybrid environments, and evolving operational demands.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            Core Innovate IT delivers Infrastructure and Modernisation services that help organisations design, upgrade, and operate resilient edge-to-cloud environments. We focus on practical modernisation that improves performance, strengthens security, and supports long-term business objectives.
          </p>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Infrastructure & Platform Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              We support organisations at every stage of growth, from scaling businesses to complex enterprise environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Our services address:</h3>
              <div className="space-y-3">
                {[
                  "Legacy infrastructure constraints",
                  "Cloud and hybrid integration challenges",
                  "Performance and availability risks",
                  "Security and compliance requirements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-950/50 to-slate-950 border border-blue-900/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 flex-shrink-0">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Focus</h3>
                  <p className="text-gray-300">
                    We design and deliver infrastructure solutions that are reliable, secure, and built to evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Expertise */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Infrastructure Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Core Innovate IT provides end-to-end infrastructure services covering design, implementation, and ongoing support.
            </p>
          </div>

          <div className="space-y-12">
            {/* Data Centre and Platform Modernisation */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Server className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Data Centre and Platform Modernisation</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We modernise on-premise and hosted environments to improve performance, resilience, and manageability.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Server and platform refresh",
                  "Consolidation and optimisation",
                  "Secure integration with cloud services"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud and Hybrid IT Architecture */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Cloud className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cloud and Hybrid IT Architecture</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Not every workload belongs in the cloud. We design hybrid architectures that balance performance, cost, and control.
                </p>
                <p className="text-gray-400">
                  This ensures flexibility without increasing complexity.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Integration of on-premise and cloud platforms",
                  "Secure workload placement",
                  "Scalable hybrid environments"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Virtualisation and Platform Optimisation */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Virtualisation and Platform Optimisation</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Virtualisation improves efficiency and resilience when implemented correctly.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Server and desktop virtualisation",
                  "Improved resource utilisation",
                  "Reduced hardware dependency",
                  "High availability design"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Storage Solutions */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Database className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Data Storage Solutions</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Data growth requires structured storage design.
                </p>
                <p className="text-gray-400">
                  Storage supports both performance and recovery objectives.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "High-performance storage architecture",
                  "Secure and resilient data platforms",
                  "Scalable capacity aligned to demand"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backup, Disaster Recovery, and Resilience */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <HardDrive className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backup, Disaster Recovery, and Resilience</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Infrastructure modernisation must support continuity.
                </p>
                <p className="text-gray-400">
                  This links directly with our Backup, Disaster Recovery, and Business Continuity services.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Integrated backup and recovery design",
                  "Disaster recovery planning",
                  "Alignment with business continuity objectives"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Networking and Connectivity */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <Network className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Networking and Connectivity</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Infrastructure is only as strong as the network that connects it.
                </p>
                <p className="text-gray-400">
                  Connectivity is designed with performance and security in mind.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Secure LAN and WAN design",
                  "Wireless infrastructure",
                  "Network segmentation and resilience"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Compliance */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Security and Compliance
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Infrastructure decisions directly affect security posture. Our designs:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: FileCheck, text: "Align with regulatory and compliance requirements" },
              { icon: Lock, text: "Support secure access and identity controls" },
              { icon: Shield, text: "Integrate with SOC, endpoint, and monitoring services" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            This ensures infrastructure does not become a security blind spot.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Approach to Infrastructure Modernisation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Comprehensive, Tailored Solutions */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Comprehensive, Tailored Solutions</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We design infrastructure based on business outcomes, not vendor checklists.
              </p>
              <div className="space-y-2">
                {[
                  "Requirements driven by operational needs",
                  "Solutions tailored to risk, scale, and growth",
                  "Clear scope and accountability"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Services */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Professional Services and Ongoing Support</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our services extend beyond deployment.
              </p>
              <div className="space-y-2">
                {[
                  "Infrastructure consulting and design",
                  "Implementation and migration",
                  "Ongoing support and optimisation",
                  "Clear service levels and response expectations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured, Reliable Delivery */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Workflow className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Structured, Reliable Delivery</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Modernisation projects require discipline.
              </p>
              <div className="space-y-2">
                {[
                  "Structured delivery frameworks",
                  "Controlled change and risk management",
                  "Clear documentation and handover"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                This reduces disruption and ensures predictable outcomes.
              </p>
            </div>

            {/* Technology Partnerships */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Strong Technology Partnerships</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We work with leading infrastructure and cloud technology providers to deliver secure and supported solutions.
              </p>
              <div className="space-y-2">
                {[
                  "Proven platforms",
                  "Long-term vendor support",
                  "Scalable and future-ready technologies"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Technology choices are driven by suitability, not brand preference.
              </p>
            </div>
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
              Infrastructure and modernisation services integrate directly with:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Managed IT Services", desc: "Ongoing operations", icon: Settings },
              { title: "Cyber Security Services", desc: "Monitoring and protection", icon: Shield },
              { title: "Compliance Services", desc: "Governance and assurance", icon: FileCheck }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all text-center">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            This ensures infrastructure supports the wider IT and security strategy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            If you are planning to modernise infrastructure, migrate workloads, or improve resilience, we can help assess the right approach.
          </p>
          <p className="text-gray-400 mb-8">
            Receive tailored advice to strengthen and modernise your IT infrastructure.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/20"
          >
            Take the First Step With a Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
