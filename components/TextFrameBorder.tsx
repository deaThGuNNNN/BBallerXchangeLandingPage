'use client';
import React from 'react';

const TextFrameBorder = () => {
  const text = "FOR BALLERS BY BALLERS ";
  const repeatedText = Array(100).fill(text).join(''); // Create a very long string

  return (
    <>
      {/* Top border */}
      <div className="fixed top-0 left-0 right-0 h-[60px] overflow-hidden z-10 pointer-events-none">
        <div className="absolute flex animate-marquee">
          <div className="flex whitespace-nowrap">
            <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
              {repeatedText}
            </span>
            <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
              {repeatedText}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="fixed bottom-0 left-0 right-0 h-[60px] overflow-hidden z-10 pointer-events-none">
        <div className="absolute flex animate-marquee-reverse">
          <div className="flex whitespace-nowrap">
            <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
              {repeatedText}
            </span>
            <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
              {repeatedText}
            </span>
          </div>
        </div>
      </div>

      {/* Left border */}
      <div className="fixed left-0 top-0 bottom-0 w-[60px] overflow-hidden z-10 pointer-events-none">
        <div className="absolute w-[200vh] h-[60px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <div className="absolute flex animate-marquee">
            <div className="flex whitespace-nowrap">
              <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
                {repeatedText}
              </span>
              <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
                {repeatedText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right border */}
      <div className="fixed right-0 top-0 bottom-0 w-[60px] overflow-hidden z-10 pointer-events-none">
        <div className="absolute w-[200vh] h-[60px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center">
          <div className="absolute flex animate-marquee-reverse">
            <div className="flex whitespace-nowrap">
              <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
                {repeatedText}
              </span>
              <span className="text-[2.5rem] font-black uppercase tracking-[0.2em] text-white/15 px-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
                {repeatedText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextFrameBorder; 