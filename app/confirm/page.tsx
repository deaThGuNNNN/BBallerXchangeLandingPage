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
      
      {/* Enhanced Noise Background */}
      <div className="absolute inset-0 opacity-30 bg-noise animate-grain"></div>
      
      {/* Geometric floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/5 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo at the Top with sophisticated glow */}
      <div className="relative z-20 flex justify-center w-full mb-8 sm:mb-12 pt-2 sm:pt-0 sm:mt-0">
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-white/10 rounded-full scale-125 animate-pulse"></div>
          <div className="absolute inset-0 blur-xl bg-white/5 rounded-full scale-150"></div>
          <Image
            src="/bbx-logo.svg"
            alt="BBallerXchange Logo"
            width={320}
            height={128}
            priority
            className="relative w-auto h-20 xs:h-28 sm:h-36 md:h-44 filter drop-shadow-2xl mx-auto"
          />
        </div>
      </div>

      {/* Enhanced Confirmation Content */}
      <div className={`relative z-10 flex flex-col items-center text-center w-full max-w-2xl mx-auto flex-1 justify-center px-2 sm:px-0 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-16 w-full shadow-[0_0_100px_rgba(255,255,255,0.1)]">
          
          {/* Sophisticated border effects */}
          <div className="absolute inset-0 rounded-3xl border border-white/10"></div>
          <div className="absolute inset-[1px] rounded-3xl border border-white/5"></div>
          
          {/* Content container */}
          <div className="relative z-10">
            {/* Minimalist Success Icon */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl scale-150 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-6 shadow-[0_0_50px_rgba(255,255,255,0.3)] animate-pulse">
                  <CheckCircle className="w-16 h-16 text-black" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Main Heading with sophisticated typography */}
            <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight tracking-wider relative">
              Almost finished...
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-white/20"></div>
            </h1>
            
            {/* Subheading with elegant icon */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-white/90 text-xl sm:text-2xl font-light tracking-wide">
                We need to confirm your email address.
              </p>
            </div>
            
            {/* Description with elegant card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed font-light">
                To complete the subscription process, please{' '}
                <span className="text-white font-medium border-b border-white/30">click the link</span>{' '}
                in the email we just sent you.
              </p>
            </div>

            {/* Sophisticated CTA Section */}
            <div className="space-y-6">
              {/* Back to Home Button with premium styling */}
              <Link 
                href="/"
                className="group relative inline-flex items-center justify-center gap-4 w-full bg-white text-black font-bold text-lg sm:text-xl tracking-[0.15em] py-5 px-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-4 focus:ring-white/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <ArrowLeft className="relative w-6 h-6 transition-all duration-300 group-hover:-translate-x-2 group-hover:text-white" strokeWidth={1.5} />
                <span className="relative group-hover:text-white transition-colors duration-300">BACK TO HOME</span>
                
                {/* Subtle hover effect lines */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
              
              {/* Additional info text with elegant styling */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/40 text-sm font-light tracking-wide">
                  Didn't receive the email? Check your spam folder or{' '}
                  <Link href="/" className="text-white/70 hover:text-white border-b border-white/20 hover:border-white/40 transition-colors duration-300">
                    try again
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist floating elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 border border-white/10 rounded-full animate-ping"></div>
        <div className="absolute -bottom-6 -left-6 w-8 h-8 border border-white/5 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        
        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/10"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/10"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/10"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/10"></div>
      </div>

      {/* Bottom elegant line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </main>
  )
} 