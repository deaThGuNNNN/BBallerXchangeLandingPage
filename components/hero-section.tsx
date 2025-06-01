"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #ef4444 0%, #dc2626 25%, #000000 70%)`,
        }}
      />

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rotate-45 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-red-500/30 rotate-12 transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase">Coming Soon</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6"
            >
              <span className="text-white">BBALLER</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
                XCHANGE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-lg"
            >
              The Game Is About to Change.
              <br />
              <span className="text-white/60">We're cooking something big. The court is almost ready.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-none hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Join Waitlist
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-none hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right side - Visual element */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Main product showcase */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl transform rotate-12" />
                <div className="absolute inset-4 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full blur-2xl transform -rotate-12" />

                {/* Product image placeholder */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                      rotateX: [0, 15, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="BBallerXchange Logo"
                      width={200}
                      height={200}
                      className="w-32 h-32 object-contain opacity-80"
                    />
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-red-500/30 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500/30 rounded-full blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-white/50 text-sm">Waitlist opens in a few days. Keep your eyes on the game.</p>
      </motion.div>
    </section>
  )
}
