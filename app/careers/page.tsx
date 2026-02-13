"use client"

import { Button } from "@/components/shared/button"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Lightbulb,
  Mail,
  RefreshCw,
  Shield,
  Star,
  Target,
  Users,
  XCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"

const CareersPage = () => {
  const coreValues = [
    {
      letter: "C",
      title: "Change-Driven",
      description: "We are agile by design.",
      subtitle: "Technology, threats, and regulations evolve constantly. So do we.",
      details: [
        "We challenge outdated ways of working",
        "We adapt quickly and decisively",
        "We are not afraid to improve systems, processes, or ourselves",
      ],
      tagline: "Change is not disruption here. It's how progress happens.",
      icon: RefreshCw,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      letter: "O",
      title: "Ownership",
      description: "Excellence starts with ownership.",
      subtitle: "Every team member is trusted to:",
      details: [
        "Take responsibility for their work",
        "Think beyond their job title",
        "Act in the best interest of the client and the team",
      ],
      tagline: "We don't micromanage, but we do expect accountability. If something needs fixing, we fix it. If something can be improved, we improve it.",
      icon: Target,
      gradient: "from-primary to-blue-500",
    },
    {
      letter: "R",
      title: "Relationships",
      description: "Strong teams outperform clever individuals.",
      subtitle: "We place a high value on:",
      details: [
        "Respectful communication",
        "Collaboration across roles",
        "Supporting each other under pressure",
      ],
      dontTolerate: [
        "Ego-driven behaviour",
        "Poor communication",
        "Undermining colleagues",
      ],
      tagline: "Professional, calm, and constructive relationships are non-negotiable.",
      icon: Users,
      gradient: "from-cyan-500 to-primary",
    },
    {
      letter: "E",
      title: "Excellence",
      description: "Excellence is compulsory. Not optional. Not situational.",
      subtitle: "Whether it's supporting a user, designing a secure environment, writing documentation, or communicating with a client — the standard is the same.",
      details: [
        "Attention to detail",
        "Clear thinking",
        "High-quality outcomes",
        "Pride in your work",
      ],
      tagline: "Good enough is not good enough here.",
      icon: Star,
      gradient: "from-purple-500 to-primary",
    },
  ]

  const thriveTraits = [
    "Enjoy solving real problems",
    "Care deeply about quality and security",
    "Communicate clearly and professionally",
    "Take ownership of outcomes",
    "Respect your teammates",
  ]

  const struggleTraits = [
    "Avoid responsibility",
    "Resist change",
    "Cut corners",
    "Prefer rigid, slow-moving environments",
  ]

  const workplaceFeatures = [
    { icon: Zap, text: "Fast-moving and challenging" },
    { icon: Shield, text: "High trust, high responsibility" },
    { icon: Target, text: "Clear expectations and standards" },
    { icon: Lightbulb, text: "Space to grow, learn, and improve" },
    { icon: XCircle, text: "Zero tolerance for complacency" },
  ]

  const commitments = [
    "Meaningful work with real impact",
    "A team that values trust and respect",
    "Opportunities to grow technically and professionally",
    "A culture where standards are clear and enforced",
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        {/* Background */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-br from-dark via-secondary to-dark">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#16365f15_1px,transparent_1px),linear-gradient(to_bottom,#16365f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-primary">
                <Heart className="w-5 h-5" />
                <span className="font-semibold text-sm">Careers at Core Innovate</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-dm-sans text-white leading-[1.1] px-4"
            >
              <span className="block mb-3 sm:mb-4">Build Work That</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Matters
              </span>
              <span className="block mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80">
                With People Who Care
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto space-y-6 px-4"
            >
              <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed">
                At Core Innovate, we don&apos;t hire to fill seats. We hire people who want to build, improve, and take ownership.
              </p>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                We operate in fast-moving IT, cybersecurity, and compliance environments. That means change is constant and we embrace it.
              </p>
              <p className="text-primary font-semibold text-lg sm:text-xl">
                If you value clarity, accountability, and doing things properly, you&apos;ll fit in well here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <Link href="#open-roles">
                <Button size="lg" className="shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all">
                  View Open Roles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* What CORE Means Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-dm-sans">
              What <span className="text-primary">CORE</span> Means to Us
            </h2>
            <p className="text-lg text-tertiary max-w-2xl mx-auto">
              CORE is not just our name. It defines how we work, how we think, and how we treat each other.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
                  <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-3xl font-bold text-white">{value.letter}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-secondary font-dm-sans">{value.title}</h3>
                        <p className="text-tertiary">{value.description}</p>
                      </div>
                    </div>

                    {value.subtitle && (
                      <p className="text-grey mb-4">{value.subtitle}</p>
                    )}

                    <div className="space-y-3 mb-6">
                      {value.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-grey">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {value.dontTolerate && (
                      <div className="mb-6 bg-red-50 rounded-xl p-4 border border-red-100">
                        <p className="text-sm font-semibold text-red-800 mb-3">We don&apos;t tolerate:</p>
                        <div className="space-y-2">
                          {value.dontTolerate.map((item: string, i: number) => (
                            <div key={i} className="flex items-center gap-2">
                              <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                              <span className="text-sm text-red-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-primary font-semibold italic border-l-4 border-primary pl-4">
                      {value.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What It's Like Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-dark via-secondary to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-dm-sans">
              What It&apos;s Like to Work Here
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {workplaceFeatures.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-white/90 font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/80 text-lg"
          >
            You&apos;ll be supported, but you&apos;ll also be stretched.
          </motion.p>
        </div>
      </section>

      {/* Who Thrives / Who Struggles Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-dm-sans">
              Who Thrives at Core Innovate
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Thrives */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-green-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary font-dm-sans">You&apos;ll do well here if you:</h3>
              </div>
              <div className="space-y-4">
                {thriveTraits.map((trait, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-grey">{trait}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Struggles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-red-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary font-dm-sans">You may struggle here if you:</h3>
              </div>
              <div className="space-y-4">
                {struggleTraits.map((trait, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-grey">{trait}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-tertiary italic">That&apos;s okay. We&apos;re not for everyone.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-dm-sans">
                Our Commitment to You
              </h2>
              <p className="text-lg text-tertiary mb-8">In return, we offer:</p>
              <div className="space-y-4">
                {commitments.map((commitment, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-grey font-medium">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-3xl p-8 sm:p-12 border border-primary/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 font-dm-sans">
                  Join Us
                </h3>
                <p className="text-grey mb-8 leading-relaxed">
                  If you&apos;re looking for a place where standards are high, teamwork matters, and security and excellence are taken seriously, then Core Innovate may be the right place for you.
                </p>
                <Link href="/contact-us">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-primary/30 transition-all">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-dark via-secondary to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-dm-sans">
              Open Roles
            </h2>
            <p className="text-white/80 text-lg mb-12">
              We&apos;re always looking for talented individuals to join our team.
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-dm-sans">
                No Open Positions Right Now
              </h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                We don&apos;t have any open roles at the moment, but we&apos;re always interested in hearing from exceptional people. Send us your CV and tell us why you&apos;d be a great fit.
              </p>
              <Link href="/contact-us">
                <Button size="lg" variant="white" className="shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Your CV
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            Core Innovate is an equal opportunity employer. We hire based on capability, mindset, and values.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
