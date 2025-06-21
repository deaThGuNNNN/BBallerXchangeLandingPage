'use client';
import Image from "next/image"
import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper"
import Link from "next/link"
import { CheckCircle, Star, Users, Gift, ArrowRight, Sparkles, Trophy, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const confettiColors = ['#ffffff', '#f3f4f6', '#e5e7eb', '#d1d5db'];
  
  const steps = [
    { icon: CheckCircle, title: "Subscription Confirmed", description: "You're officially on the list!" },
    { icon: Gift, title: "Exclusive Access", description: "Get early access to limited drops" },
    { icon: Star, title: "VIP Treatment", description: "Priority notifications and special offers" }
  ];

  useEffect(() => {
    setMounted(true);
    setShowConfetti(true);
    
    // Step progression animation
    const stepTimers = [
      setTimeout(() => setCurrentStep(1), 1000),
      setTimeout(() => setCurrentStep(2), 2000),
      setTimeout(() => setCurrentStep(3), 3000),
    ];

    return () => stepTimers.forEach(clearTimeout);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <BasketballBackgroundWrapper />
      <div className="absolute inset-0 opacity-10 bg-noise animate-grain"></div>
      
      {/* Celebration Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                }}
                initial={{ y: -10, rotate: 0, opacity: 1 }}
                animate={{
                  y: window.innerHeight + 100,
                  rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                  opacity: 0,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Ambient Success Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl animate-pulse"></div>

      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
        
        {/* Main Success Card */}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl scale-110 animate-pulse"></div>
                <Image
                  src="/bbx-logo.svg"
                  alt="BBallerXchange"
                  width={300}
                  height={120}
                  className="relative h-24 w-auto filter drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Success Icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 200 }}
            >
              <div className="relative">
                <motion.div
                  className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <CheckCircle className="w-16 h-16 text-black" strokeWidth={2} />
                </motion.div>
                
                {/* Celebration rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.5 + (i * 0.3), opacity: 0 }}
                    transition={{
                      delay: 0.8 + (i * 0.2),
                      duration: 1.5,
                      ease: 'easeOut',
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Welcome to the
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Inner Circle
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
                Your subscription to our list has been confirmed.
                <span className="block mt-2 text-white/60 text-xl">
                  Get ready for exclusive drops and VIP access.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep > index;
              
              return (
                <motion.div
                  key={index}
                  className={`bg-white/[0.03] backdrop-blur-xl border rounded-3xl p-8 text-center transition-all duration-700 ${
                    isActive ? 'border-white/20 bg-white/[0.06]' : 'border-white/10'
                  }`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: isActive ? 1.05 : 1 
                  }}
                  transition={{ delay: 1.6 + (index * 0.2), duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.08 }}
                >
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'bg-white text-black' : 'bg-white/10 text-white'
                    }`}
                    animate={{ 
                      scale: isActive ? [1, 1.2, 1] : 1,
                      rotate: isActive ? [0, 10, 0] : 0
                    }}
                    transition={{ duration: 0.6, delay: isActive ? 0.2 : 0 }}
                  >
                    <Icon className="w-10 h-10" strokeWidth={2} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white">5,247</span>
                </div>
                <p className="text-white/60">Exclusive Members</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white">127</span>
                </div>
                <p className="text-white/60">Limited Drops</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white">48h</span>
                </div>
                <p className="text-white/60">Early Access</p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <div className="space-y-4">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-4 bg-white hover:bg-white/95 text-black font-black text-xl px-12 py-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">EXPLORE DROPS</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" strokeWidth={2} />
              </Link>
              
              <p className="text-white/50 text-lg">
                Keep an eye on your inbox for exclusive updates
              </p>
            </div>

            {/* Social Proof */}
            <motion.div
              className="flex items-center justify-center gap-2 text-white/40"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/20 rounded-full border-2 border-black flex items-center justify-center"
                  >
                    <Star className="w-4 h-4 text-white" fill="currentColor" />
                  </div>
                ))}
              </div>
              <span className="ml-3 text-sm">Join thousands of satisfied members</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 