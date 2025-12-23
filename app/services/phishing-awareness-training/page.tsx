import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Eye,
  FileCheck,
  GraduationCap,
  Mail,
  Shield,
  Target,
  TrendingDown,
  Users,
  Video,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Phishing Awareness & Security Training | CoreInnovate IT",
  description:
    "Reduce human risk through practical, ongoing training. Continuous phishing awareness and security training that measurably reduces security risk.",
}

export default function PhishingAwarenessTrainingPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Users className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">
              Phishing Awareness & Security Training
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            Reduce Human Risk Through Practical, Ongoing Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            Phishing remains one of the most effective and persistent
            cyber-attack methods. It targets people rather than systems, using
            deception to steal login credentials, financial information, and
            access to business services.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl">
            CORE INNOVATE delivers continuous phishing awareness and security
            training that educates employees, reinforces secure behaviour, and
            measurably reduces human-led security risk. This service complements
            our Managed IT and Cyber Security offerings by addressing one of the
            most common attack entry points: user behaviour.
          </p>
        </div>
      </section>

      {/* Why Phishing Awareness Is Essential */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Phishing Awareness Is Essential
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Even well-secured environments can be compromised if employees are
              not trained to recognise and respond to threats. Phishing attacks
              evolve constantly, making one-off or annual training ineffective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: TrendingDown,
                text: "Reduce credential compromise and account takeover",
              },
              {
                icon: Eye,
                text: "Improve early reporting of suspicious activity",
              },
              {
                icon: Shield,
                text: "Limit the impact of ransomware and business email compromise",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-orange-950/50 to-slate-950 border border-orange-900/30 text-center">
            <p className="text-xl text-gray-300 font-semibold">
              When combined with managed identity controls and security
              monitoring, trained users become a critical layer of defence.
            </p>
          </div>
        </div>
      </section>

      {/* Continuous Phishing Simulation */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Continuous Phishing Simulation and Awareness Training
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Ongoing, up-to-date cybersecurity training is no longer optional.
              Our phishing simulation and security awareness programme is
              designed to continuously educate and empower employees, helping
              them recognise real-world attack techniques and respond correctly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Training focuses on:
              </h3>
              <div className="space-y-3">
                {[
                  "Identifying phishing and targeted email attacks",
                  "Recognising fake login pages and credential harvesting",
                  "Understanding social engineering techniques",
                  "Knowing how and when to report suspicious activity",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-orange-950/50 to-slate-950 border border-orange-900/30 flex items-center justify-center">
              <div className="text-center">
                <Mail className="w-24 h-24 text-orange-400 mx-auto mb-6" />
                <p className="text-xl text-gray-300 font-semibold">
                  Continuous approach ensures awareness improves over time
                  rather than fading after initial training
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Learning Management Platform */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Integrated Learning Management Platform
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Training is delivered through a centralised learning platform
                that supports consistent delivery, tracking, and accountability
                across the organisation.
              </p>
              <p className="text-blue-300 font-semibold">
                This aligns directly with our Managed IT services, providing
                visibility and control across users, not just systems.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Structured training courses with completion tracking",
                "Central visibility for management and compliance teams",
                "The ability to customise content to match internal policies",
                "Scalability across departments and locations",
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
        </div>
      </section>

      {/* Engaging Training */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Video className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Engaging, Video-Based Training
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                To maximise engagement and retention, training is delivered in
                short, focused modules.
              </p>
              <p className="text-purple-300 font-semibold">
                This ensures training remains practical, relevant, and
                accessible.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Video-based lessons designed to minimise disruption",
                "Interactive quizzes to reinforce learning",
                "Multi-language support",
                "Ability to include organisation-specific training content",
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
        </div>
      </section>

      {/* Cyber Insurance and Compliance */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supporting Cyber Insurance and Compliance Requirements
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Security awareness training is now a standard requirement for many
              cyber insurance policies and regulatory frameworks. Regular,
              documented training helps demonstrate due diligence while reducing
              the likelihood of costly incidents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { name: "GDPR", icon: FileCheck },
              { name: "HIPAA", icon: FileCheck },
              { name: "PCI-DSS", icon: FileCheck },
              { name: "NIST 800-171", icon: FileCheck },
              { name: "CMMC", icon: FileCheck },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-gray-300 font-semibold">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-950/50 to-slate-950 border border-emerald-900/30 text-center">
            <p className="text-lg text-gray-300">
              This strengthens audit readiness and supports insurance
              qualification and renewal, particularly when combined with our
              Cyber Security services, such as identity protection, endpoint
              security, and monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Measurable Risk Reduction */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Risk Reduction
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Organisations that implement structured, continuous security
              awareness training experience:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: TrendingDown, text: "Fewer successful phishing attacks" },
              { icon: AlertTriangle, text: "Reduced impact from human error" },
              { icon: Activity, text: "Improved reporting and response times" },
              { icon: Shield, text: "Stronger compliance and accountability" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center">
            <BarChart3 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <p className="text-lg text-gray-300">
              Training outcomes can be reviewed alongside security metrics from
              our managed and cyber services, providing a clear view of risk
              reduction across people, process, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Broader Security Strategy */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Part of a Broader Security Strategy
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Phishing awareness and training is most effective when integrated
              with wider controls. At CORE INNOVATE, this service works in
              conjunction with:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Managed IT Services",
                desc: "User and device control",
                icon: Target,
              },
              {
                title: "Cyber Security Services",
                desc: "Identity, email, and threat protection",
                icon: Shield,
              },
              {
                title: "Dark Web Monitoring",
                desc: "Incident response",
                icon: Eye,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">
            This delivers a layered, defence-in-depth approach rather than
            relying on training alone.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-orange-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Equip your employees with the knowledge to recognise threats and
            protect your organisation.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg shadow-orange-500/20"
          >
            Speak to a Security Specialist
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
