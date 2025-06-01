"use client"

import { useState, useEffect } from "react"
import BackgroundPattern from "@/components/background-pattern"
import CenteredLogo from "@/components/centered-logo"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-black to-neutral-900 overflow-hidden relative">
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10">
        {/* Centered Logo Section */}
        <CenteredLogo />
      </div>
    </div>
  )
}
