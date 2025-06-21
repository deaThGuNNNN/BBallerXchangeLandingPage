'use client';
import Image from "next/image"
import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper"
import Link from "next/link"
import { CheckCircle, Mail, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

export default function ConfirmPage() {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Staggered animation entrance
    setTimeout(() => setShowContent(true), 300);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black relative overflow-hidden flex flex-col sm:justify-center sm:items-center px-2 sm:px-4 pt-4 sm:pt-0">
      {/* Animated Basketball Background */}
      <BasketballBackgroundWrapper />
      
      {/* Enhanced Noise Background with gradient overlay */}
      <div className="absolute inset-0 opacity-30 bg-noise animate-grain"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo at the Top with enhanced glow */}
      <div className="relative z-20 flex justify-center w-full mb-6 sm:mb-8 pt-2 sm:pt-0 sm:mt-0">
        <div className="relative">
          <div className="absolute inset-0 blur-xl bg-white/20 rounded-full scale-110 animate-pulse"></div>
          <Image
            src="/bbx-logo.svg"
            alt="BBallerXchange Logo"
            width={320}
            height={128}
            priority
            className="relative w-auto h-24 xs:h-32 sm:h-40 md:h-48 filter drop-shadow-2xl mx-auto"
          />
        </div>
      </div>

      {/* Enhanced Confirmation Content */}
      <div className={`relative z-10 flex flex-col items-center text-center w-full max-w-lg mx-auto flex-1 justify-center px-2 sm:px-0 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl border border-white/30 rounded-2xl p-8 sm:p-12 w-full shadow-2xl">
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-purple-500/20 blur-sm animate-pulse"></div>
          <div className="absolute inset-[1px] rounded-2xl bg-black/90"></div>
          
          {/* Content container */}
          <div className="relative z-10">
            {/* Animated Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-4 animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Main Heading with gradient text */}
            <h1 className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-black text-2xl sm:text-3xl md:text-4xl mb-6 leading-tight tracking-wide">
              Almost finished...
            </h1>
            
            {/* Subheading with icon */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2 animate-pulse">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <p className="text-white/90 text-lg sm:text-xl font-semibold">
                We need to confirm your email address.
              </p>
            </div>
            
            {/* Description with enhanced styling */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                To complete the subscription process, please{' '}
                <span className="text-orange-400 font-semibold">click the link</span>{' '}
                in the email we just sent you.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-4">
              {/* Back to Home Button with enhanced styling */}
              <Link 
                href="/"
                className="group relative inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-white to-gray-100 text-black font-bold text-base sm:text-lg tracking-[0.1em] py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowLeft className="relative w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="relative group-hover:text-white transition-colors">BACK TO HOME</span>
              </Link>
              
              {/* Additional info text */}
              <p className="text-white/50 text-sm">
                Didn't receive the email? Check your spam folder or{' '}
                <Link href="/" className="text-orange-400 hover:text-orange-300 underline">
                  try again
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Floating success elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500/20 rounded-full animate-ping"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </main>
  )
} 