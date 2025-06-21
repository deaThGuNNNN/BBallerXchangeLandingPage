'use client';
import Image from "next/image"
import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper"
import Link from "next/link"
import { Check, Mail, ArrowLeft, Clock, Shield, Sparkles, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ConfirmPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Animated progress sequence
    const steps = [
      { delay: 800, progress: 33, step: 1 },
      { delay: 1600, progress: 66, step: 2 },
      { delay: 2400, progress: 100, step: 3 },
    ];

    steps.forEach(({ delay, progress: prog, step: s }) => {
      setTimeout(() => {
        setProgress(prog);
        setStep(s);
      }, delay);
    });
  }, []);

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => setIsResending(false), 2000);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <BasketballBackgroundWrapper />
      <div className="absolute inset-0 opacity-15 bg-noise animate-grain"></div>
      
      {/* Enhanced ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl"></div>
      
      {/* Modern Grid Layout */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-12">
        
        {/* Left Column - Enhanced Branding */}
        <motion.div 
          className="lg:col-span-4 flex flex-col justify-between"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo Section */}
          <div className="flex flex-col items-start space-y-8">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl scale-110"></div>
              <Image
                src="/bbx-logo.svg"
                alt="BBallerXchange"
                width={240}
                height={96}
                className="relative h-20 w-auto filter drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Enhanced Progress Indicator */}
            <div className="w-full max-w-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70 font-medium">Email Verification</span>
                <motion.span 
                  className="text-sm text-white font-semibold"
                  key={progress}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {progress}%
                </motion.span>
              </div>
              <div className="h-2 bg-white/8 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-white/90 to-white rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 1.2 }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                </motion.div>
              </div>
              <div className="flex justify-between text-xs text-white/50">
                <span className={step >= 1 ? 'text-white/80' : ''}>Sent</span>
                <span className={step >= 2 ? 'text-white/80' : ''}>Processing</span>
                <span className={step >= 3 ? 'text-white/80' : ''}>Ready</span>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <motion.div 
            className="hidden lg:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div 
              className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-5 group cursor-pointer"
              whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.06)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-4 h-4 text-white/80" strokeWidth={2} />
                </div>
                <span className="text-xs text-white/60 font-semibold tracking-wide">SECURE</span>
              </div>
              <p className="text-white text-sm font-bold">256-bit SSL</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-5 group cursor-pointer"
              whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.06)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white/80" strokeWidth={2} />
                </div>
                <span className="text-xs text-white/60 font-semibold tracking-wide">INSTANT</span>
              </div>
              <p className="text-white text-sm font-bold">Real-time</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Enhanced Main Content */}
        <div className="lg:col-span-8 flex items-center justify-center">
          <div className="w-full max-w-3xl">
            
            {/* Main Card with Enhanced Glassmorphism */}
            <motion.div
              className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 lg:p-16 relative overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              
              {/* Enhanced Glassmorphism overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] to-transparent rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-12">
                
                {/* Enhanced Status Icon */}
                <motion.div 
                  className="flex justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 200 }}
                >
                  <div className="relative">
                    <AnimatePresence>
                      <motion.div 
                        className={`w-24 h-24 rounded-3xl flex items-center justify-center transition-all duration-1000 ${
                          step >= 3 ? 'bg-white shadow-2xl' : 'bg-white/10 backdrop-blur-sm border border-white/20'
                        }`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Check className={`w-12 h-12 transition-all duration-700 ${
                          step >= 3 ? 'text-black scale-110' : 'text-white scale-100'
                        }`} strokeWidth={2.5} />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Animated rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-3xl border border-white/20"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ 
                          scale: step >= (i + 1) ? 1.3 + (i * 0.2) : 1,
                          opacity: step >= (i + 1) ? 0 : 0.3
                        }}
                        transition={{ delay: i * 0.3, duration: 1.5, ease: 'easeOut' }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Typography */}
                <motion.div 
                  className="text-center space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                    Check your email
                  </h1>
                  <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                    We've sent a verification link to confirm your subscription
                  </p>
                </motion.div>

                {/* Enhanced Info Cards Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                >
                  <motion.div
                    whileHover={{ y: -8, rotateX: 5, rotateY: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 group cursor-pointer hover:border-white/20"
                  >
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Mail className="w-7 h-7 text-white" strokeWidth={2} />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="text-white font-bold text-lg">Email Sent</h3>
                        <p className="text-white/60 text-base leading-relaxed">Check your inbox and click the verification link</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -8, rotateX: 5, rotateY: 5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 group cursor-pointer hover:border-white/20"
                  >
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Sparkles className="w-7 h-7 text-white" strokeWidth={2} />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="text-white font-bold text-lg">Almost Done</h3>
                        <p className="text-white/60 text-base leading-relaxed">One click and you're part of the exclusive list</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Enhanced CTA Section */}
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  <Link
                    href="/"
                    className="group relative w-full bg-white hover:bg-white/95 text-black font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-4 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" strokeWidth={2} />
                    <span className="font-black tracking-wide">BACK TO HOME</span>
                  </Link>
                  
                  {/* Enhanced Help Section */}
                  <div className="text-center space-y-4">
                    <p className="text-white/50 text-base">
                      Didn't receive the email?{' '}
                      <motion.button 
                        onClick={handleResend}
                        disabled={isResending}
                        className="text-white/80 hover:text-white font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-2 disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isResending ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Resend verification'
                        )}
                      </motion.button>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Bottom Action Cards */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <motion.div 
                className="bg-white/[0.02] backdrop-blur-sm border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="text-white/50 text-sm mb-2 group-hover:text-white/70 transition-colors">Need help?</p>
                <p className="text-white text-base font-semibold group-hover:text-white transition-colors">Contact Support</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/[0.02] backdrop-blur-sm border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="text-white/50 text-sm mb-2 group-hover:text-white/70 transition-colors">Wrong email?</p>
                <p className="text-white text-base font-semibold group-hover:text-white transition-colors">Update Address</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 