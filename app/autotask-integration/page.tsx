"use client"

import { Button } from "@/components/shared/button"
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Loader2,
  Plus,
  Server,
  Ticket,
  User,
} from "lucide-react"
import { useState } from "react"

interface TicketFormData {
  title: string
  description: string
  priority: "Low" | "Medium" | "High" | "Critical"
  category: string
  companyName: string
  contactName: string
  contactEmail: string
  contactPhone: string
}

interface CreatedTicket {
  ticketNumber: string
  title: string
  status: string
  priority: string
  createdAt: string
}

export default function AutotaskIntegrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [createdTicket, setCreatedTicket] = useState<CreatedTicket | null>(
    null
  )

  const [formData, setFormData] = useState<TicketFormData>({
    title: "",
    description: "",
    priority: "Medium",
    category: "General Support",
    companyName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    // Simulate API call to AUTOTASK
    setTimeout(() => {
      // Simulate successful ticket creation
      const ticketNumber = `TKT-${Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0")}`

      setCreatedTicket({
        ticketNumber,
        title: formData.title,
        status: "New",
        priority: formData.priority,
        createdAt: new Date().toISOString(),
      })

      setSubmitSuccess(true)
      setIsSubmitting(false)

      // Reset form
      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        category: "General Support",
        companyName: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
      })
    }, 2000)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "text-red-400 bg-red-500/10 border-red-500/20"
      case "High":
        return "text-orange-400 bg-orange-500/10 border-orange-500/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      case "Low":
        return "text-green-400 bg-green-500/10 border-green-500/20"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <AlertCircle className="w-4 h-4" />
      case "High":
        return <AlertTriangle className="w-4 h-4" />
      case "Medium":
        return <Clock className="w-4 h-4" />
      case "Low":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Ticket className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">
              AUTOTASK Ticket Portal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dm-sans">
            Create Support Ticket
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl">
            Submit your IT support request directly to our AUTOTASK PSA system.
            Our team will be notified immediately and will respond according to
            your priority level.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
        {/* Success Message */}
        {submitSuccess && createdTicket && (
          <div className="mb-8 bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 font-dm-sans">
                  Ticket Created Successfully!
                </h3>
                <p className="text-gray-300 mb-4">
                  Your support ticket has been submitted to our AUTOTASK system.
                  Our team has been notified and will respond shortly.
                </p>

                <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Ticket Number:</span>
                    <span className="text-white font-mono font-bold text-lg">
                      {createdTicket.ticketNumber}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Title:</span>
                    <span className="text-white">{createdTicket.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      {createdTicket.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Priority:</span>
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm ${getPriorityColor(createdTicket.priority)}`}
                    >
                      {getPriorityIcon(createdTicket.priority)}
                      {createdTicket.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Created:</span>
                    <span className="text-white">
                      {new Date(createdTicket.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                  You will receive email updates at{" "}
                  <span className="text-primary">{formData.contactEmail}</span>{" "}
                  as we work on your ticket.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="mb-8 bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Error Creating Ticket
                </h3>
                <p className="text-gray-300">{submitError}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ticket Creation Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white font-dm-sans">
                    New Support Ticket
                  </h2>
                  <p className="text-sm text-gray-400">
                    Fill in the details below to create a support ticket
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    Company Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your company name"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Contact Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        placeholder="+44 20 1234 5678"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Ticket Details */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-400" />
                    Ticket Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Issue Title <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="Brief description of the issue"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Priority <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="Low">Low - General inquiry</option>
                          <option value="Medium">
                            Medium - Normal business impact
                          </option>
                          <option value="High">
                            High - Significant business impact
                          </option>
                          <option value="Critical">
                            Critical - Business down
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Category <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="General Support">
                            General Support
                          </option>
                          <option value="Network Issue">Network Issue</option>
                          <option value="Hardware Problem">
                            Hardware Problem
                          </option>
                          <option value="Software Issue">Software Issue</option>
                          <option value="Security Incident">
                            Security Incident
                          </option>
                          <option value="Access Request">Access Request</option>
                          <option value="Email Problem">Email Problem</option>
                          <option value="Cloud Services">Cloud Services</option>
                          <option value="Backup & Recovery">
                            Backup & Recovery
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Detailed Description{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Please provide as much detail as possible about the issue, including:&#10;- What you were doing when the issue occurred&#10;- Any error messages you received&#10;- Steps to reproduce the problem&#10;- Impact on your work"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-slate-700">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Creating Ticket...
                      </>
                    ) : (
                      <>
                        <Ticket className="w-5 h-5 mr-2" />
                        Create Support Ticket
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar - Priority Guide & Info */}
          <div className="space-y-6">
            {/* Priority Guide */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-dm-sans">
                Priority Guidelines
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="font-bold text-red-400">Critical</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Complete business stoppage. Immediate response required.
                  </p>
                </div>

                <div className="p-3 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <span className="font-bold text-orange-400">High</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Significant impact on business operations. Urgent attention
                    needed.
                  </p>
                </div>

                <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="font-bold text-yellow-400">Medium</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Normal business impact. Standard response time applies.
                  </p>
                </div>

                <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="font-bold text-green-400">Low</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    General inquiry or minor issue. Scheduled response.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-dm-sans">
                Expected Response Times
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-400 text-sm">Critical</span>
                  <span className="text-white font-bold text-sm">
                    15 minutes
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-400 text-sm">High</span>
                  <span className="text-white font-bold text-sm">1 hour</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-400 text-sm">Medium</span>
                  <span className="text-white font-bold text-sm">4 hours</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400 text-sm">Low</span>
                  <span className="text-white font-bold text-sm">
                    Next business day
                  </span>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3 font-dm-sans">
                Need Immediate Help?
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                For critical issues, you can also reach us directly:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">📞</span>
                  <span>+44 (0) 20 1234 5678</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✉️</span>
                  <span>support@coreinnovate.co.uk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
