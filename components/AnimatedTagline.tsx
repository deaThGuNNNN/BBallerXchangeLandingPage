'use client';
import React from 'react';

const AnimatedTagline = () => {
  const text = "FOR BALLERS BY BALLERS ";
  const repeatedText = Array(20).fill(text).join('');

  return (
    <div className="relative w-full h-16 sm:h-24 overflow-hidden mb-4 sm:mb-8">
      <div 
        className="background-text-marquee" 
        aria-hidden="true" 
        style={{ 
          top: 'auto', 
          bottom: '0', 
          transform: 'none', 
          left: '0', 
          width: '100%', 
          height: '100%' 
        }}
      >
        <div 
          className="marquee-track" 
          style={{ 
            animation: 'marquee 20s linear infinite',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem'
          }}
        >
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">{repeatedText}</span>
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">{repeatedText}</span>
        </div>
      </div>
      
      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .background-text-marquee span {
            font-size: 1.125rem !important;
            letter-spacing: 0.1em !important;
            padding: 0 1rem !important;
          }
          .marquee-track {
            animation-duration: 15s !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .background-text-marquee span {
            font-size: 1.5rem !important;
          }
        }
        
        @media (min-width: 769px) {
          .background-text-marquee span {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTagline; 