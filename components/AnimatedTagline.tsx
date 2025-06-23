'use client';
import React from 'react';

const AnimatedTagline = () => {
  const text = "FOR BALLERS BY BALLERS ";
  const repeatedText = Array(20).fill(text).join('');

  return (
    <div className="relative w-full h-16 overflow-hidden">
      <div className="background-text-marquee" aria-hidden="true" style={{ top: 'auto', bottom: '0', transform: 'none', left: '0', width: '100%' }}>
        <div className="marquee-track" style={{ animation: 'marquee 30s linear infinite' }}>
          <span>{repeatedText}</span>
          <span>{repeatedText}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTagline; 