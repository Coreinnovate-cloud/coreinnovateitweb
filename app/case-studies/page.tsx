import {
  ArrowRight,
  Building2,
  Factory,
  Heart,
  Rocket,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Case Studies | CoreInnovate IT",
  description:
    "See how we've helped organisations across healthcare, professional services, charities, manufacturing, and growing businesses secure their IT infrastructure.",
}

// TODO: This page is hidden for now - add case studies content when ready
// To hide: Remove from navbar and sitemap

const caseStudies = [
  // Placeholder case studies - replace with real content when ready
  // {
  //   id: "healthcare-nhs-trust",
  //   title: "NHS Trust Security Transformation",
  //   industry: "Healthcare",
  //   icon: Heart,
  //   challenge: "Aging infrastructure with multiple security gaps...",
  //   solution: "Comprehensive security overhaul with 24/7 monitoring...",
  //   results: ["95% reduction in security incidents", "Full compliance achieved"],
  //   color: "emerald",
  // },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">Customer Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-8">
            See how we&apos;ve helped organisations across industries secure their IT infrastructure
            and achieve their business goals.
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We work with organisations across various sectors, each with unique IT and security challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Healthcare & Care Providers",
                description: "Secure IT for regulated healthcare environments.",
                href: "/industries/healthcare",
                color: "emerald",
              },
              {
                icon: Users,
                title: "Professional Services",
                description: "Accountability and control for client-focused firms.",
                href: "/industries/professional-services",
                color: "blue",
              },
              {
                icon: Heart,
                title: "Charities & Non-Profits",
                description: "Cost-effective security for mission-driven organisations.",
                href: "/industries/charities-non-profits",
                color: "purple",
              },
              {
                icon: Factory,
                title: "Manufacturing",
                description: "Reliable IT for production-critical environments.",
                href: "/industries/manufacturing",
                color: "orange",
              },
              {
                icon: Rocket,
                title: "Growing Businesses & Startups",
                description: "Scalable IT that grows with your organisation.",
                href: "/industries/growing-businesses",
                color: "cyan",
              },
            ].map((industry, index) => (
              <Link
                key={index}
                href={industry.href}
                className={`group p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-${industry.color}-500/50 transition-all`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-${industry.color}-500/10 flex items-center justify-center mb-4`}
                >
                  <industry.icon className={`w-6 h-6 text-${industry.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-950/50 to-slate-950 border border-indigo-900/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Case Studies Coming Soon
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We&apos;re currently documenting success stories from our clients. Check back soon to see
              real-world examples of how we&apos;ve helped organisations like yours.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get an estimate or speak with our team about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cost-estimator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
            >
              Get an IT & Security Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-indigo-500/50 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
