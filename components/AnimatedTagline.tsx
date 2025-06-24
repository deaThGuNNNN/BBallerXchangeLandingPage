'use client';
import React from 'react';

const AnimatedTagline = () => {
  const text = "FOR BALLERS BY BALLERS ";
  const repeatedText = Array(20).fill(text).join('');

  return (
    <div className="horizontal-marquee-container">
      <div className="horizontal-marquee-track">
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
};

export default AnimatedTagline; 