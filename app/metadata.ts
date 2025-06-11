import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Auth Template | Next.js & Express Authentication System",
  description: "Production-ready full-stack auth template with Next.js 15, Express, MongoDB. Features JWT, OAuth, email verification, OTP, RBAC, and clean architecture for rapid development.",
  keywords: [
    "Full-Stack Auth Template",
    "Authentication System",
    "Next.js Authentication Template",
    "Express.js Auth Template",
    "Clean Architecture Auth",
    "TypeScript Auth Template",
    "Email OTP Verification",
    "Production Auth System",
    "Full-Stack Authentication Template",
    "User Management System"
  ],
  authors: [{ name: "Muhammed Sinan", url: "https://www.muhammedsinan.space/" }],
  creator: "Muhammed Sinan",
  publisher: "Muhammed Sinan",
  applicationName: "Full-Stack Auth Template",
  icons: "favicon.png",
  category: "Web Development",
  classification: "Authentication System Template",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "https://full-stack-clean-auth-template.vercel.app",
  },
  openGraph: {
    title: "Full-Stack Auth Template | Complete Authentication System",
    description: "Production-ready authentication template with Next.js 15 & Express. Features email/password login, OAuth, OTP verification, JWT, RBAC, and clean architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Full-Stack Auth Template",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Full-Stack Authentication Template Architecture Overview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Auth Template | Next.js & Express Authentication",
    description: "Complete authentication system with Next.js 15, Express & MongoDB. Features JWT, OAuth, email verification, OTP & admin dashboard.",
    images: ["/og-image.png"],
    creator: "@sinanptm",
    site: "@sinanptm"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://full-stack-clean-auth-template.vercel.app"),
  verification: {
    google: "google332e521595495b52.html"
  },
  other: {
    "application-name": "Full-Stack Auth Template",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Auth Template",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2B5797",
    "msapplication-tap-highlight": "no",
  },
};