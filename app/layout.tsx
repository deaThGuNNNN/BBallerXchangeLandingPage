import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

// Configure Inter font with Next.js font optimization
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BBallerXchange | Game-Changing Marketplace",
  description: "The future of premium sneaker trading. Exclusive drops, verified authenticity, unmatched experience.",
  keywords: "sneakers, basketball, premium, exclusive, drops, marketplace, authentic, trading",
  robots: "index, follow",
  openGraph: {
    title: "BBallerXchange | Game-Changing Marketplace",
    description: "The future of premium sneaker trading. Exclusive drops, verified authenticity, unmatched experience.",
    url: "https://bballerxchange.com",
    siteName: "BBallerXchange",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BBallerXchange | Game-Changing Marketplace",
    description: "The future of premium sneaker trading. Exclusive drops, verified authenticity, unmatched experience.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f97316",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
