'use client';
import Image from "next/image"
// import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper" // No longer needed
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import AnimatedTagline from "@/components/AnimatedTagline"

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // IMPORTANT: Replace this with your actual Mailchimp form action URL
  const MAILCHIMP_URL = "https://gmail.us15.list-manage.com/subscribe/post?u=c98feb1046ae6101c18d4ca58&id=dead7d3b4d&f_id=00e398e1f0";

  const handleSubmit = (e: React.FormEvent) => {
    setSubmitting(true);
    // The form will now submit to Mailchimp via its `action` attribute.
    // We keep this handler to show the loading state.
    // The redirect will be handled by Mailchimp.
  };

  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden flex flex-col sm:justify-center sm:items-center px-2 sm:px-4 pt-4 sm:pt-0">
      {/* Animated Basketball Background - REMOVED */}
      {/* <BasketballBackgroundWrapper /> */}
      {/* Noise Background - REMOVED */}

      {/* Logo at the Top (always at top on mobile, centered on desktop) */}
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

      {/* Content + Button (centered on desktop, split on mobile) */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md mx-auto flex-1 justify-center px-2 sm:px-0 sm:justify-center sm:items-center">
        <h1 className="text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-8 leading-relaxed">
          Join the Next Era Of Basketball Culture. Limited Drops, Pro Gear, And The Streetwear Heat You've Been Waiting For. BBallerXchange Is Rewriting The Rules.
        </h1>
        {/* Waitlist button and form for all screen sizes */}
        <div className="relative z-10 flex flex-col gap-4 w-full max-w-xs mx-auto mb-16 px-4">
          {!showForm && (
            <button
              className="group bg-black border-2 border-white text-white font-bold text-base sm:text-lg tracking-[0.1em] py-4 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black w-full min-h-[48px] sm:min-h-[56px]"
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
              target="_blank" // Opens Mailchimp confirmation in new tab
              className="flex flex-col gap-6 w-full max-w-md mx-auto bg-transparent p-0 rounded-none shadow-none border-none"
              onSubmit={handleSubmit}
            >
              {/* This field tells Mailchimp where to redirect after success */}
              <input type="hidden" name="u" value="c98feb1046ae6101c18d4ca58" />
              <input type="hidden" name="id" value="dead7d3b4d" />
              
              <input
                type="text"
                name="FNAME"
                placeholder="Name"
                className="bg-transparent text-white placeholder:text-white border-0 border-b border-white/80 rounded-none px-0 py-3 text-base tracking-widest font-semibold focus:outline-none focus:border-b-2 focus:border-white transition-all duration-200"
                required
              />
              <input
                type="email"
                name="EMAIL"
                placeholder="E-Mail"
                className="bg-transparent text-white placeholder:text-white border-0 border-b border-white/80 rounded-none px-0 py-3 text-base tracking-widest font-semibold focus:outline-none focus:border-b-2 focus:border-white transition-all duration-200"
                required
              />
              {/* Hidden field for bots */}
              <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input type="text" name="b_c98feb1046ae6101c18d4ca58_dead7d3b4d" tabIndex={-1} defaultValue="" />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full border border-white text-white bg-transparent font-bold uppercase tracking-widest py-3 mt-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Animated Tagline at the bottom */}
      <AnimatedTagline />
    </main>
  )
}
