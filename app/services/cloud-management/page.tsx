import {
  BarChart3,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Lock,
  Settings,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cloud & Digital Transformation | CoreInnovate IT",
  description:
    "Secure, scalable cloud solutions that enable real transformation. Modernise systems, improve efficiency, and adopt future-ready cloud platforms.",
}

export default function CloudManagementPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Cloud className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">
              Cloud & Digital Transformation
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Secure, Scalable Cloud Solutions That Enable Real Transformation
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Cloud adoption is not just a technology shift. It is a strategic
            decision that shapes how your business operates, scales, and
            competes.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            CORE INNOVATE delivers Cloud and Digital Transformation services
            that help organisations modernise systems, improve efficiency, and
            adopt secure, future-ready cloud platforms. Our focus is on
            practical transformation that delivers measurable outcomes, not
            disruption for its own sake.
          </p>
        </div>
      </section>

      {/* Accelerate Transformation Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Accelerate Transformation With Confidence
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We support organisations as they move from legacy environments
                to modern, cloud-enabled platforms built for growth, resilience,
                and innovation.
              </p>
              <p className="text-gray-400 mb-8">
                Transformation is delivered in a controlled, secure, and
                business-aligned way.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Settings,
                  text: "Modernise infrastructure and applications",
                },
                {
                  icon: Zap,
                  text: "Improve operational efficiency and agility",
                },
                {
                  icon: Shield,
                  text: "Strengthen security and data protection",
                },
                { icon: BarChart3, text: "Enable data-driven decision-making" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-gray-300 flex-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud and Transformation Approach
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We design and deliver cloud solutions that balance performance,
              cost, and security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cloud Adoption & Migration Planning", icon: Cloud },
              {
                title: "Secure Hybrid & Multi-Cloud Architectures",
                icon: Lock,
              },
              {
                title: "Performance Optimisation & Cost Control",
                icon: TrendingUp,
              },
              {
                title: "Integration of Digital Transformation Initiatives",
                icon: Settings,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            Security, resilience, and compliance are embedded from the outset.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Core Capabilities
          </h2>

          <div className="space-y-12">
            {/* Business Application Development */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Business Application Development
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We design and develop custom business applications that
                  support real operational needs.
                </p>
                <p className="text-gray-400 mb-6">
                  Applications are built to improve efficiency and support
                  sustainable growth.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Cloud-native and modern application design",
                  "Enhancement and integration of existing systems",
                  "Secure, scalable development aligned to business processes",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data and AI Solutions */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Data and AI Solutions
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Data only creates value when it informs action.
                </p>
                <p className="text-gray-400 mb-6">
                  AI is used to enhance performance, not introduce unnecessary
                  risk.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Gain insight through advanced analytics",
                  "Apply artificial intelligence and machine learning responsibly",
                  "Improve forecasting, reporting, and operational decision-making",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Migration and Modernisation */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Cloud className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Cloud Migration and Modernisation
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Legacy systems restrict agility and increase operational cost.
                </p>
                <p className="text-gray-400 mb-6">
                  The outcome is a modern platform capable of supporting future
                  demands.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Migration from on-premise environments to the cloud",
                  "Modernisation of applications and workloads",
                  "Secure transition with minimal business disruption",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Process Automation */}
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Business Process Automation
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Manual processes slow progress and increase error.
                </p>
                <p className="text-gray-400 mb-6">
                  Automation is applied where it delivers clear and measurable
                  benefit.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Reduce operational overhead",
                  "Improve accuracy and consistency",
                  "Free teams to focus on higher-value activities",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Foundation Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built on Secure Foundations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cloud and digital transformation must strengthen security, not
              weaken it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Managed IT Services",
                desc: "for ongoing operations",
                icon: Settings,
              },
              {
                title: "Cyber Security Services",
                desc: "for monitoring and protection",
                icon: Shield,
              },
              {
                title: "Compliance Services",
                desc: "for governance and assurance",
                icon: Lock,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            This ensures transformation supports resilience, not risk.
          </p>
        </div>
      </section>

      {/* Long-Term Value Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Long-Term Value
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We do not deliver short-term fixes. Our focus is on sustainable,
              future-proof transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Reduced technical debt",
              "Improved scalability and performance",
              "Stronger security and compliance posture",
              "Platforms that evolve with your business",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800"
              >
                <CheckCircle2 className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you are planning cloud adoption, system modernisation, or wider
            digital transformation, we can help define the right approach.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/20"
          >
            Book a Free IT Consultation
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
