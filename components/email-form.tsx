"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"

const EmailForm = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setIsValidEmail(false)
      return
    }

    setIsValidEmail(true)
    console.log(`Submitted email: ${email}`)
    setSubmitted(true)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {!submitted ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Join the <span className="text-red-500">Exclusive</span> Waitlist
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setIsValidEmail(true)
                }}
                placeholder="Enter your email address"
                className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border ${
                  !isValidEmail ? "border-red-500" : "border-white/20"
                } text-white placeholder-white/50 focus:outline-none focus:border-red-500 transition-all duration-300`}
                required
              />
            </div>

            {!isValidEmail && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400"
              >
                Please enter a valid email address
              </motion.p>
            )}

            <motion.button
              type="submit"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Early Access</span>
              <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
          <p className="text-white/70">Welcome to the exclusive waitlist. We'll notify you when the drop goes live.</p>
        </motion.div>
      )}
    </div>
  )
}

export default EmailForm
