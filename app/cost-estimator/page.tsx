"use client"

import { Button } from "@/components/shared/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  ChevronRight,
  Cloud,
  Clock,
  Database,
  HardDrive,
  Loader2,
  Lock,
  Mail,
  Monitor,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { useCallback, useMemo, useState } from "react"
import { toast } from "sonner"

// Declare Klaviyo global type
declare global {
  interface Window {
    klaviyo?: {
      identify: (properties: Record<string, unknown>) => void
      track: (event: string, properties?: Record<string, unknown>) => void
      push: (args: unknown[]) => void
    }
  }
}

// Types
interface Question {
  id: string
  question: string
  icon: LucideIcon
  options: {
    label: string
    value: string
    riskPoints: number
  }[]
}

interface FormData {
  userCount: string
  deviceCount: string
  orgType: string
  dataType: string
  cloudPlatform: string
  mfaStatus: string
  deviceManagement: string
  backupStatus: string
  complianceStatus: string
  supportLevel: string
  email: string
  consent: boolean
}

interface RiskFactor {
  label: string
  severity: "high" | "medium" | "low"
}

// Questions data
const questions: Question[] = [
  {
    id: "userCount",
    question: "How many users do you have?",
    icon: Users,
    options: [
      { label: "1–10", value: "1-10", riskPoints: 0 },
      { label: "11–25", value: "11-25", riskPoints: 0 },
      { label: "26–50", value: "26-50", riskPoints: 0 },
      { label: "51–100", value: "51-100", riskPoints: 5 },
      { label: "100+", value: "100+", riskPoints: 10 },
    ],
  },
  {
    id: "deviceCount",
    question: "How many devices are in use?",
    icon: Monitor,
    options: [
      { label: "One per user", value: "one-per-user", riskPoints: 0 },
      { label: "More devices than users", value: "more-devices", riskPoints: 5 },
      { label: "Shared devices", value: "shared", riskPoints: 10 },
    ],
  },
  {
    id: "orgType",
    question: "Which best describes your organisation?",
    icon: Building2,
    options: [
      { label: "General business", value: "general", riskPoints: 0 },
      { label: "Healthcare, Manufacturing, Legal, Finance, Professional Services or Non-profit", value: "regulated", riskPoints: 20 },
      { label: "Other regulated sector", value: "other-regulated", riskPoints: 15 },
    ],
  },
  {
    id: "dataType",
    question: "Do you handle personal or sensitive data?",
    icon: Database,
    options: [
      { label: "No", value: "no", riskPoints: 0 },
      { label: "Yes, standard personal data", value: "standard", riskPoints: 10 },
      { label: "Yes, health, financial, or regulated data", value: "sensitive", riskPoints: 20 },
    ],
  },
  {
    id: "cloudPlatform",
    question: "Which cloud productivity platform do you use?",
    icon: Cloud,
    options: [
      { label: "Microsoft 365 (standard licences)", value: "m365-standard", riskPoints: 5 },
      { label: "Microsoft 365 (advanced security licences)", value: "m365-advanced", riskPoints: 0 },
      { label: "Google Workspace", value: "google", riskPoints: 5 },
      { label: "AWS", value: "aws", riskPoints: 5 },
      { label: "Not sure", value: "not-sure", riskPoints: 10 },
    ],
  },
  {
    id: "mfaStatus",
    question: "Is multi-factor authentication enforced for all users?",
    icon: Lock,
    options: [
      { label: "Yes", value: "yes", riskPoints: 0 },
      { label: "Partially", value: "partial", riskPoints: 10 },
      { label: "No", value: "no", riskPoints: 20 },
    ],
  },
  {
    id: "deviceManagement",
    question: "Are user devices centrally managed and monitored?",
    icon: HardDrive,
    options: [
      { label: "Yes", value: "yes", riskPoints: 0 },
      { label: "Partially", value: "partial", riskPoints: 8 },
      { label: "No", value: "no", riskPoints: 15 },
    ],
  },
  {
    id: "backupStatus",
    question: "Do you have cloud and endpoint backups in place?",
    icon: Shield,
    options: [
      { label: "Yes", value: "yes", riskPoints: 0 },
      { label: "Not sure", value: "not-sure", riskPoints: 10 },
      { label: "No", value: "no", riskPoints: 20 },
    ],
  },
  {
    id: "complianceStatus",
    question: "Do you have any compliance or regulatory requirement?",
    icon: ShieldCheck,
    options: [
      { label: "None", value: "none", riskPoints: 0 },
      { label: "Industry or regional compliance", value: "single", riskPoints: 15 },
      { label: "Multiple regulatory requirements", value: "multiple", riskPoints: 20 },
      { label: "Not sure", value: "not-sure", riskPoints: 10 },
    ],
  },
  {
    id: "supportLevel",
    question: "What level of support do you expect?",
    icon: Clock,
    options: [
      { label: "Business hours only", value: "business-hours", riskPoints: 0 },
      { label: "Priority response", value: "priority", riskPoints: 5 },
      { label: "Extended or 24/7 support", value: "24x7", riskPoints: 10 },
    ],
  },
]

// Free email domains to block (gmail.com removed for testing)
const freeEmailDomains = [
  "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
  "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com",
  "gmx.com", "live.com", "msn.com", "me.com", "qq.com", "163.com",
]

const CostEstimatorPage = () => {
  const [currentStep, setCurrentStep] = useState(0) // 0 = intro, 1-10 = questions, 11 = email, 12 = results
  const [formData, setFormData] = useState<FormData>({
    userCount: "",
    deviceCount: "",
    orgType: "",
    dataType: "",
    cloudPlatform: "",
    mfaStatus: "",
    deviceManagement: "",
    backupStatus: "",
    complianceStatus: "",
    supportLevel: "",
    email: "",
    consent: false,
  })
  const [emailError, setEmailError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showTeaser, setShowTeaser] = useState(false)

  // Calculate risk score
  const riskScore = useMemo(() => {
    let score = 0
    questions.forEach((q) => {
      const answer = formData[q.id as keyof FormData] as string
      const option = q.options.find((o) => o.value === answer)
      if (option) {
        score += option.riskPoints
      }
    })
    return score
  }, [formData])

  // Determine recommended package
  const recommendedPackage = useMemo(() => {
    if (riskScore >= 80) return "elite"
    return "secure"
  }, [riskScore])

  // Get price range
  const priceRange = useMemo(() => {
    if (recommendedPackage === "elite") {
      return { min: 90, max: 110 }
    }
    return { min: 69, max: 85 }
  }, [recommendedPackage])

  // Get risk factors
  const riskFactors = useMemo((): RiskFactor[] => {
    const factors: RiskFactor[] = []

    if (formData.mfaStatus === "no") {
      factors.push({ label: "Multi-factor authentication not enforced", severity: "high" })
    } else if (formData.mfaStatus === "partial") {
      factors.push({ label: "Multi-factor authentication only partially enforced", severity: "medium" })
    }

    if (formData.backupStatus === "no") {
      factors.push({ label: "No backup solution in place", severity: "high" })
    } else if (formData.backupStatus === "not-sure") {
      factors.push({ label: "Backup status uncertain", severity: "medium" })
    }

    if (formData.deviceManagement === "no") {
      factors.push({ label: "Devices not centrally managed", severity: "high" })
    }

    if (formData.dataType === "sensitive") {
      factors.push({ label: "Handling sensitive/regulated data", severity: "high" })
    }

    if (formData.orgType === "regulated" || formData.orgType === "other-regulated") {
      factors.push({ label: "Operating in a regulated industry", severity: "medium" })
    }

    if (formData.complianceStatus === "multiple") {
      factors.push({ label: "Multiple compliance requirements", severity: "high" })
    } else if (formData.complianceStatus === "single") {
      factors.push({ label: "Compliance requirements present", severity: "medium" })
    }

    return factors.slice(0, 3)
  }, [formData])

  // Validate email
  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address")
      return false
    }

    const domain = email.split("@")[1]?.toLowerCase()
    if (freeEmailDomains.includes(domain)) {
      setEmailError("Please use your work email address")
      return false
    }

    setEmailError("")
    return true
  }, [])

  // Handle option select
  const handleOptionSelect = (questionId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }))
    // Auto-advance after selection
    setTimeout(() => {
      if (currentStep < questions.length) {
        setCurrentStep(currentStep + 1)
      }
    }, 300)
  }

  // Handle email submit
  const handleEmailSubmit = async () => {
    if (!validateEmail(formData.email)) return
    if (!formData.consent) {
      setEmailError("Please accept the privacy policy to continue")
      return
    }

    setIsSubmitting(true)

    // Prepare Klaviyo data
    const packageName = recommendedPackage === "elite" ? "Core Elite" : "Core Secure"
    const riskLevel = riskScore >= 80 ? "critical" : riskScore >= 60 ? "high" : riskScore >= 40 ? "moderate" : "low"

    const klaviyoData = {
      email: formData.email,
      userCountRange: formData.userCount,
      riskScore: riskScore,
      recommendedPackage: packageName,
      complianceFlag: formData.complianceStatus !== "none",
      supportLevel: formData.supportLevel,
      tags: [
        "calc_completed",
        recommendedPackage === "elite" ? "calc_core_elite" : "calc_core_secure",
        riskScore >= 80 ? "calc_high_risk" : null,
        formData.complianceStatus !== "none" ? "calc_compliance_required" : null,
        formData.supportLevel === "24x7" ? "calc_24x7_support" : null,
      ].filter(Boolean),
    }

    try {
      // Send to Klaviyo server-side API endpoint
      const klaviyoPromise = fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(klaviyoData),
      })

      // Send results email
      const emailData = {
        email: formData.email,
        riskScore: riskScore,
        riskLevel: riskLevel,
        recommendedPackage: recommendedPackage,
        userCountRange: formData.userCount,
        complianceFlag: formData.complianceStatus !== "none",
        supportLevel: formData.supportLevel,
        riskFactors: riskFactors.map(f => f.label),
      }

      const emailPromise = fetch("/api/send-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      })

      // Wait for both requests
      const [klaviyoResponse, emailResponse] = await Promise.all([klaviyoPromise, emailPromise])

      if (!klaviyoResponse.ok) {
        console.error("Klaviyo submission failed")
      }

      // Also use Klaviyo client-side SDK if available
      if (typeof window !== "undefined" && window.klaviyo) {
        // Identify the user
        window.klaviyo.identify({
          email: formData.email,
          calculator_user_count_range: formData.userCount,
          calculator_risk_score: riskScore,
          calculator_recommended_package: packageName,
          calculator_compliance_flag: formData.complianceStatus !== "none",
          calculator_support_level: formData.supportLevel,
        })

        // Track the event
        window.klaviyo.track("Calculator Completed", {
          user_count_range: formData.userCount,
          risk_score: riskScore,
          recommended_package: packageName,
          compliance_flag: formData.complianceStatus !== "none",
          support_level: formData.supportLevel,
          price_range_min: priceRange.min,
          price_range_max: priceRange.max,
        })
      }

      if (emailResponse.ok) {
        toast.success("Your results are ready!", {
          description: "Check your inbox - we've sent you a copy.",
        })
      } else {
        toast.success("Your results are ready!", {
          description: "View your personalised recommendations below.",
        })
      }

      setCurrentStep(12) // Go to results
    } catch (error) {
      console.error("Error submitting:", error)
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get user count for display
  const getUserCountLabel = () => {
    const option = questions[0].options.find((o) => o.value === formData.userCount)
    return option?.label || "your team"
  }

  // Progress percentage
  const progress = useMemo(() => {
    if (currentStep === 0) return 0
    if (currentStep === 12) return 100
    return Math.round((currentStep / 11) * 100)
  }, [currentStep])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Progress Bar */}
      {currentStep > 0 && currentStep < 12 && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
          <div className="h-1 bg-slate-200">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <span className="text-sm text-slate-500">
              {currentStep <= 10 ? `Question ${currentStep} of 10` : "Almost done"}
            </span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={cn("max-w-4xl mx-auto px-4", currentStep > 0 && currentStep < 12 ? "pt-24" : "pt-20")}>
        <AnimatePresence mode="wait">
          {/* Intro Screen */}
          {currentStep === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[80vh] flex flex-col items-center justify-center text-center py-12"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-xl"
              >
                <ShieldCheck className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-dm-sans">
                IT & Cybersecurity Cost Estimator
              </h1>

              <p className="text-lg sm:text-xl text-tertiary max-w-2xl mb-4 leading-relaxed">
                Get an instant IT & cybersecurity cost estimate. Answer a few quick questions and see what organisations like yours typically invest to stay secure, compliant, and fully supported.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 mb-10">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Takes less than 2 minutes</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => setCurrentStep(1)}
                className="shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all text-lg px-8"
              >
                Start Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="mt-8 text-sm text-slate-500 max-w-md">
                Designed for organisations that take security and compliance seriously.
              </p>
            </motion.div>
          )}

          {/* Questions */}
          {currentStep >= 1 && currentStep <= 10 && (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="min-h-[70vh] flex flex-col justify-center py-12"
            >
              {(() => {
                const question = questions[currentStep - 1]
                const QuestionIcon = question.icon
                return (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl flex items-center justify-center">
                        <QuestionIcon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-secondary font-dm-sans">
                        {question.question}
                      </h2>
                    </div>

                    <div className="grid gap-3">
                      {question.options.map((option) => {
                        const isSelected = formData[question.id as keyof FormData] === option.value
                        return (
                          <motion.button
                            key={option.value}
                            onClick={() => handleOptionSelect(question.id, option.value)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={cn(
                              "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                              isSelected
                                ? "border-primary bg-primary/5 shadow-lg"
                                : "border-slate-200 bg-white hover:border-primary/50 hover:shadow-md"
                            )}
                          >
                            <span className={cn(
                              "text-lg font-medium",
                              isSelected ? "text-primary" : "text-slate-700"
                            )}>
                              {option.label}
                            </span>
                            <div className={cn(
                              "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                              isSelected
                                ? "border-primary bg-primary"
                                : "border-slate-300 group-hover:border-primary/50"
                            )}>
                              {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                            </div>
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}

          {/* Email Capture - No pricing shown */}
          {currentStep === 11 && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[80vh] flex flex-col items-center justify-center py-12"
            >
              {/* Assessment Complete Badge */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-3xl p-8 sm:p-12 border border-primary/20 mb-10 w-full max-w-xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-secondary font-dm-sans mb-3">
                  Your assessment is complete
                </h2>
                <p className="text-slate-600 text-lg">
                  We&apos;ve analysed your responses and prepared a personalised report including your risk score, recommended service level, and estimated pricing.
                </p>
              </motion.div>

              {/* Email Form */}
              <div className="w-full max-w-md space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary font-dm-sans mb-2">
                    Enter your email to unlock your results
                  </h3>
                  <p className="text-slate-500 text-sm">
                    We&apos;ll also send a copy of your full report to your inbox.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        placeholder="your.name@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                          setEmailError("")
                        }}
                        className={cn(
                          "w-full pl-12 pr-4 py-4 rounded-xl border-2 text-lg focus:outline-none transition-all",
                          emailError
                            ? "border-red-300 focus:border-red-500"
                            : "border-slate-200 focus:border-primary"
                        )}
                      />
                    </div>
                    {emailError && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        {emailError}
                      </p>
                    )}
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-slate-600">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and consent to receiving communications about my results.
                    </span>
                  </label>

                  <Button
                    size="lg"
                    onClick={handleEmailSubmit}
                    disabled={isSubmitting || !formData.email || !formData.consent}
                    className="w-full shadow-lg text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Unlock My Results
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Your data is secure</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <div className="text-xs text-slate-400">No spam, ever</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {currentStep === 12 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 space-y-10"
            >
              {/* Recommended Package */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className={cn(
                    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6",
                    recommendedPackage === "elite"
                      ? "bg-gradient-to-r from-purple-500/10 to-primary/10 text-purple-600"
                      : "bg-gradient-to-r from-primary/10 to-cyan-500/10 text-primary"
                  )}
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-semibold">Recommended Service Level</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl font-bold text-secondary font-dm-sans mb-4">
                  {recommendedPackage === "elite" ? "Core Elite" : "Core Secure"}
                </h1>

                <p className="text-xl text-slate-600 mb-6">
                  Based on your organisation profile with {getUserCountLabel()} users
                </p>

                <div className={cn(
                  "inline-block rounded-2xl p-8 mb-8",
                  recommendedPackage === "elite"
                    ? "bg-gradient-to-br from-purple-500/10 to-primary/10"
                    : "bg-gradient-to-br from-primary/10 to-cyan-500/10"
                )}>
                  <p className="text-sm text-slate-600 mb-2">Estimated investment</p>
                  <p className="text-5xl sm:text-6xl font-bold text-secondary font-dm-sans">
                    £{priceRange.min} – £{priceRange.max}
                  </p>
                  <p className="text-slate-600 mt-2">per user / month</p>
                </div>
              </div>

              {/* Risk Factors */}
              {riskFactors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200"
                >
                  <h2 className="text-xl font-bold text-secondary font-dm-sans mb-6 flex items-center gap-3">
                    <ShieldAlert className="w-6 h-6 text-amber-500" />
                    Key Risk Factors Identified
                  </h2>
                  <div className="space-y-4">
                    {riskFactors.map((factor, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-xl",
                          factor.severity === "high"
                            ? "bg-red-50 border border-red-100"
                            : factor.severity === "medium"
                            ? "bg-amber-50 border border-amber-100"
                            : "bg-slate-50 border border-slate-100"
                        )}
                      >
                        <div className={cn(
                          "w-3 h-3 rounded-full shrink-0",
                          factor.severity === "high"
                            ? "bg-red-500"
                            : factor.severity === "medium"
                            ? "bg-amber-500"
                            : "bg-slate-400"
                        )} />
                        <span className="text-slate-700 font-medium">{factor.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Important Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200"
              >
                <h2 className="text-xl font-bold text-secondary font-dm-sans mb-4">
                  Important Notes
                </h2>
                <p className="text-slate-600 mb-4">
                  Some environments require additional setup before managed services can begin, such as:
                </p>
                <ul className="space-y-2 mb-6">
                  {["Security hardening", "Identity and access remediation", "Backup implementation", "Compliance preparation"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-500 text-sm">
                  These are scoped separately following a short technical assessment.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-dark via-secondary to-dark rounded-3xl p-8 sm:p-12 text-center text-white"
              >
                <h2 className="text-2xl sm:text-3xl font-bold font-dm-sans mb-4">
                  Want a clear proposal and fixed scope?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Book a short scoping call and we&apos;ll validate this estimate, confirm requirements, and provide a written proposal.
                </p>
                <Link href="/contact-us">
                  <Button size="lg" variant="white" className="shadow-xl text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </Button>
                </Link>
              </motion.div>

              {/* Disclaimer */}
              <p className="text-center text-sm text-slate-500 max-w-2xl mx-auto">
                <strong>Disclaimer:</strong> This estimate is indicative only and does not constitute a formal quotation. Final pricing is subject to assessment and scope confirmation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Auto-advance trigger for last question */}
      {currentStep === 10 && formData.supportLevel && !showTeaser && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => {
            setTimeout(() => {
              setShowTeaser(true)
              setCurrentStep(11)
            }, 500)
          }}
        />
      )}
    </div>
  )
}

export default CostEstimatorPage
