'use client';
import Image from "next/image"
import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper"
import Link from "next/link"
import { Check, Mail, ArrowLeft, Clock, Shield, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function ConfirmPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Animated progress sequence
    const steps = [
      { delay: 500, progress: 33, step: 1 },
      { delay: 1200, progress: 66, step: 2 },
      { delay: 2000, progress: 100, step: 3 },
    ];

    steps.forEach(({ delay, progress: prog, step: s }) => {
      setTimeout(() => {
        setProgress(prog);
        setStep(s);
      }, delay);
    });
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <BasketballBackgroundWrapper />
      <div className="absolute inset-0 opacity-20 bg-noise animate-grain"></div>
      
      {/* Modern Grid Layout */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-8">
        
        {/* Left Column - Logo & Branding */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div className="relative mb-8">
              <Image
                src="/bbx-logo.svg"
                alt="BBallerXchange"
                width={200}
                height={80}
                className="h-16 w-auto filter drop-shadow-lg"
              />
            </div>
            
            {/* Progress Indicator */}
            <div className="w-full max-w-xs">
              <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                <span>Email Verification</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-white/60" />
                <span className="text-xs text-white/60 font-medium">SECURE</span>
              </div>
              <p className="text-white text-sm font-semibold">256-bit SSL</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-white/60" />
                <span className="text-xs text-white/60 font-medium">INSTANT</span>
              </div>
              <p className="text-white text-sm font-semibold">Real-time</p>
            </div>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="lg:col-span-8 flex items-center justify-center">
          <div className="w-full max-w-2xl">
            
            {/* Main Card with Bento Grid */}
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                
                {/* Status Icon with Animation */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-700 ${
                      step >= 3 ? 'bg-white scale-110' : 'bg-white/10 scale-100'
                    }`}>
                      <Check className={`w-10 h-10 transition-all duration-500 ${
                        step >= 3 ? 'text-black scale-110' : 'text-white scale-100'
                      }`} strokeWidth={2.5} />
                    </div>
                    
                    {/* Animated rings */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-white/20 transition-all duration-1000 ${
                      step >= 2 ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
                    }`}></div>
                    <div className={`absolute inset-0 rounded-2xl border border-white/10 transition-all duration-1000 delay-300 ${
                      step >= 3 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
                    }`}></div>
                  </div>
                </div>

                {/* Modern Typography */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                    Check your email
                  </h1>
                  <p className="text-xl text-white/70 font-light leading-relaxed max-w-lg mx-auto">
                    We've sent a verification link to confirm your subscription
                  </p>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 group hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">Email Sent</h3>
                        <p className="text-white/60 text-xs leading-relaxed">Check your inbox and click the verification link</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 group hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">Almost Done</h3>
                        <p className="text-white/60 text-xs leading-relaxed">One click and you're part of the exclusive list</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="group relative w-full bg-white hover:bg-white/90 text-black font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span>Back to Home</span>
                  </Link>
                  
                  {/* Help Text */}
                  <div className="text-center">
                    <p className="text-white/40 text-sm">
                      Didn't receive the email?{' '}
                      <button className="text-white/70 hover:text-white underline underline-offset-2 transition-colors">
                        Resend verification
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-4 text-center hover:bg-white/[0.04] transition-colors cursor-pointer">
                <p className="text-white/60 text-xs mb-1">Need help?</p>
                <p className="text-white text-sm font-medium">Contact Support</p>
              </div>
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-4 text-center hover:bg-white/[0.04] transition-colors cursor-pointer">
                <p className="text-white/60 text-xs mb-1">Wrong email?</p>
                <p className="text-white text-sm font-medium">Update Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-3xl"></div>
    </main>
  )
} 