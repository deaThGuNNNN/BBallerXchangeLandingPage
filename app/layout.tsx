import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BBallerXchange | Heat Loading…",
  description: "Join BBallerXchange's waitlist for access to exclusive monthly drops and premium sportswear basics.",
  // --- Remote unique additions below ---
  keywords: "sneakers, basketball, premium, exclusive, drops, marketplace, authentic, trading",
  robots: "index, follow",
  openGraph: {
    title: "BBallerXchange | Heat Loading…",
    description: "The future of premium sneaker trading. Exclusive drops, verified authenticity, unmatched experience.",
    url: "https://bballerxchange.com",
    siteName: "BBallerXchange",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BBallerXchange | Heat Loading…",
    description: "The future of premium sneaker trading. Exclusive drops, verified authenticity, unmatched experience.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f97316",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
