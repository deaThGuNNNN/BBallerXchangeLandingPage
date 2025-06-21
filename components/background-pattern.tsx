"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BackgroundPattern() {
  const [icons, setIcons] = useState<Array<{ id: number; x: number; y: number; type: string; delay: number }>>([])

  useEffect(() => {
    const generateIcons = () => {
      const iconTypes = ["🏀", "👟", "🔥", "⚡", "💎", "🏆"]
      const newIcons = []

      for (let i = 0; i < 50; i++) {
        newIcons.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
          delay: Math.random() * 2,
        })
      }

      setIcons(newIcons)
    }

    generateIcons()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Geometric Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Icons */}
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 3 + 2,
          }}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
        >
          {icon.type}
        </motion.div>
      ))}

      {/* Circuit-like Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
        <motion.path
          d="M100,200 Q300,100 500,200 T900,200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <motion.path
          d="M100,400 Q300,300 500,400 T900,400"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.path
          d="M100,600 Q300,500 500,600 T900,600"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        />

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900/80" />
    </div>
  )
}
