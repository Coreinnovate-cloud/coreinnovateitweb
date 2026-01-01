import { Button } from "@/components/shared/button"
import {
  CheckCircle,
  Cloud,
  Code,
  Globe,
  Lock,
  Search,
  Server,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Web & Software Development | CoreInnovate IT",
  description:
    "Secure, Scalable and Search-Optimised Digital Solutions. Web and software development services that are secure by design, scalable by default, and search-engine optimised from the ground up.",
}

export default function WebSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">
              Web & Software Development
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-dm-sans">
            Secure, Scalable and Search-Optimised Digital Solutions
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-4">
            A strong digital presence must do more than look good. It must
            perform, scale, remain secure, and be discoverable.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            Core Innovate delivers web and software development services that
            are secure by design, scalable by default, and search-engine
            optimised from the ground up. We build and modernise digital
            platforms that integrate seamlessly with your IT environment, cloud
            strategy, and cybersecurity controls, while supporting long-term
            visibility and growth online.
          </p>
        </div>
      </section>

      {/* Development Built for Performance */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Development Built for Performance, Security and Search Visibility
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            Many websites and applications fail because performance, security,
            and SEO are treated as afterthoughts.
          </p>

          <p className="text-lg text-gray-300 mb-6 max-w-4xl">
            Our approach ensures:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mb-8">
            {[
              "Secure development practices from day one",
              "High-performance architecture optimised for speed and reliability",
              "Search-engine-friendly structure, code, and content foundations",
              "Alignment with data protection, accessibility, and compliance requirements",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-primary font-semibold">
            Every solution is designed to rank well, load fast, and remain easy
            to manage.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            Our Web & Software Development Services
          </h2>

          <div className="space-y-12">
            {/* Search-Optimised Web Development */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Search-Optimised Web Development
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We design and develop modern, responsive websites and web
                    applications that are built to perform in search engines as
                    well as with users.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "SEO-friendly site architecture and clean code",
                  "Fast load times and performance optimisation",
                  "Mobile-first and accessible design",
                  "Secure integration with business systems and cloud platforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                Web platforms are built to be discoverable, resilient, and
                scalable.
              </p>
            </div>

            {/* Custom Business Software Development */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Custom Business Software Development
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We develop bespoke software solutions that support
                    operational efficiency and digital growth.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Line-of-business applications",
                  "Internal systems and client portals",
                  "Workflow and process automation",
                  "API development and system integration",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                Applications are designed to scale securely while supporting
                future optimisation and analytics.
              </p>
            </div>

            {/* Application Modernisation */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Application Modernisation
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Legacy applications often limit performance, security, and
                    online visibility.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 ml-16">We help organisations:</p>

              <ul className="space-y-3 ml-16">
                {[
                  "Modernise existing websites and applications",
                  "Improve speed, usability, and technical SEO foundations",
                  "Migrate platforms to secure, cloud-ready environments",
                  "Reduce technical debt that impacts performance and rankings",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                Modernisation is delivered with minimal disruption and long-term
                benefit.
              </p>
            </div>

            {/* Secure and SEO-Aware Development */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Secure and SEO-Aware Development Practices
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Security and SEO are built into the development lifecycle.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Secure coding standards",
                  "Structured data and search-engine-friendly markup",
                  "Identity and access controls",
                  "Data protection, encryption, and validation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 mt-4 ml-16">
                This reduces vulnerability exposure while supporting sustainable
                search performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Integrated with Your IT, Cloud and Security Strategy
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            Web and software development does not exist in isolation.
          </p>

          <p className="text-lg text-gray-300 mb-6 max-w-4xl">
            Our services integrate directly with:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mb-8">
            {[
              "Managed IT Services for ongoing support and performance",
              "Cloud & Digital Transformation initiatives",
              "Cybersecurity Services for monitoring and protection",
              "Compliance Services for governance and assurance",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Server className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-primary font-semibold">
            This ensures your digital platforms remain secure, supported, and
            visible.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Organisations building or redesigning websites with SEO in mind",
              "Businesses modernising legacy platforms",
              "Companies requiring secure, compliant, high-performing applications",
              "Teams seeking long-term scalability and search visibility",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Value */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Designed for Long-Term Digital Value
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            We do not deliver disposable websites or short-term fixes.
          </p>

          <p className="text-lg text-gray-300 mb-6 max-w-4xl">
            You benefit from:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            {[
              { icon: Search, text: "Search-engine-optimised foundations" },
              { icon: TrendingUp, text: "Scalable, maintainable architecture" },
              { icon: Lock, text: "Improved performance and security posture" },
              {
                icon: Zap,
                text: "Digital platforms that evolve with your business",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all text-center"
              >
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
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Get Started
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            If you are planning a new website, custom software, or application
            modernisation with performance and SEO in mind, we can help define
            the right approach.
          </p>

          <Link href="/contact-us">
            <Button size="lg">Book a Free IT Consultation</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
