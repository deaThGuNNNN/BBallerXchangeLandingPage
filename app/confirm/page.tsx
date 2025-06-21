'use client';
import Image from "next/image"
import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper"
import Link from "next/link"

export default function ConfirmPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden flex flex-col sm:justify-center sm:items-center px-2 sm:px-4 pt-4 sm:pt-0">
      {/* Animated Basketball Background */}
      <BasketballBackgroundWrapper />
      {/* Noise Background */}
      <div className="absolute inset-0 opacity-30 bg-noise animate-grain"></div>

      {/* Logo at the Top */}
      <div className="relative z-20 flex justify-center w-full mb-6 sm:mb-8 pt-2 sm:pt-0 sm:mt-0">
        <Image
          src="/bbx-logo.svg"
          alt="BBallerXchange Logo"
          width={320}
          height={128}
          priority
          className="w-auto h-32 xs:h-40 sm:h-48 md:h-56 filter drop-shadow-2xl mx-auto"
        />
      </div>

      {/* Confirmation Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md mx-auto flex-1 justify-center px-2 sm:px-0 sm:justify-center sm:items-center">
        <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-8 sm:p-10 w-full max-w-md">
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed">
            Almost finished...
          </h1>
          
          <p className="text-white/90 text-base sm:text-lg mb-6 leading-relaxed">
            We need to confirm your email address.
          </p>
          
          <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
            To complete the subscription process, please click the link in the email we just sent you.
          </p>

          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-block bg-black border-2 border-white text-white font-bold text-base sm:text-lg tracking-[0.1em] py-4 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  )
} 