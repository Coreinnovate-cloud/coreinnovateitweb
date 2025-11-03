"use client"

import { motion } from "framer-motion"
import { Send, Sparkles } from "lucide-react"
import Image from "next/image"
import React, { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from "sonner"
import { Button } from "../shared/button"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Textarea } from "../ui/textarea"

const SendMessage = () => {
  const [loading, setLoading] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [captchaError, setCaptchaError] = useState<string>("")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
    service: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaValue) {
      setCaptchaError("Please verify that you are not a robot.")
      return
    }

    setCaptchaError("")

    try {
      setLoading(true)

      const response = await fetch(
        "https://formsubmit.co/hello@coreinnovate.co.uk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _subject: "New Contact Form Submission",
            _replyto: formData.email,
            FirstName: formData.firstName,
            LastName: formData.lastName,
            Email: formData.email,
            Phone: formData.phone,
            Company: formData.companyName,
            Service: formData.service,
            Message: formData.message,
            "g-recaptcha-response": captchaValue,
          }),
        }
      )

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          companyName: "",
          message: "",
          service: "",
        })
        recaptchaRef.current?.reset()
        toast.success("Message sent successfully!")
      } else {
        toast.error("Error sending message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Error sending message. Please try again.")
    } finally {
      setLoading(false)
      setCaptchaValue(null)
    }
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            Have a question or ready to transform your IT infrastructure? We&apos;re
            here to help.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Image Card */}
            <div className="relative h-[300px] lg:h-[400px] w-full rounded-3xl overflow-hidden group">
              <Image
                src={`/support.jpg`}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                fill
                alt="support"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Quick Response</h4>
                    <p className="text-sm text-grey">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            {/* <div className="space-y-4">
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Email Us</h4>
                  <p className="text-grey text-sm">hello@coreinnovate.co.uk</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Call Us</h4>
                  <p className="text-grey text-sm">+44 (0) 20 1234 5678</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Visit Us</h4>
                  <p className="text-grey text-sm">London, United Kingdom</p>
                </div>
              </motion.div>
            </div> */}
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-2">
                Send us a message
              </h3>
              <p className="text-grey">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-6"
            >
              <Input
                label="First Name"
                placeholder="First Name"
                name="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
              <Input
                label="Last Name"
                name="Last Name"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                name="Phone Number"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="Email Address"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
              <Input
                label="Company Name"
                name="Company Name"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
              />
              <Select
                name="Service"
                onValueChange={(value) => handleInputChange("service", value)}
              >
                <SelectTrigger label="Services" className="!p-6">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Managed IT Services">
                    Managed IT Services
                  </SelectItem>
                  <SelectItem value="Cloud Management">
                    Cloud Management
                  </SelectItem>
                  <SelectItem value="Managed Security">
                    Managed Security
                  </SelectItem>
                  <SelectItem value="Project Management">
                    Project Management
                  </SelectItem>
                  <SelectItem value="Software Development">
                    Software Development
                  </SelectItem>
                  <SelectItem value="Project Risk">Project Risk</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              <div className="col-span-2 space-y-12">
                <Textarea
                  name="Message"
                  label="Message"
                  className="!h-[133px]"
                  placeholder="Enter message..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />

                <div className="space-y-4">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY!}
                    ref={recaptchaRef}
                    onChange={handleCaptchaChange}
                  />

                  {captchaError && (
                    <p className="text-red-500 text-sm">{captchaError}</p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SendMessage
