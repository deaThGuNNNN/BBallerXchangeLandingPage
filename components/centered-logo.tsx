"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Helper for random particles
function getRandomParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 6 + 4,
    opacity: Math.random() * 0.3 + 0.1,
  }))
}

// Helper for random icons
function getRandomIcons(count: number) {
  // Add BBX logo as a special type, and only valid emojis
  const iconTypes = [
    "🏀", "👟", "🔥", "⚡", "💎", "🏆", "bbxlogo"
  ];
  return Array.from({ length: count }, (_, i) => {
    const type = iconTypes[Math.floor(Math.random() * iconTypes.length)];
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      type,
      delay: Math.random() * 1.2, // shorter delay
      duration: Math.random() * 3 + 2.2, // shorter duration
      opacity: Math.random() * 0.3 + 0.1,
      size: Math.random() * 0.6 + 0.7,
    };
  });
}

// Creative vertical accent with bbxvertical.svg
const VerticalAccent = ({ side = 'left' }: { side?: 'left' | 'right' }) => {
  // Animate from 20% to 60% of viewport height, slower and with less glow
  return (
    <motion.div
      className={`hidden md:block fixed ${side === 'left' ? 'left-0' : 'right-0'} z-30`}
      initial={{ top: '20%', opacity: 0.9 }}
      animate={{ top: ['20%', '60%', '20%'], opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, filter: "brightness(1.15) drop-shadow(0 0 32px #ff880088)" }}
      style={{ pointerEvents: 'auto', height: 300 }}
    >
      <img
        src="/bbxvertical.svg"
        alt="BBX Vertical Logo"
        style={{
          height: 300,
          width: 'auto',
          filter: 'drop-shadow(0 0 18px #f9731688) drop-shadow(0 0 8px #ff880088)',
          transition: 'filter 0.3s',
          cursor: 'pointer',
          userSelect: 'none',
          display: 'block',
        }}
        draggable={false}
      />
    </motion.div>
  )
}

// BBX Slogan at the bottom of the page
const BBXSlogan = () => (
  <div className="hidden sm:block fixed bottom-0 left-1/2 -translate-x-1/2 z-20 w-full text-center pb-4 xs:pb-6 select-none pointer-events-none">
    <span className="text-white font-extrabold text-lg md:text-2xl tracking-wide drop-shadow-[0_2px_16px_#f97316cc]" style={{ textShadow: '0 2px 16px #f97316cc, 0 0 2px #fff' }}>
      From The Court To The Streets.
    </span>
  </div>
)

export default function CenteredLogo() {
  // Animated particles and icons
  const [particles] = useState(() => getRandomParticles(18))
  const [icons] = useState(() => getRandomIcons(36)) // more icons, higher frequency
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax mouse movement
  const [parallax, setParallax] = useState({ x: 50, y: 50 })
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0, clientY = 0
      if (e instanceof MouseEvent) {
        clientX = e.clientX; clientY = e.clientY
      } else if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX; clientY = e.touches[0].clientY
      }
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      setParallax({ x, y })
    }
    window.addEventListener("mousemove", handleMove)
    window.addEventListener("touchmove", handleMove)
    setMounted(true)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)
    }
  }, [])
  if (!mounted) return null

  return (
    <>
      <VerticalAccent side="left" />
      <VerticalAccent side="right" />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed inset-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-neutral-900 overflow-hidden"
        style={{ zIndex: 10 }}
      >
        {/* Animated Light Flares in Corners */}
        <motion.div
          className="pointer-events-none fixed left-0 top-0 w-64 h-64 z-0"
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(249,115,22,0.18) 0%, transparent 80%)`,
            opacity: 0.7,
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none fixed right-0 bottom-0 w-64 h-64 z-0"
          style={{
            background: `radial-gradient(circle at 80% 80%, rgba(239,68,68,0.15) 0%, transparent 80%)`,
            opacity: 0.6,
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Emoji Icons (background) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {icons.map((icon) => (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, icon.opacity, 0],
                scale: [0, icon.size, 0],
                y: [0, -20 - Math.random() * 20, 0],
              }}
              transition={{
                duration: icon.duration,
                delay: icon.delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 1.2 + 0.5, // shorter repeat delay
              }}
              className="absolute text-base md:text-lg pointer-events-none select-none"
              style={{
                left: `${icon.x}%`,
                top: `${icon.y}%`,
                zIndex: 0,
              }}
            >
              {icon.type === "bbxlogo" ? (
                <img
                  src="/bbxlogoo.svg"
                  alt="BBX Logo Symbol"
                  style={{ width: '1.5em', height: '1.5em', display: 'inline', verticalAlign: 'middle', filter: 'drop-shadow(0 0 6px #f97316aa)' }}
                  draggable={false}
                />
              ) : (
                icon.type
              )}
            </motion.div>
          ))}
        </div>
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, p.opacity, 0],
                y: [0, -10 - Math.random() * 10, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                repeatDelay: 2 + Math.random() * 2,
              }}
              style={{
                position: "absolute",
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: "rgba(249,115,22,0.13)",
                filter: "blur(1.5px)",
              }}
            />
          ))}
        </div>

        {/* Centered Content */}
        <div className="relative flex flex-col items-center justify-center z-20 w-full">
          {/* Glowing Orb with Parallax & Concentric Circles */}
          <div className="relative flex items-center justify-center mb-10">
            {/* Concentric Circles (always centered) */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block w-[420px] h-[420px]"
              viewBox="0 0 420 420" fill="none"
              style={{ pointerEvents: 'none' }}
            >
              <circle cx="210" cy="210" r="120" stroke="#f97316" strokeOpacity="0.12" strokeWidth="2" />
              <circle cx="210" cy="210" r="160" stroke="#f97316" strokeOpacity="0.08" strokeWidth="2" />
              <circle cx="210" cy="210" r="200" stroke="#f97316" strokeOpacity="0.05" strokeWidth="2" />
            </svg>
            {/* Glowing Orb with Parallax only on background gradient */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.08, 1], opacity: 1, boxShadow: [
                "0 0 40px 12px rgba(249,115,22,0.18)",
                "0 0 60px 20px rgba(249,115,22,0.28)",
                "0 0 40px 12px rgba(249,115,22,0.18)",
              ] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[120px] h-[120px] sm:w-[260px] sm:h-[260px] rounded-full shadow-2xl flex items-center justify-center relative"
              style={{
                boxShadow: "0 0 40px 12px rgba(249,115,22,0.18)",
                background: `radial-gradient(circle at ${parallax.x}% ${parallax.y}%, #f97316 0%, #ef4444 60%, #000 100%)`,
                filter: "blur(0.5px)",
                transition: 'background 0.3s',
              }}
            >
              {/* Animated Energy Rings (always centered) */}
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 260 260"
                style={{ zIndex: 2 }}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              >
                <motion.circle
                  cx="130" cy="130" r="100"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  fill="none"
                  strokeOpacity={0.18}
                  animate={{
                    scale: [1, 1.06, 1],
                    opacity: [0.18, 0.28, 0.18],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="130" cy="130" r="85"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  fill="none"
                  strokeOpacity={0.12}
                  animate={{
                    scale: [1, 0.97, 1],
                    opacity: [0.12, 0.22, 0.12],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.svg>
              {/* Orbiting Particles */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 12,
                    height: 12,
                    marginLeft: -6,
                    marginTop: -6,
                    zIndex: 3,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6 + i * 1.5,
                    ease: "linear",
                    delay: i * 0.7,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: `${100 - i * 12}%`,
                      top: `${i * 12 + 10}%`,
                      width: 12 - i * 2,
                      height: 12 - i * 2,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #f97316 60%, #fff0 100%)',
                      opacity: 0.18 + i * 0.07,
                      filter: 'blur(1.5px)',
                    }}
                  />
                </motion.div>
              ))}
              {/* Occasional Sparkles */}
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    zIndex: 4,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0.5, 1.2, 0.5],
                    x: [0, (i === 0 ? 40 : -40), 0],
                    y: [0, (i === 0 ? -40 : 40), 0],
                  }}
                  transition={{
                    duration: 2.8 + i,
                    repeat: Infinity,
                    repeatDelay: 2 + i * 1.2,
                    delay: i * 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #fff 60%, #f97316 100%)',
                      boxShadow: '0 0 16px 4px #f97316',
                    }}
                  />
                </motion.div>
              ))}
              {/* Inner Glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 80%)",
                  zIndex: 1,
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Centered Logo (Next.js Image) */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image
                  src="/bbxlogo.svg"
                  alt="BBallerXchange Logo"
                  width={112}
                  height={112}
                  className="w-20 h-20 sm:w-36 sm:h-36 object-contain drop-shadow-2xl"
                  style={{ maxWidth: '90%', maxHeight: '90%' }}
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Headline with Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-center mb-4 drop-shadow-lg bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent px-4"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            The Game Is About to Change
          </motion.h1>
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-2xl text-center text-white/80 max-w-2xl mb-8 px-4"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Join The Next Era Of Basketball Culture. Limited Drops, Pro Gear, And The Streetwear Heat You'Ve Been Waiting For. BBallerXchange is rewriting the rules.
          </motion.p>
          {/* CTA Button with Glow & Ripple */}
          <div className="relative flex flex-col items-center w-full mt-8 mb-8 xs:mt-12 xs:mb-12">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="relative inline-flex items-center gap-2 px-6 py-2 xs:px-8 xs:py-3 rounded-full border-2 border-orange-400/60 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-white font-extrabold text-sm xs:text-base md:text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400/60 overflow-hidden group z-10 transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              whileHover={{
                filter: "brightness(1.1)",
              }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{
                  color: ["#fff", "#ffe066", "#fff"],
                  textShadow: [
                    "0 0 8px #fff, 0 0 16px #f97316",
                    "0 0 16px #ffe066, 0 0 32px #f97316",
                    "0 0 8px #fff, 0 0 16px #f97316",
                  ],
                  transition: { duration: 0.4, repeat: 1, repeatType: "reverse" },
                }}
              >
                Early Access. No Benchwarmers.
              </motion.span>
              <motion.span
                className="ml-2 text-2xl relative z-10"
                whileHover={{
                  x: [0, -2, 2, 0],
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.4, repeat: 1, repeatType: "reverse" },
                }}
              >
                →
              </motion.span>
              {/* Ripple on hover */}
              <span className="absolute inset-0 rounded-full group-hover:animate-pulse-ripple bg-white/10 pointer-events-none" aria-hidden />
            </motion.a>
            {/* Microcopy below button */}
            <div className="mt-8 xs:mt-12 text-white/70 text-sm xs:text-base md:text-lg text-center font-medium px-4">
              Be first in line when the BBX heat hits.
            </div>
            {/* Symbolic Countdown Timer */}
            <div className="mt-3 xs:mt-4 text-orange-300 text-xs xs:text-sm md:text-base font-mono tracking-widest text-center select-none px-4">
              00 Days : 00 Hours : 00 Minutes
            </div>
          </div>
        </div>

        {/* Subtle Vignette Overlay */}
        <div className="pointer-events-none fixed inset-0 z-30" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 60%, transparent 60%, #000 100%)" }} />
        {/* Subtle Noise Overlay */}
        <div className="pointer-events-none fixed inset-0 z-30" style={{ background: "url('https://www.transparenttextures.com/patterns/noise.png')", opacity: 0.08 }} />
        <BBXSlogan />
      </motion.div>
    </>
  )
}
