"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-dark/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />

              {/* Content */}
              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold font-dm-sans text-white">
                      We Value Your Privacy
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-primary hover:text-cyan-400 underline transition-colors duration-300"
                      >
                        Read our Privacy Policy
                      </Link>
                      {" "}and{" "}
                      <Link
                        href="/terms-of-service"
                        className="text-primary hover:text-cyan-400 underline transition-colors duration-300"
                      >
                        Terms of Service
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Button
                      onClick={acceptCookies}
                      className="w-full sm:w-auto rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={declineCookies}
                      variant="outline"
                      className="w-full sm:w-auto rounded-full border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Decline
                    </Button>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30 rounded-br-lg" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
