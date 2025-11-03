import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navbar";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import CookieConsent from "@/components/shared/cookie-consent";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CoreInnovate IT - Enterprise IT Security & Managed Services",
    template: "%s | CoreInnovate IT"
  },
  description: "We deliver AI-powered IT and cybersecurity solutions that protect your business and support growth. 24/7 managed services, cloud solutions, and expert security.",
  keywords: ["IT security", "managed IT services", "cybersecurity", "cloud solutions", "IT support", "information security", "enterprise IT", "ISO 27001", "NIST CSF", "SOC 2"],
  authors: [{ name: "CoreInnovate IT" }],
  creator: "CoreInnovate IT",
  publisher: "CoreInnovate IT",
  metadataBase: new URL("https://coreinnovateit.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://coreinnovateit.com",
    title: "CoreInnovate IT - Enterprise IT Security & Managed Services",
    description: "AI-powered IT and cybersecurity solutions that protect your business and support growth.",
    siteName: "CoreInnovate IT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoreInnovate IT - Secure, Scalable IT Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreInnovate IT - Enterprise IT Security & Managed Services",
    description: "AI-powered IT and cybersecurity solutions that protect your business and support growth.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <CookieConsent />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
