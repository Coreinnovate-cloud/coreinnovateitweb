import { Button } from "@/components/shared/button"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Code,
  Database,
  FileText,
  GitBranch,
  Layers,
  Link2,
  Lock,
  Server,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AUTOTASK PSA & Datto RMM Integration | CoreInnovate IT",
  description:
    "Seamless integration between AUTOTASK PSA and Datto RMM for unified IT service management, automated workflows, and enhanced operational efficiency.",
}

export default function AutotaskDattoIntegrationPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Link2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">
              PSA & RMM Integration
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-dm-sans">
            AUTOTASK PSA & Datto RMM Integration
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-4">
            Seamless integration between AUTOTASK PSA and Datto RMM for unified
            IT service management, automated workflows, and enhanced operational
            efficiency.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            Connect your Professional Services Automation platform with powerful
            Remote Monitoring and Management tools to streamline operations,
            improve visibility, and deliver superior IT services.
          </p>
        </div>
      </section>

      {/* Why Integration Matters */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Why Integration Matters
          </h2>

          <p className="text-lg text-gray-300 mb-12 max-w-4xl">
            Running AUTOTASK PSA and Datto RMM as separate systems creates
            inefficiencies, data silos, and missed opportunities. Integration
            brings them together for a unified, automated IT service delivery
            platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Workflow,
                title: "Automated Workflows",
                description:
                  "Eliminate manual data entry and reduce human error with automated ticket creation and updates",
              },
              {
                icon: TrendingUp,
                title: "Enhanced Visibility",
                description:
                  "Get complete visibility across service desk and infrastructure monitoring in one unified view",
              },
              {
                icon: Clock,
                title: "Faster Response Times",
                description:
                  "Automatically create tickets from RMM alerts, reducing mean time to resolution",
              },
              {
                icon: BarChart3,
                title: "Better Reporting",
                description:
                  "Comprehensive reporting that combines PSA and RMM data for actionable insights",
              },
              {
                icon: Users,
                title: "Improved Customer Service",
                description:
                  "Proactive issue resolution and better communication with clients",
              },
              {
                icon: Zap,
                title: "Operational Efficiency",
                description:
                  "Streamline processes and reduce administrative overhead across teams",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-dm-sans">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            Integration Capabilities
          </h2>

          <div className="space-y-12">
            {/* Automated Ticket Management */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Automated Ticket Management
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Automatically create, update, and resolve AUTOTASK tickets
                    based on Datto RMM alerts and monitoring data.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Auto-create tickets from RMM alerts and threshold violations",
                  "Automatically update ticket status based on alert resolution",
                  "Link RMM device information to AUTOTASK configuration items",
                  "Populate tickets with detailed diagnostic data from RMM",
                  "Close tickets automatically when monitoring confirms resolution",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Asset & Configuration Sync */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Asset & Configuration Sync
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Keep asset inventories synchronized between both platforms
                    for accurate, up-to-date configuration management.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Bi-directional synchronization of device and asset data",
                  "Automatic discovery and registration of new devices",
                  "Hardware and software inventory updates",
                  "Warranty and contract information alignment",
                  "Asset lifecycle tracking across both platforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Monitoring & Alerting */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Unified Monitoring & Alerting
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Consolidate monitoring data and alerts for complete
                    infrastructure visibility and faster incident response.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Real-time alert forwarding from Datto RMM to AUTOTASK",
                  "Intelligent alert correlation and deduplication",
                  "Priority-based ticket routing and escalation",
                  "Dashboard integration for unified monitoring views",
                  "Historical data correlation for trend analysis",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Time Tracking & Billing */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Time Tracking & Billing Integration
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Accurately track time spent on RMM tasks and ensure proper
                    billing through AUTOTASK.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Automatic time entry creation from RMM activities",
                  "Link time entries to specific devices and tickets",
                  "Contract and SLA compliance tracking",
                  "Accurate billing for managed services",
                  "Reporting on resource utilization and profitability",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Automation & Workflows */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Advanced Automation & Workflows
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Create sophisticated workflows that span both platforms for
                    maximum efficiency.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Trigger RMM scripts and automations from AUTOTASK tickets",
                  "Automated remediation workflows with ticket updates",
                  "Scheduled maintenance coordination across platforms",
                  "Custom workflow rules and business logic",
                  "Integration with third-party tools and services",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reporting & Analytics */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dm-sans">
                    Comprehensive Reporting & Analytics
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Gain deeper insights with unified reporting that combines
                    PSA and RMM data.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {[
                  "Cross-platform dashboards and reports",
                  "SLA compliance and performance metrics",
                  "Device health and ticket correlation analysis",
                  "Customer-facing reports with combined data",
                  "Executive dashboards with business intelligence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans">
            Our Implementation Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: "Discovery & Planning",
                description:
                  "We analyze your current workflows, business processes, and integration requirements to design the optimal solution.",
              },
              {
                icon: Code,
                title: "Custom Configuration",
                description:
                  "Configure and customize the integration to match your specific business needs and workflows.",
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description:
                  "Implement secure authentication, data encryption, and compliance controls throughout the integration.",
              },
              {
                icon: Server,
                title: "Testing & Validation",
                description:
                  "Thoroughly test all integration points, workflows, and data synchronization before go-live.",
              },
              {
                icon: Layers,
                title: "Deployment & Migration",
                description:
                  "Carefully deploy the integration with minimal disruption to your operations.",
              },
              {
                icon: TrendingUp,
                title: "Optimization & Support",
                description:
                  "Ongoing monitoring, optimization, and support to ensure continued performance and value.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-dm-sans">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Faster Resolution",
                description: "Reduce mean time to resolution by up to 40%",
              },
              {
                icon: TrendingUp,
                title: "Increased Efficiency",
                description: "Eliminate manual data entry and duplication",
              },
              {
                icon: BarChart3,
                title: "Better Visibility",
                description: "Complete view of service delivery and infrastructure",
              },
              {
                icon: Users,
                title: "Improved Service",
                description: "Deliver proactive, high-quality IT services",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-dm-sans">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-dm-sans text-center">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Managed Service Providers (MSPs) using AUTOTASK and Datto RMM",
              "IT service organizations seeking operational efficiency",
              "Teams experiencing data silos between PSA and RMM platforms",
              "Organizations wanting to improve service delivery and response times",
              "Businesses looking to automate IT service management workflows",
              "Companies requiring better visibility across service operations",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dm-sans">
            Ready to Integrate Your PSA & RMM?
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Let us help you unlock the full potential of your AUTOTASK PSA and
            Datto RMM platforms with seamless integration.
          </p>

          <Link href="/contact-us">
            <Button size="lg">Book a Free Consultation</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
