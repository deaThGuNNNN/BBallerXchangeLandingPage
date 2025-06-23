'use client';
import Image from "next/image"
// import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper" // No longer needed
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AnimatedTagline from "@/components/AnimatedTagline"

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // IMPORTANT: Replace this with your actual Mailchimp form action URL
  const MAILCHIMP_URL = "https://gmail.us15.list-manage.com/subscribe/post?u=c98feb1046ae6101c18d4ca58&id=dead7d3b4d&f_id=00e398e1f0";

  // Fix iOS Safari keyboard viewport bug
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial viewport height
    setViewportHeight();

    // Update viewport height on resize and orientation change
    const handleResize = () => {
      setTimeout(setViewportHeight, 100);
    };

    const handleOrientationChange = () => {
      setTimeout(setViewportHeight, 300);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // iOS specific keyboard events
    if (typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
      const handleFocusIn = () => {
        setTimeout(() => {
          setViewportHeight();
          window.scrollTo(0, 0);
        }, 300);
      };

      const handleFocusOut = () => {
        setTimeout(() => {
          setViewportHeight();
          window.scrollTo(0, 0);
        }, 300);
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleOrientationChange);
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    setSubmitting(true);
    // The form will now submit to Mailchimp via its `action` attribute.
    // We keep this handler to show the loading state.
    // The redirect will be handled by Mailchimp.
  };

  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden flex flex-col justify-between sm:justify-center sm:items-center px-3 sm:px-4 py-4 sm:py-0" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* Animated Basketball Background - REMOVED */}
      {/* <BasketballBackgroundWrapper /> */}
      {/* Noise Background - REMOVED */}

      {/* Logo at the Top */}
      <div className="relative z-20 flex justify-center w-full mb-4 sm:mb-8 pt-safe">
        <Image
          src="/bbx-logo.svg"
          alt="BBallerXchange Logo"
          width={320}
          height={128}
          priority
          className="w-auto h-24 xs:h-28 sm:h-40 md:h-48 lg:h-56 filter drop-shadow-2xl mx-auto"
        />
      </div>

      {/* Content + Button Container */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm sm:max-w-md mx-auto flex-1 justify-center px-1 sm:px-0">
        <h1 className="text-white font-bold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
          Join the Next Era Of Basketball Culture. Limited Drops, Pro Gear, And The Streetwear Heat You've Been Waiting For. BBallerXchange Is Rewriting The Rules.
        </h1>
        
        {/* Waitlist button and form */}
        <div className="relative z-10 flex flex-col gap-4 w-full max-w-xs mx-auto mb-8 sm:mb-16 px-2 sm:px-4">
          {!showForm && (
            <button
              className="group bg-black border-2 border-white text-white font-bold text-sm xs:text-base sm:text-lg tracking-[0.1em] py-4 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black w-full min-h-[52px] sm:min-h-[56px] touch-manipulation"
              aria-label="Join the waitlist for monthly drops"
              onClick={() => setShowForm(true)}
            >
              JOIN WAITLIST
            </button>
          )}
          {showForm && (
            <form
              action={MAILCHIMP_URL}
              method="POST"
              target="_blank"
              className="flex flex-col gap-4 sm:gap-6 w-full max-w-md mx-auto bg-transparent p-0 rounded-none shadow-none border-none"
              onSubmit={handleSubmit}
            >
              {/* Hidden Mailchimp fields */}
              <input type="hidden" name="u" value="c98feb1046ae6101c18d4ca58" />
              <input type="hidden" name="id" value="dead7d3b4d" />
              
              <input
                type="text"
                name="FNAME"
                placeholder="Name"
                className="bg-transparent text-white placeholder:text-white/80 border-0 border-b border-white/80 rounded-none px-0 py-3 text-sm sm:text-base tracking-wider font-medium focus:outline-none focus:border-b-2 focus:border-white transition-all duration-200 touch-manipulation"
                required
              />
              <input
                type="email"
                name="EMAIL"
                placeholder="E-Mail"
                className="bg-transparent text-white placeholder:text-white/80 border-0 border-b border-white/80 rounded-none px-0 py-3 text-sm sm:text-base tracking-wider font-medium focus:outline-none focus:border-b-2 focus:border-white transition-all duration-200 touch-manipulation"
                required
              />
              {/* Hidden field for bots */}
              <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input type="text" name="b_c98feb1046ae6101c18d4ca58_dead7d3b4d" tabIndex={-1} defaultValue="" />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full border border-white text-white bg-transparent font-bold uppercase tracking-wider text-sm sm:text-base py-3 sm:py-4 mt-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] sm:min-h-[52px] touch-manipulation"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Animated Tagline at the bottom */}
      <div className="mt-auto">
        <AnimatedTagline />
      </div>
    </main>
  )
}
