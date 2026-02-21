import CookieConsent from "@/components/shared/cookie-consent"
import Footer from "@/components/shared/footer"
import NavBar from "@/components/shared/navbar"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { DM_Sans, Inter } from "next/font/google"
import Script from "next/script"
import "swiper/css"
import "swiper/css/pagination"
import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Core Innovate IT | Managed IT Services, Cybersecurity & Compliance",
    template: "%s | Core Innovate IT",
  },
  description:
    "Core Innovate IT delivers managed IT services, cybersecurity, and compliance solutions that protect your business and support growth. 24/7 support, cloud solutions, and expert security.",
  keywords: [
    "managed IT services",
    "cybersecurity",
    "IT compliance",
    "cloud solutions",
    "IT support",
    "information security",
    "enterprise IT",
    "ISO 27001",
    "NIST CSF",
    "SOC 2",
    "Core Innovate IT",
  ],
  authors: [{ name: "Core Innovate IT" }],
  creator: "Core Innovate IT",
  publisher: "Core Innovate IT",
  metadataBase: new URL("https://coreinnovateit.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://coreinnovateit.com",
    title: "Core Innovate IT | Managed IT Services, Cybersecurity & Compliance",
    description:
      "Managed IT services, cybersecurity, and compliance solutions that protect your business and support growth.",
    siteName: "Core Innovate IT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Core Innovate IT | Managed IT Services, Cybersecurity & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Innovate IT | Managed IT Services, Cybersecurity & Compliance",
    description:
      "Managed IT services, cybersecurity, and compliance solutions that protect your business and support growth.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="KzI9eoAUC6TjQGSJMipOGYAoAUjbbw39N_aqvD829eM"
        />
        <link rel="canonical" href="https://coreinnovateit.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#16365f" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PXNYMCP57Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PXNYMCP57Z');
          `}
        </Script>
        {/* Klaviyo tracking script */}
        {process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID && (
          <script
            async
            src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID}`}
          />
        )}
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
