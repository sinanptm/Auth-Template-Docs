import { Metadata } from "next";

export const metadataBase: Metadata = {
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
  metadataBase: new URL("https://full-stack-clean-auth-template.vercel.app"),
  alternates: {
    canonical: "https://full-stack-clean-auth-template.vercel.app",
  },
  openGraph: {
    title: "Full-Stack Auth Template | Complete Authentication System",
    description: "Production-ready authentication template with Next.js 15 & Express. Features email/password login, OAuth, OTP verification, JWT, RBAC, and clean architecture.",
    type: "website",
    url: "https://full-stack-clean-auth-template.vercel.app",
    locale: "en_US",
    siteName: "Full-Stack Auth Template",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Full-Stack Authentication Template Architecture Overview",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Auth Template | Next.js & Express Authentication",
    description: "Complete authentication system with Next.js 15, Express & MongoDB. Features JWT, OAuth, email verification, OTP & admin dashboard.",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Full-Stack Authentication Template"
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google332e521595495b52.html"
  }
};
