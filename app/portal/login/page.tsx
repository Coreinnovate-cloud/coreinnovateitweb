"use client"

import { Button } from "@/components/shared/button"
import { Lock, Mail, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function PortalLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login - In production, this would call your auth API
    setTimeout(() => {
      // Store user session
      localStorage.setItem(
        "portal_user",
        JSON.stringify({
          email: formData.email,
          companyID: 12345, // This would come from your auth system
          contactID: 67890,
          name: "John Doe",
          companyName: "Acme Corporation",
        })
      )

      setIsLoading(false)
      router.push("/portal/tickets")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 font-dm-sans">
            Customer Portal
          </h1>
          <p className="text-gray-400">Sign in to access your support tickets</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="your.email@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-700 text-primary focus:ring-primary"
                />
                Remember me
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full" size="lg">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                  Signing in...
                </>
              ) : (
                <>
                  <User className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-700 text-center">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <a href="/contact-us" className="text-primary hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Protected by industry-standard encryption.
            <br />
            Your data is secure with us.
          </p>
        </div>
      </div>
    </main>
  )
}
