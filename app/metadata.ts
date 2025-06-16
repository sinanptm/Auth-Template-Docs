import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Auth Template | Next.js & Express Authentication System",
  description: "Production-ready full-stack auth template with Next.js 15, Express, MongoDB. Features JWT, OAuth, email verification, OTP, RBAC, and clean architecture for rapid development.",
  keywords: [
    "Fullstack Clean Auth Template",
    "Fullstack Authentication Template",
    "Authentication System",
    "Next.js Node.js Authentication Template",
    "Express.js Authentication Template",
    "Clean Architecture Authentication Template",
    "TypeScript Authentication Template",
    "Production Authentication System"
  ],
  authors: [{ name: "Muhammed Sinan", url: "https://www.muhammedsinan.space/" }],
  creator: "Muhammed Sinan",
  publisher: "Muhammed Sinan",
  applicationName: "Full-Stack Auth Template",
  category: "Web Development",
  classification: "Authentication System Template",
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
        url: "https://full-stack-clean-auth-template.vercel.app/og-image.png",
        alt: "Full-Stack Authentication Template Architecture Overview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Auth Template | Next.js & Express Authentication",
    description: "Complete authentication system with Next.js 15, Express & MongoDB. Features JWT, OAuth, email verification, OTP & admin dashboard.",
    images: ["https://full-stack-clean-auth-template.vercel.app/og-image.png"],
    creator: "@sinanptm",
    site: "@sinanptm"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
    },
  },
  metadataBase: new URL("https://full-stack-clean-auth-template.vercel.app"),
  verification: {
    google: "google332e521595495b52.html"
  }
};
